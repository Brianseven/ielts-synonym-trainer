import {
  BookOpen,
  Brain,
  Check,
  ChevronRight,
  CircleHelp,
  Flag,
  LibraryBig,
  RotateCcw,
  Search,
  Sparkles,
  Target,
  Volume2,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { categories, groups, scenarios, vocabulary, type Scenario, type VocabularyEntry, type VocabularyGroup } from "./data";

type Page = "dashboard" | "library" | "memorize" | "quiz" | "review";
type StudyStatus = "new" | "learning" | "mastered" | "focus";
type MemorizationRange = "all" | "weak" | "mastered" | "new";

interface EntryProgress {
  status: StudyStatus;
  correct: number;
  wrong: number;
  lastSeen?: string;
}

interface QuizQuestion {
  id: string;
  type: "synonym" | "chinese" | "context";
  entry: VocabularyEntry;
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
}

const STORAGE_KEY = "ielts-synonym-progress-v1";
const statusLabels: Record<StudyStatus, string> = {
  new: "未学习",
  learning: "学习中",
  mastered: "已掌握",
  focus: "重点复习",
};

const statusOptions: Array<{ value: "all" | StudyStatus; label: string }> = [
  { value: "all", label: "全部状态" },
  { value: "new", label: "未学习" },
  { value: "learning", label: "学习中" },
  { value: "mastered", label: "已掌握" },
  { value: "focus", label: "重点复习" },
];

const memorizationRangeOptions: Array<{ value: MemorizationRange; label: string }> = [
  { value: "all", label: "全部单词" },
  { value: "weak", label: "不认识 / 重点" },
  { value: "mastered", label: "已掌握" },
  { value: "new", label: "未学习" },
];

function answerText(entry: VocabularyEntry): string {
  return entry.synonyms.length > 0 ? entry.synonyms.join(" / ") : entry.chinese;
}

function answerLabel(entry: VocabularyEntry): string {
  return entry.group === "生物学专业名词" ? "专业释义" : "同义替换";
}

function firstAnswer(entry: VocabularyEntry): string {
  return entry.synonyms[0] ?? entry.word;
}

function speakEnglish(text: string): void {
  if (typeof window === "undefined" || !("speechSynthesis" in window) || typeof SpeechSynthesisUtterance === "undefined") {
    return;
  }

  const cleaned = text.replace(/\s*\/\s*/g, ", ").replace(/[()]/g, " ").replace(/\s+/g, " ").trim();
  if (!cleaned) return;

  const utterance = new SpeechSynthesisUtterance(cleaned);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  utterance.pitch = 1;

  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find((item) => item.lang.toLowerCase().startsWith("en-us")) ?? voices.find((item) => item.lang.toLowerCase().startsWith("en"));
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
}

function loadProgress(): Record<string, EntryProgress> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function getProgress(progress: Record<string, EntryProgress>, id: string): EntryProgress {
  return progress[id] ?? { status: "new", correct: 0, wrong: 0 };
}

function matchesMemorizationRange(itemProgress: EntryProgress, range: MemorizationRange): boolean {
  if (range === "all") return true;
  if (range === "mastered") return itemProgress.status === "mastered";
  if (range === "new") return itemProgress.status === "new";
  return itemProgress.status === "focus" || itemProgress.status === "learning" || itemProgress.wrong > 0;
}

function shuffle<T>(items: T[]): T[] {
  return [...items].sort(() => Math.random() - 0.5);
}

function uniqueOptions(answer: string, distractors: string[]): string[] {
  const seen = new Set<string>([answer.toLowerCase()]);
  const options = [answer];
  for (const option of shuffle(distractors)) {
    if (!option || seen.has(option.toLowerCase())) continue;
    seen.add(option.toLowerCase());
    options.push(option);
    if (options.length === 4) break;
  }
  return shuffle(options);
}

function buildQuestion(entry: VocabularyEntry, allEntries: VocabularyEntry[]): QuizQuestion {
  const availableTypes: QuizQuestion["type"][] =
    entry.group === "生物学专业名词" ? ["chinese", "context"] : ["synonym", "chinese", "context"];
  const type = shuffle<QuizQuestion["type"]>(availableTypes)[0];
  const answer = type === "chinese" || entry.group === "生物学专业名词" ? entry.word : firstAnswer(entry);
  const sameGroupEntries = allEntries.filter((item) => item.group === entry.group);
  const synonymPool = sameGroupEntries.flatMap((item) => (item.synonyms.length > 0 ? item.synonyms : [item.word]));
  const wordPool = sameGroupEntries.map((item) => item.word);

  if (entry.group === "生物学专业名词") {
    return {
      id: `${entry.id}-${type}-${Date.now()}`,
      type,
      entry,
      prompt: type === "chinese" ? `“${entry.chinese}” 对应的英文专业术语是？` : `${entry.explanation}`,
      options: uniqueOptions(answer, wordPool),
      answer,
      explanation: `${entry.word}: ${entry.chinese}。${entry.explanation ?? ""}`,
    };
  }

  if (type === "chinese") {
    return {
      id: `${entry.id}-chinese-${Date.now()}`,
      type,
      entry,
      prompt: `“${entry.chinese}” 对应的英文表达是？`,
      options: uniqueOptions(answer, wordPool),
      answer,
      explanation: `${entry.word} 的常见同义替换：${answerText(entry)}`,
    };
  }

  if (type === "context") {
    return {
      id: `${entry.id}-context-${Date.now()}`,
      type,
      entry,
      prompt: entry.example.replace(`'${firstAnswer(entry)}'`, "____"),
      options: uniqueOptions(answer, synonymPool),
      answer,
      explanation: entry.explanation ?? `${entry.word} 可以替换为 ${answerText(entry)}`,
    };
  }

  return {
    id: `${entry.id}-synonym-${Date.now()}`,
    type,
    entry,
    prompt: `“${entry.word}” 的同义替换表达是？`,
    options: uniqueOptions(answer, synonymPool),
    answer,
    explanation: `${entry.word}: ${entry.chinese}`,
  };
}

function App() {
  const [page, setPage] = useState<Page>("dashboard");
  const [progress, setProgress] = useState<Record<string, EntryProgress>>(() => loadProgress());
  const [reviewOnly, setReviewOnly] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const stats = useMemo(() => {
    const mastered = vocabulary.filter((item) => getProgress(progress, item.id).status === "mastered").length;
    const focus = vocabulary.filter((item) => getProgress(progress, item.id).status === "focus").length;
    const learning = vocabulary.filter((item) => getProgress(progress, item.id).status === "learning").length;
    const wrong = vocabulary.filter((item) => getProgress(progress, item.id).wrong > 0).length;
    const ielts = vocabulary.filter((item) => item.group === "雅思同义替换").length;
    const biology = vocabulary.filter((item) => item.group === "生物学专业名词").length;
    return {
      total: vocabulary.length,
      mastered,
      unmastered: vocabulary.length - mastered,
      focus,
      learning,
      wrong,
      ielts,
      biology,
      today: Math.min(Math.max(focus + wrong + learning, 20), vocabulary.length),
    };
  }, [progress]);

  const updateProgress = (id: string, patch: Partial<EntryProgress>) => {
    setProgress((current) => {
      const previous = getProgress(current, id);
      return {
        ...current,
        [id]: {
          ...previous,
          ...patch,
          lastSeen: new Date().toISOString(),
        },
      };
    });
  };

  const markQuizResult = (id: string, correct: boolean) => {
    setProgress((current) => {
      const previous = getProgress(current, id);
      return {
        ...current,
        [id]: {
          ...previous,
          status: correct ? previous.status : "focus",
          correct: previous.correct + (correct ? 1 : 0),
          wrong: previous.wrong + (correct ? 0 : 1),
          lastSeen: new Date().toISOString(),
        },
      };
    });
  };

  const openMemorize = (onlyReview = false) => {
    setReviewOnly(onlyReview);
    setPage("memorize");
  };

  return (
    <div className="app-shell">
      <aside className="sidebar" aria-label="主导航">
        <div className="brand">
          <div className="brand-mark">IELTS</div>
          <div>
            <strong>词库背诵</strong>
            <span>IELTS + Biology</span>
          </div>
        </div>
        <nav className="nav-list">
          <NavButton page="dashboard" current={page} onClick={setPage} icon={<Sparkles size={18} />} label="首页" />
          <NavButton page="library" current={page} onClick={setPage} icon={<LibraryBig size={18} />} label="词库" />
          <button className={page === "memorize" ? "active" : ""} onClick={() => openMemorize(false)}>
            <Brain size={18} />
            背诵
          </button>
          <NavButton page="quiz" current={page} onClick={setPage} icon={<CircleHelp size={18} />} label="测试" />
          <NavButton page="review" current={page} onClick={setPage} icon={<Flag size={18} />} label="复习" />
        </nav>
      </aside>

      <main className="main-panel">
        {page === "dashboard" && <Dashboard stats={stats} setPage={setPage} openMemorize={openMemorize} />}
        {page === "library" && <Library progress={progress} updateProgress={updateProgress} />}
        {page === "memorize" && (
          <Memorization progress={progress} updateProgress={updateProgress} reviewOnly={reviewOnly} />
        )}
        {page === "quiz" && <Quiz markQuizResult={markQuizResult} />}
        {page === "review" && (
          <Review
            progress={progress}
            updateProgress={updateProgress}
            openMemorize={() => openMemorize(true)}
            clearMasteredReview={() => {
              setProgress((current) => {
                const next = { ...current };
                for (const item of vocabulary) {
                  const itemProgress = getProgress(next, item.id);
                  if (itemProgress.status === "mastered") {
                    next[item.id] = { ...itemProgress, wrong: 0 };
                  }
                }
                return next;
              });
            }}
          />
        )}
      </main>
    </div>
  );
}

function NavButton({
  page,
  current,
  onClick,
  icon,
  label,
}: {
  page: Page;
  current: Page;
  onClick: (page: Page) => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className={page === current ? "active" : ""} onClick={() => onClick(page)}>
      {icon}
      {label}
    </button>
  );
}

function SpeakButton({
  text,
  label = "发音",
  compact = false,
}: {
  text: string;
  label?: string;
  compact?: boolean;
}) {
  const supported =
    typeof window !== "undefined" && "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined";

  if (!supported || !text.trim()) return null;

  return (
    <button
      type="button"
      className={`speak-button ${compact ? "speak-button-compact" : ""}`}
      onClick={(event) => {
        event.stopPropagation();
        speakEnglish(text);
      }}
      aria-label={`朗读 ${text}`}
      title={`朗读 ${text}`}
    >
      <Volume2 size={compact ? 15 : 17} />
      {!compact && <span>{label}</span>}
    </button>
  );
}

function Dashboard({
  stats,
  setPage,
  openMemorize,
}: {
  stats: {
    total: number;
    mastered: number;
    unmastered: number;
    today: number;
    focus: number;
    wrong: number;
    ielts: number;
    biology: number;
  };
  setPage: (page: Page) => void;
  openMemorize: (onlyReview?: boolean) => void;
}) {
  return (
    <section className="page-stack">
      <header className="page-header">
        <p>Dashboard</p>
        <h1>今天背一点，同义替换和专业术语都会越来越顺手。</h1>
      </header>

      <div className="metric-grid">
        <Metric label="总词条数" value={stats.total} tone="ink" />
        <Metric label="已掌握" value={stats.mastered} tone="green" />
        <Metric label="未掌握" value={stats.unmastered} tone="red" />
        <Metric label="今日建议复习" value={stats.today} tone="amber" />
      </div>

      <div className="action-band">
        <button className="primary-action" onClick={() => openMemorize(false)}>
          <Brain size={20} />
          开始背诵
          <ChevronRight size={18} />
        </button>
        <button className="secondary-action" onClick={() => setPage("quiz")}>
          <CircleHelp size={20} />
          开始测试
        </button>
        <button className="secondary-action" onClick={() => setPage("library")}>
          <BookOpen size={20} />
          查看词库
        </button>
      </div>

      <div className="insight-row">
        <div>
          <strong>{stats.focus}</strong>
          <span>重点复习词条</span>
        </div>
        <div>
          <strong>{stats.wrong}</strong>
          <span>曾经答错词条</span>
        </div>
        <div>
          <strong>{stats.ielts}</strong>
          <span>雅思同义替换</span>
        </div>
        <div>
          <strong>{stats.biology}</strong>
          <span>生物学专业名词</span>
        </div>
      </div>
    </section>
  );
}

function Metric({ label, value, tone }: { label: string; value: number; tone: string }) {
  return (
    <div className={`metric metric-${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Library({
  progress,
  updateProgress,
}: {
  progress: Record<string, EntryProgress>;
  updateProgress: (id: string, patch: Partial<EntryProgress>) => void;
}) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<"all" | VocabularyGroup>("all");
  const [category, setCategory] = useState("all");
  const [scenario, setScenario] = useState<"all" | Scenario>("all");
  const [status, setStatus] = useState<"all" | StudyStatus>("all");

  const entries = useMemo(() => {
    const q = query.trim().toLowerCase();
    return vocabulary.filter((item) => {
      const itemProgress = getProgress(progress, item.id);
      const searchable = [item.group, item.word, item.chinese, item.example, item.category, item.scenario, ...item.synonyms]
        .join(" ")
        .toLowerCase();
      return (
        (!q || searchable.includes(q)) &&
        (group === "all" || item.group === group) &&
        (category === "all" || item.category === category) &&
        (scenario === "all" || item.scenario === scenario) &&
        (status === "all" || itemProgress.status === status)
      );
    });
  }, [category, group, progress, query, scenario, status]);

  return (
    <section className="page-stack">
      <header className="section-title">
        <div>
          <p>Vocabulary Library</p>
          <h1>词库</h1>
        </div>
        <span>{entries.length} 条结果</span>
      </header>

      <div className="toolbar">
        <label className="search-box">
          <Search size={18} />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索英文、同义词或中文释义" />
        </label>
        <select value={group} onChange={(event) => setGroup(event.target.value as "all" | VocabularyGroup)}>
          <option value="all">全部分组</option>
          {groups.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          <option value="all">全部主题</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select value={scenario} onChange={(event) => setScenario(event.target.value as "all" | Scenario)}>
          <option value="all">全部场景</option>
          {scenarios.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select value={status} onChange={(event) => setStatus(event.target.value as "all" | StudyStatus)}>
          {statusOptions.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <div className="vocab-list">
        {entries.map((item) => {
          const itemProgress = getProgress(progress, item.id);
          return (
            <article className="vocab-card" key={item.id}>
              <div className="vocab-main">
                <div>
                  <div className="word-line">
                    <h2>{item.word}</h2>
                    <SpeakButton text={item.word} compact />
                  </div>
                  <p>{item.chinese}</p>
                </div>
                <span className={`status-pill status-${itemProgress.status}`}>{statusLabels[itemProgress.status]}</span>
              </div>
              <div className="synonym-line">
                <span>{answerLabel(item)}：</span>
                <span className="synonym-text">{answerText(item)}</span>
                {item.synonyms.length > 0 && <SpeakButton text={answerText(item)} label="朗读替换" compact />}
              </div>
              <p className="example">{item.example}</p>
              <div className="meta-line">
                <span>{item.group}</span>
                <span>{item.category}</span>
                <span>{item.scenario}</span>
                <span>错题 {itemProgress.wrong}</span>
              </div>
              <div className="card-actions">
                <button onClick={() => updateProgress(item.id, { status: "mastered", correct: itemProgress.correct + 1 })}>
                  <Check size={16} />
                  已掌握
                </button>
                <button onClick={() => updateProgress(item.id, { status: "learning" })}>
                  <RotateCcw size={16} />
                  学习中
                </button>
                <button onClick={() => updateProgress(item.id, { status: "focus" })}>
                  <Flag size={16} />
                  重点
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Memorization({
  progress,
  updateProgress,
  reviewOnly,
}: {
  progress: Record<string, EntryProgress>;
  updateProgress: (id: string, patch: Partial<EntryProgress>) => void;
  reviewOnly: boolean;
}) {
  const [groupFilter, setGroupFilter] = useState<"all" | VocabularyGroup>("all");
  const [rangeFilter, setRangeFilter] = useState<MemorizationRange>("all");

  const deck = useMemo(() => {
    const source = reviewOnly
      ? vocabulary.filter((item) => {
          const itemProgress = getProgress(progress, item.id);
          return itemProgress.status === "focus" || itemProgress.wrong > 0;
        })
      : vocabulary;
    return source
      .filter((item) => groupFilter === "all" || item.group === groupFilter)
      .filter((item) => matchesMemorizationRange(getProgress(progress, item.id), rangeFilter))
      .sort((a, b) => {
        const aProgress = getProgress(progress, a.id);
        const bProgress = getProgress(progress, b.id);
        const aScore = (aProgress.status === "focus" ? -3 : 0) + aProgress.correct - aProgress.wrong * 2;
        const bScore = (bProgress.status === "focus" ? -3 : 0) + bProgress.correct - bProgress.wrong * 2;
        return aScore - bScore;
      });
  }, [groupFilter, progress, rangeFilter, reviewOnly]);

  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [frontMode, setFrontMode] = useState<"word" | "chinese">("word");
  const entry = deck[index % Math.max(deck.length, 1)];
  const itemProgress = entry ? getProgress(progress, entry.id) : undefined;

  useEffect(() => {
    setIndex(0);
    setFlipped(false);
  }, [groupFilter, rangeFilter, reviewOnly]);

  if (!entry || !itemProgress) {
    return (
      <section className="empty-state">
        <Flag size={32} />
        <h1>这个范围里暂时没有词条</h1>
        <p>可以切换分组或背诵范围，也可以先在词库里标记重点、或继续测试积累错题。</p>
      </section>
    );
  }

  const next = () => {
    setFlipped(false);
    setIndex((value) => (value + 1) % deck.length);
  };

  return (
    <section className="memorize-layout">
      <header className="section-title">
        <div>
          <p>Memorization</p>
          <h1>{reviewOnly ? "重点复习闪卡" : "闪卡背诵"}</h1>
        </div>
        <div className="study-controls">
          <select value={groupFilter} onChange={(event) => setGroupFilter(event.target.value as "all" | VocabularyGroup)}>
            <option value="all">全部分组</option>
            {groups.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
          <select value={rangeFilter} onChange={(event) => setRangeFilter(event.target.value as MemorizationRange)}>
            {memorizationRangeOptions.map((item) => (
              <option key={item.value} value={item.value}>
                {item.label}
              </option>
            ))}
          </select>
          <div className="segmented">
            <button className={frontMode === "word" ? "selected" : ""} onClick={() => setFrontMode("word")}>
              英文
            </button>
            <button className={frontMode === "chinese" ? "selected" : ""} onClick={() => setFrontMode("chinese")}>
              中文
            </button>
          </div>
        </div>
      </header>

      <button className={`flash-card ${flipped ? "flipped" : ""}`} onClick={() => setFlipped((value) => !value)}>
        {!flipped ? (
          <div className="flash-front">
            <span>{index + 1} / {deck.length} · {statusLabels[itemProgress.status]}</span>
            <h2>{frontMode === "word" ? entry.word : entry.chinese}</h2>
            <p>点击卡片查看答案</p>
          </div>
        ) : (
          <div className="flash-back">
            <span>{entry.category} · {entry.scenario}</span>
            <h2>{answerText(entry)}</h2>
            <p>{entry.chinese}</p>
            <blockquote>{entry.example}</blockquote>
          </div>
        )}
      </button>

      <div className="study-actions">
        <SpeakButton text={entry.word} label="读原词" />
        {entry.synonyms.length > 0 && <SpeakButton text={answerText(entry)} label="读替换" />}
        <button
          onClick={() => {
            updateProgress(entry.id, { status: "mastered", correct: itemProgress.correct + 1 });
            next();
          }}
        >
          <Check size={18} />
          认识
        </button>
        <button
          onClick={() => {
            updateProgress(entry.id, { status: "learning", wrong: itemProgress.wrong + 1 });
            next();
          }}
        >
          <X size={18} />
          不认识
        </button>
        <button onClick={() => updateProgress(entry.id, { status: "focus" })}>
          <Flag size={18} />
          标记重点
        </button>
        <button onClick={next}>
          下一个
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  );
}

function Quiz({ markQuizResult }: { markQuizResult: (id: string, correct: boolean) => void }) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [answers, setAnswers] = useState<Array<{ question: QuizQuestion; selected: string; correct: boolean }>>([]);

  const startQuiz = () => {
    const picked = shuffle(vocabulary).slice(0, 10).map((entry) => buildQuestion(entry, vocabulary));
    setQuestions(picked);
    setCurrent(0);
    setSelected("");
    setSubmitted(false);
    setAnswers([]);
  };

  const question = questions[current];
  const finished = questions.length > 0 && current >= questions.length;

  if (!questions.length) {
    return (
      <section className="quiz-start">
        <Target size={40} />
        <h1>10 题快速测试</h1>
        <p>随机混合英文选同义替换、中文选英文、语境选词三种题型。</p>
        <button className="primary-action" onClick={startQuiz}>
          <CircleHelp size={20} />
          开始测试
        </button>
      </section>
    );
  }

  if (finished) {
    const correctCount = answers.filter((item) => item.correct).length;
    const wrongAnswers = answers.filter((item) => !item.correct);
    return (
      <section className="page-stack">
        <header className="page-header">
          <p>Quiz Result</p>
          <h1>正确率 {Math.round((correctCount / answers.length) * 100)}%</h1>
        </header>
        <div className="metric-grid compact">
          <Metric label="答对" value={correctCount} tone="green" />
          <Metric label="答错" value={wrongAnswers.length} tone="red" />
        </div>
        <div className="wrong-list">
          <h2>错题列表</h2>
          {wrongAnswers.length === 0 ? (
            <p className="muted">这轮没有错题。</p>
          ) : (
            wrongAnswers.map(({ question, selected }) => (
              <article className="review-card" key={question.id}>
                <strong>{question.entry.word}</strong>
                <span>你的答案：{selected || "未选择"}</span>
                <span>正确答案：{question.answer}</span>
                <p>{question.explanation}</p>
              </article>
            ))
          )}
        </div>
        <button className="secondary-action" onClick={startQuiz}>
          <RotateCcw size={18} />
          再测一轮
        </button>
      </section>
    );
  }

  const submitAnswer = () => {
    if (!selected || !question) return;
    const correct = selected === question.answer;
    markQuizResult(question.entry.id, correct);
    setAnswers((items) => [...items, { question, selected, correct }]);
    setSubmitted(true);
  };

  const nextQuestion = () => {
    setSubmitted(false);
    setSelected("");
    setCurrent((value) => value + 1);
  };

  return (
    <section className="quiz-panel">
      <div className="quiz-progress">
        <span>Question {current + 1} / {questions.length}</span>
        <div>
          <i style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
        </div>
      </div>
      <div className="quiz-heading">
        <h1>{question.prompt}</h1>
        <SpeakButton text={question.entry.word} label="读关键词" />
      </div>
      <div className="option-grid">
        {question.options.map((option) => {
          const optionClass = [
              selected === option ? "selected" : "",
              submitted && option === question.answer ? "correct" : "",
              submitted && selected === option && option !== question.answer ? "wrong" : "",
            ].join(" ");
          return (
            <div className={`option-choice ${optionClass}`} key={option}>
              <button type="button" onClick={() => !submitted && setSelected(option)}>
                {option}
              </button>
              <SpeakButton text={option} label="朗读选项" compact />
            </div>
          );
        })}
      </div>
      {submitted && (
        <div className="answer-panel">
          <div className="answer-title">
            <strong>{selected === question.answer ? "回答正确" : "回答错误"}</strong>
            <SpeakButton text={question.answer} label="朗读答案" compact />
          </div>
          <p>{question.explanation}</p>
        </div>
      )}
      <div className="quiz-actions">
        {!submitted ? (
          <button className="primary-action" disabled={!selected} onClick={submitAnswer}>
            提交答案
          </button>
        ) : (
          <button className="primary-action" onClick={nextQuestion}>
            {current + 1 === questions.length ? "查看结果" : "下一题"}
            <ChevronRight size={18} />
          </button>
        )}
      </div>
    </section>
  );
}

function Review({
  progress,
  updateProgress,
  openMemorize,
  clearMasteredReview,
}: {
  progress: Record<string, EntryProgress>;
  updateProgress: (id: string, patch: Partial<EntryProgress>) => void;
  openMemorize: () => void;
  clearMasteredReview: () => void;
}) {
  const reviewItems = vocabulary.filter((item) => {
    const itemProgress = getProgress(progress, item.id);
    return itemProgress.status === "focus" || itemProgress.wrong > 0;
  });

  return (
    <section className="page-stack">
      <header className="section-title">
        <div>
          <p>Review</p>
          <h1>错题 / 重点复习</h1>
        </div>
        <div className="header-actions">
          <button className="secondary-action" onClick={openMemorize}>
            <Brain size={18} />
            重新背诵
          </button>
          <button className="secondary-action" onClick={clearMasteredReview}>
            <Check size={18} />
            清除已掌握
          </button>
        </div>
      </header>

      {reviewItems.length === 0 ? (
        <div className="empty-state inline">
          <Flag size={28} />
          <h2>暂无复习项</h2>
          <p>测试答错或手动标记重点后，会自动出现在这里。</p>
        </div>
      ) : (
        <div className="review-grid">
          {reviewItems.map((item) => {
            const itemProgress = getProgress(progress, item.id);
            return (
              <article className="review-card" key={item.id}>
                <div className="vocab-main">
                  <div className="word-line">
                    <strong>{item.word}</strong>
                    <SpeakButton text={item.word} compact />
                  </div>
                  <span className={`status-pill status-${itemProgress.status}`}>{statusLabels[itemProgress.status]}</span>
                </div>
                <p>{answerText(item)}</p>
                <span>{item.chinese}</span>
                <small>答错 {itemProgress.wrong} 次 · {item.group} · {item.category}</small>
                <div className="card-actions">
                  <button onClick={() => updateProgress(item.id, { status: "mastered", wrong: 0 })}>
                    <Check size={16} />
                    已掌握
                  </button>
                  <button onClick={() => updateProgress(item.id, { status: "focus" })}>
                    <Flag size={16} />
                    保留重点
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}

export default App;
