export type Scenario = "Reading" | "Listening" | "Writing" | "Speaking" | "Biology";
export type VocabularyGroup = "雅思同义替换" | "生物学专业名词";

export interface VocabularyEntry {
  id: string;
  group: VocabularyGroup;
  word: string;
  synonyms: string[];
  chinese: string;
  category: string;
  scenario: Scenario;
  example: string;
  explanation?: string;
}

export const ieltsVocabulary: VocabularyEntry[] = [
  {
    "id": "ielts-001",
    "group": "雅思同义替换",
    "word": "resemble",
    "synonyms": [
      "like",
      "look like",
      "be similar to"
    ],
    "chinese": "v.像;与……相似",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'resemble' is often paraphrased as 'like' in the passage.",
    "explanation": "resemble ≈ like / look like / be similar to"
  },
  {
    "id": "ielts-002",
    "group": "雅思同义替换",
    "word": "recognize",
    "synonyms": [
      "perceive",
      "acknowledge",
      "realize",
      "appreciate",
      "admit",
      "identify",
      "comprehend",
      "understand",
      "know"
    ],
    "chinese": "v.认出;识别；承认",
    "category": "教育",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'recognize' is often paraphrased as 'perceive' in the passage.",
    "explanation": "recognize ≈ perceive / acknowledge / realize / appreciate"
  },
  {
    "id": "ielts-003",
    "group": "雅思同义替换",
    "word": "adjust",
    "synonyms": [
      "change",
      "modify",
      "shift",
      "alter"
    ],
    "chinese": "v.调整;使适合",
    "category": "地图题",
    "scenario": "Listening",
    "example": "In IELTS Listening, the recording may say 'change' while the question uses 'adjust'.",
    "explanation": "adjust ≈ change / modify / shift / alter"
  },
  {
    "id": "ielts-004",
    "group": "雅思同义替换",
    "word": "approach",
    "synonyms": [
      "method",
      "way"
    ],
    "chinese": "n.方法",
    "category": "地图题",
    "scenario": "Listening",
    "example": "In IELTS Listening, the recording may say 'method' while the question uses 'approach'.",
    "explanation": "approach ≈ method / way"
  },
  {
    "id": "ielts-005",
    "group": "雅思同义替换",
    "word": "fundamental",
    "synonyms": [
      "rudimentary",
      "preliminary",
      "basic"
    ],
    "chinese": "adj.基本的;基础的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'fundamental' is often paraphrased as 'rudimentary' in the passage.",
    "explanation": "fundamental ≈ rudimentary / preliminary / basic"
  },
  {
    "id": "ielts-006",
    "group": "雅思同义替换",
    "word": "rely on",
    "synonyms": [
      "depend on"
    ],
    "chinese": "依靠;依赖",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'rely on' is often paraphrased as 'depend on' in the passage.",
    "explanation": "rely on ≈ depend on"
  },
  {
    "id": "ielts-007",
    "group": "雅思同义替换",
    "word": "domestic",
    "synonyms": [
      "home",
      "local",
      "national"
    ],
    "chinese": "adj.家庭的；国内的",
    "category": "环境",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'domestic' is often paraphrased as 'home' in the passage.",
    "explanation": "domestic ≈ home / local / national"
  },
  {
    "id": "ielts-008",
    "group": "雅思同义替换",
    "word": "measure",
    "synonyms": [
      "calculate",
      "assess",
      "evaluate"
    ],
    "chinese": "v.测量",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'measure' is often paraphrased as 'calculate' in the passage.",
    "explanation": "measure ≈ calculate / assess / evaluate"
  },
  {
    "id": "ielts-009",
    "group": "雅思同义替换",
    "word": "trait",
    "synonyms": [
      "characteristic",
      "feature",
      "property"
    ],
    "chinese": "n.特性;特征",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'trait' is often paraphrased as 'characteristic' in the passage.",
    "explanation": "trait ≈ characteristic / feature / property"
  },
  {
    "id": "ielts-010",
    "group": "雅思同义替换",
    "word": "coin",
    "synonyms": [
      "first used",
      "invent"
    ],
    "chinese": "v.创造",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'coin' is often paraphrased as 'first used' in the passage.",
    "explanation": "coin ≈ first used / invent"
  },
  {
    "id": "ielts-011",
    "group": "雅思同义替换",
    "word": "artificial",
    "synonyms": [
      "synthetic",
      "man-made"
    ],
    "chinese": "adj.仿造的",
    "category": "科技",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'artificial' is often paraphrased as 'synthetic' in the passage.",
    "explanation": "artificial ≈ synthetic / man-made"
  },
  {
    "id": "ielts-012",
    "group": "雅思同义替换",
    "word": "prompt",
    "synonyms": [
      "initiate",
      "immediately"
    ],
    "chinese": "v.促进;激起",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'prompt' is often paraphrased as 'initiate' in the passage.",
    "explanation": "prompt ≈ initiate / immediately"
  },
  {
    "id": "ielts-013",
    "group": "雅思同义替换",
    "word": "exchange",
    "synonyms": [
      "share",
      "apply A to B"
    ],
    "chinese": "v.交换",
    "category": "经济",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'exchange' can be replaced by 'share' to avoid repetition.",
    "explanation": "exchange ≈ share / apply A to B"
  },
  {
    "id": "ielts-014",
    "group": "雅思同义替换",
    "word": "underlie",
    "synonyms": [
      "based on",
      "ground",
      "root"
    ],
    "chinese": "v.成为.….基础",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'underlie' is often paraphrased as 'based on' in the passage.",
    "explanation": "underlie ≈ based on / ground / root"
  },
  {
    "id": "ielts-015",
    "group": "雅思同义替换",
    "word": "ignore",
    "synonyms": [
      "neglect",
      "overlook",
      "underestimate"
    ],
    "chinese": "v.忽视;不顾",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'ignore' can be replaced by 'neglect' to avoid repetition.",
    "explanation": "ignore ≈ neglect / overlook / underestimate"
  },
  {
    "id": "ielts-016",
    "group": "雅思同义替换",
    "word": "fertilizer",
    "synonyms": [
      "chemical",
      "toxic",
      "unnatural"
    ],
    "chinese": "n.化肥;肥料",
    "category": "环境",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'fertilizer' is often paraphrased as 'chemical' in the passage.",
    "explanation": "fertilizer ≈ chemical / toxic / unnatural"
  },
  {
    "id": "ielts-017",
    "group": "雅思同义替换",
    "word": "that",
    "synonyms": [
      "this",
      "it",
      "they",
      "those",
      "these",
      "such"
    ],
    "chinese": "pron.那；那个",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'that' is often paraphrased as 'this' in the passage.",
    "explanation": "that ≈ this / it / they / those"
  },
  {
    "id": "ielts-018",
    "group": "雅思同义替换",
    "word": "and",
    "synonyms": [
      "or",
      "as well as",
      "both…and",
      "not only…but also",
      "other than",
      "in addition",
      "besides",
      "on the one hand…on the other hand…",
      "neither…nor…"
    ],
    "chinese": "conj.和;而且",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'and' can be replaced by 'or' to avoid repetition.",
    "explanation": "and ≈ or / as well as / both…and / not only…but also"
  },
  {
    "id": "ielts-019",
    "group": "雅思同义替换",
    "word": "rather than",
    "synonyms": [
      "but",
      "yet",
      "however",
      "whereas",
      "nonetheless",
      "nevertheless",
      "notwithstanding",
      "although",
      "though",
      "instead"
    ],
    "chinese": "而非;不是",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'rather than' can be replaced by 'but' to avoid repetition.",
    "explanation": "rather than ≈ but / yet / however / whereas"
  },
  {
    "id": "ielts-020",
    "group": "雅思同义替换",
    "word": "thanks to",
    "synonyms": [
      "stem from",
      "derive",
      "owing to",
      "due to",
      "according to",
      "because of",
      "on account of",
      "as a result of",
      "leading to",
      "because",
      "since for",
      "in that",
      "as",
      "therefore",
      "hence"
    ],
    "chinese": "由于;幸亏",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'thanks to' can be replaced by 'stem from' to avoid repetition.",
    "explanation": "thanks to ≈ stem from / derive / owing to / due to"
  },
  {
    "id": "ielts-021",
    "group": "雅思同义替换",
    "word": "diversity",
    "synonyms": [
      "variety",
      "difference"
    ],
    "chinese": "n.多样性;差异",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'diversity' is often paraphrased as 'variety' in the passage.",
    "explanation": "diversity ≈ variety / difference"
  },
  {
    "id": "ielts-022",
    "group": "雅思同义替换",
    "word": "detect",
    "synonyms": [
      "look for",
      "find",
      "seek",
      "search"
    ],
    "chinese": "v.查明;发现",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'detect' can be replaced by 'look for' to avoid repetition.",
    "explanation": "detect ≈ look for / find / seek / search"
  },
  {
    "id": "ielts-023",
    "group": "雅思同义替换",
    "word": "isolate",
    "synonyms": [
      "inaccessible"
    ],
    "chinese": "v.使隔离;使孤立",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'isolate' is often paraphrased as 'inaccessible' in the passage.",
    "explanation": "isolate ≈ inaccessible"
  },
  {
    "id": "ielts-024",
    "group": "雅思同义替换",
    "word": "avoid",
    "synonyms": [
      "escape",
      "evitable"
    ],
    "chinese": "v.避免",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'avoid' is often paraphrased as 'escape' in the passage.",
    "explanation": "avoid ≈ escape / evitable"
  },
  {
    "id": "ielts-025",
    "group": "雅思同义替换",
    "word": "budget",
    "synonyms": [
      "fund",
      "financial"
    ],
    "chinese": "n.预算",
    "category": "经济",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'budget' can be replaced by 'fund' to avoid repetition.",
    "explanation": "budget ≈ fund / financial"
  },
  {
    "id": "ielts-026",
    "group": "雅思同义替换",
    "word": "adapt to",
    "synonyms": [
      "fit",
      "suit"
    ],
    "chinese": "使适应",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'adapt to' is often paraphrased as 'fit' in the passage.",
    "explanation": "adapt to ≈ fit / suit"
  },
  {
    "id": "ielts-027",
    "group": "雅思同义替换",
    "word": "alternative",
    "synonyms": [
      "subsitute"
    ],
    "chinese": "adj.办供替代的;供选择的 n.替代品",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'alternative' is often paraphrased as 'subsitute' in the passage.",
    "explanation": "alternative ≈ subsitute"
  },
  {
    "id": "ielts-028",
    "group": "雅思同义替换",
    "word": "compensate",
    "synonyms": [
      "make up",
      "off set"
    ],
    "chinese": "v.补偿;赔偿",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'compensate' is often paraphrased as 'make up' in the passage.",
    "explanation": "compensate ≈ make up / off set"
  },
  {
    "id": "ielts-029",
    "group": "雅思同义替换",
    "word": "component",
    "synonyms": [
      "proportion"
    ],
    "chinese": "n.成分;要素",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'component' can be replaced by 'proportion' to avoid repetition.",
    "explanation": "component ≈ proportion"
  },
  {
    "id": "ielts-030",
    "group": "雅思同义替换",
    "word": "military",
    "synonyms": [
      "weapon",
      "army"
    ],
    "chinese": "adj.军事的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'military' is often paraphrased as 'weapon' in the passage.",
    "explanation": "military ≈ weapon / army"
  },
  {
    "id": "ielts-031",
    "group": "雅思同义替换",
    "word": "criteria",
    "synonyms": [
      "standard"
    ],
    "chinese": "n.标准",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'criteria' can be replaced by 'standard' to avoid repetition.",
    "explanation": "criteria ≈ standard"
  },
  {
    "id": "ielts-032",
    "group": "雅思同义替换",
    "word": "curriculum",
    "synonyms": [
      "syllabus",
      "course of study"
    ],
    "chinese": "n.课程",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'curriculum' is often paraphrased as 'syllabus' in the passage.",
    "explanation": "curriculum ≈ syllabus / course of study"
  },
  {
    "id": "ielts-033",
    "group": "雅思同义替换",
    "word": "feasible",
    "synonyms": [
      "viable",
      "realistic"
    ],
    "chinese": "adj.办可行的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'feasible' is often paraphrased as 'viable' in the passage.",
    "explanation": "feasible ≈ viable / realistic"
  },
  {
    "id": "ielts-034",
    "group": "雅思同义替换",
    "word": "constrain",
    "synonyms": [
      "stop",
      "control"
    ],
    "chinese": "v.束缚;限制",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'constrain' is often paraphrased as 'stop' in the passage.",
    "explanation": "constrain ≈ stop / control"
  },
  {
    "id": "ielts-035",
    "group": "雅思同义替换",
    "word": "deficiency",
    "synonyms": [
      "shortage",
      "defect",
      "weakness"
    ],
    "chinese": "n.缺陷;缺点",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'deficiency' can be replaced by 'shortage' to avoid repetition.",
    "explanation": "deficiency ≈ shortage / defect / weakness"
  },
  {
    "id": "ielts-036",
    "group": "雅思同义替换",
    "word": "supplement",
    "synonyms": [
      "provision"
    ],
    "chinese": "v.补充",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'supplement' is often paraphrased as 'provision' in the passage.",
    "explanation": "supplement ≈ provision"
  },
  {
    "id": "ielts-037",
    "group": "雅思同义替换",
    "word": "distinguish",
    "synonyms": [
      "separete",
      "differentiate"
    ],
    "chinese": "v.区别;辨别",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'distinguish' is often paraphrased as 'separete' in the passage.",
    "explanation": "distinguish ≈ separete / differentiate"
  },
  {
    "id": "ielts-038",
    "group": "雅思同义替换",
    "word": "analyze",
    "synonyms": [
      "examine",
      "diagnose"
    ],
    "chinese": "v.分析;解释",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'analyze' is often paraphrased as 'examine' in the passage.",
    "explanation": "analyze ≈ examine / diagnose"
  },
  {
    "id": "ielts-039",
    "group": "雅思同义替换",
    "word": "empharsize",
    "synonyms": [
      "focus on",
      "stress"
    ],
    "chinese": "v.强调;着重",
    "category": "健康",
    "scenario": "Listening",
    "example": "In IELTS Listening, the recording may say 'focus on' while the question uses 'empharsize'.",
    "explanation": "empharsize ≈ focus on / stress"
  },
  {
    "id": "ielts-040",
    "group": "雅思同义替换",
    "word": "enormous",
    "synonyms": [
      "massive",
      "large"
    ],
    "chinese": "adj.庞大的;巨大的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'enormous' can be replaced by 'massive' to avoid repetition.",
    "explanation": "enormous ≈ massive / large"
  },
  {
    "id": "ielts-041",
    "group": "雅思同义替换",
    "word": "imitate",
    "synonyms": [
      "mimic",
      "copy"
    ],
    "chinese": "v.模仿",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'imitate' is often paraphrased as 'mimic' in the passage.",
    "explanation": "imitate ≈ mimic / copy"
  },
  {
    "id": "ielts-042",
    "group": "雅思同义替换",
    "word": "impair",
    "synonyms": [
      "damage",
      "diminish",
      "decrease"
    ],
    "chinese": "v.削弱;减少",
    "category": "趋势描述",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'impair' can be replaced by 'damage' to avoid repetition.",
    "explanation": "impair ≈ damage / diminish / decrease"
  },
  {
    "id": "ielts-043",
    "group": "雅思同义替换",
    "word": "hinder",
    "synonyms": [
      "impede",
      "prevent",
      "deter",
      "obstacle"
    ],
    "chinese": "v.阻碍",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'hinder' is often paraphrased as 'impede' in the passage.",
    "explanation": "hinder ≈ impede / prevent / deter / obstacle"
  },
  {
    "id": "ielts-044",
    "group": "雅思同义替换",
    "word": "legitimate",
    "synonyms": [
      "legal"
    ],
    "chinese": "adj.办合法的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'legitimate' is often paraphrased as 'legal' in the passage.",
    "explanation": "legitimate ≈ legal"
  },
  {
    "id": "ielts-045",
    "group": "雅思同义替换",
    "word": "limitation",
    "synonyms": [
      "restriction"
    ],
    "chinese": "n.限制",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'limitation' is often paraphrased as 'restriction' in the passage.",
    "explanation": "limitation ≈ restriction"
  },
  {
    "id": "ielts-046",
    "group": "雅思同义替换",
    "word": "convention",
    "synonyms": [
      "method",
      "traditon"
    ],
    "chinese": "n.手法；习俗",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'convention' is often paraphrased as 'method' in the passage.",
    "explanation": "convention ≈ method / traditon"
  },
  {
    "id": "ielts-047",
    "group": "雅思同义替换",
    "word": "demanding",
    "synonyms": [
      "troublesome"
    ],
    "chinese": "adj.办苛求的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'demanding' can be replaced by 'troublesome' to avoid repetition.",
    "explanation": "demanding ≈ troublesome"
  },
  {
    "id": "ielts-048",
    "group": "雅思同义替换",
    "word": "determine",
    "synonyms": [
      "decide"
    ],
    "chinese": "v.决定",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'determine' is often paraphrased as 'decide' in the passage.",
    "explanation": "determine ≈ decide"
  },
  {
    "id": "ielts-049",
    "group": "雅思同义替换",
    "word": "accelerate",
    "synonyms": [
      "speed up"
    ],
    "chinese": "v.加速;促进；强调",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'accelerate' is often paraphrased as 'speed up' in the passage.",
    "explanation": "accelerate ≈ speed up"
  },
  {
    "id": "ielts-050",
    "group": "雅思同义替换",
    "word": "ancient",
    "synonyms": [
      "aged",
      "old"
    ],
    "chinese": "adj.办古代的；古老的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'ancient' is often paraphrased as 'aged' in the passage.",
    "explanation": "ancient ≈ aged / old"
  },
  {
    "id": "ielts-051",
    "group": "雅思同义替换",
    "word": "beneficial",
    "synonyms": [
      "helpful",
      "advantageous",
      "wholesome"
    ],
    "chinese": "adj.有益的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'beneficial' is often paraphrased as 'helpful' in the passage.",
    "explanation": "beneficial ≈ helpful / advantageous / wholesome"
  },
  {
    "id": "ielts-052",
    "group": "雅思同义替换",
    "word": "chronic",
    "synonyms": [
      "lasting"
    ],
    "chinese": "adj.慢性的;长期性的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'chronic' is often paraphrased as 'lasting' in the passage.",
    "explanation": "chronic ≈ lasting"
  },
  {
    "id": "ielts-053",
    "group": "雅思同义替换",
    "word": "conscious",
    "synonyms": [
      "aware",
      "knowing"
    ],
    "chinese": "v.最小化;使……减到最小",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'conscious' is often paraphrased as 'aware' in the passage.",
    "explanation": "conscious ≈ aware / knowing"
  },
  {
    "id": "ielts-054",
    "group": "雅思同义替换",
    "word": "minimize",
    "synonyms": [
      "reduce",
      "lessen"
    ],
    "chinese": "adj.办有意识的;神志清醒的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'minimize' is often paraphrased as 'reduce' in the passage.",
    "explanation": "minimize ≈ reduce / lessen"
  },
  {
    "id": "ielts-055",
    "group": "雅思同义替换",
    "word": "immunity",
    "synonyms": [
      "resistance"
    ],
    "chinese": "n.免疫力",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'immunity' is often paraphrased as 'resistance' in the passage.",
    "explanation": "immunity ≈ resistance"
  },
  {
    "id": "ielts-056",
    "group": "雅思同义替换",
    "word": "imperactive",
    "synonyms": [
      "compelling",
      "necessary",
      "urgent"
    ],
    "chinese": "adj.办必要的;紧急的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'imperactive' is often paraphrased as 'compelling' in the passage.",
    "explanation": "imperactive ≈ compelling / necessary / urgent"
  },
  {
    "id": "ielts-057",
    "group": "雅思同义替换",
    "word": "secrete",
    "synonyms": [
      "discharge",
      "exude"
    ],
    "chinese": "v.分泌",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'secrete' is often paraphrased as 'discharge' in the passage.",
    "explanation": "secrete ≈ discharge / exude"
  },
  {
    "id": "ielts-058",
    "group": "雅思同义替换",
    "word": "exaggerate",
    "synonyms": [
      "overstate"
    ],
    "chinese": "v.夸大;夸张",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'exaggerate' is often paraphrased as 'overstate' in the passage.",
    "explanation": "exaggerate ≈ overstate"
  },
  {
    "id": "ielts-059",
    "group": "雅思同义替换",
    "word": "transmit",
    "synonyms": [
      "pass",
      "send",
      "transfer"
    ],
    "chinese": "v.传达;传输",
    "category": "地图题",
    "scenario": "Listening",
    "example": "In IELTS Listening, the recording may say 'pass' while the question uses 'transmit'.",
    "explanation": "transmit ≈ pass / send / transfer"
  },
  {
    "id": "ielts-060",
    "group": "雅思同义替换",
    "word": "extinct",
    "synonyms": [
      "die out",
      "lost"
    ],
    "chinese": "v.灭绝",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'extinct' is often paraphrased as 'die out' in the passage.",
    "explanation": "extinct ≈ die out / lost"
  },
  {
    "id": "ielts-061",
    "group": "雅思同义替换",
    "word": "exclusive",
    "synonyms": [
      "only"
    ],
    "chinese": "adj.独有的；排外的；专一的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'exclusive' is often paraphrased as 'only' in the passage.",
    "explanation": "exclusive ≈ only"
  },
  {
    "id": "ielts-062",
    "group": "雅思同义替换",
    "word": "guarantee",
    "synonyms": [
      "assure"
    ],
    "chinese": "v.保证;担保",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'guarantee' is often paraphrased as 'assure' in the passage.",
    "explanation": "guarantee ≈ assure"
  },
  {
    "id": "ielts-063",
    "group": "雅思同义替换",
    "word": "inherit",
    "synonyms": [
      "receive"
    ],
    "chinese": "v.继承",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'inherit' is often paraphrased as 'receive' in the passage.",
    "explanation": "inherit ≈ receive"
  },
  {
    "id": "ielts-064",
    "group": "雅思同义替换",
    "word": "witness",
    "synonyms": [
      "view",
      "see"
    ],
    "chinese": "n.见证;证据；目击者",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'witness' is often paraphrased as 'view' in the passage.",
    "explanation": "witness ≈ view / see"
  },
  {
    "id": "ielts-065",
    "group": "雅思同义替换",
    "word": "magnetic",
    "synonyms": [
      "attractive"
    ],
    "chinese": "a#有磁性的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'magnetic' is often paraphrased as 'attractive' in the passage.",
    "explanation": "magnetic ≈ attractive"
  },
  {
    "id": "ielts-066",
    "group": "雅思同义替换",
    "word": "loss",
    "synonyms": [
      "waste",
      "gone"
    ],
    "chinese": "n.减少亏损失败遗失",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'loss' is often paraphrased as 'waste' in the passage.",
    "explanation": "loss ≈ waste / gone"
  },
  {
    "id": "ielts-067",
    "group": "雅思同义替换",
    "word": "option",
    "synonyms": [
      "choice"
    ],
    "chinese": "n.选择",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'option' is often paraphrased as 'choice' in the passage.",
    "explanation": "option ≈ choice"
  },
  {
    "id": "ielts-068",
    "group": "雅思同义替换",
    "word": "prefer to",
    "synonyms": [
      "rather"
    ],
    "chinese": "更喜欢",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'prefer to' can be replaced by 'rather' to avoid repetition.",
    "explanation": "prefer to ≈ rather"
  },
  {
    "id": "ielts-069",
    "group": "雅思同义替换",
    "word": "priority",
    "synonyms": [
      "preference",
      "preferential"
    ],
    "chinese": "n.优先权",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'priority' can be replaced by 'preference' to avoid repetition.",
    "explanation": "priority ≈ preference / preferential"
  },
  {
    "id": "ielts-070",
    "group": "雅思同义替换",
    "word": "primary",
    "synonyms": [
      "principal",
      "main"
    ],
    "chinese": "adj.办主要的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'primary' is often paraphrased as 'principal' in the passage.",
    "explanation": "primary ≈ principal / main"
  },
  {
    "id": "ielts-071",
    "group": "雅思同义替换",
    "word": "principle",
    "synonyms": [
      "rule"
    ],
    "chinese": "n.原理",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'principle' is often paraphrased as 'rule' in the passage.",
    "explanation": "principle ≈ rule"
  },
  {
    "id": "ielts-072",
    "group": "雅思同义替换",
    "word": "potential",
    "synonyms": [
      "possibility"
    ],
    "chinese": "n.潜能adj.潜在的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'potential' is often paraphrased as 'possibility' in the passage.",
    "explanation": "potential ≈ possibility"
  },
  {
    "id": "ielts-073",
    "group": "雅思同义替换",
    "word": "quantity",
    "synonyms": [
      "number"
    ],
    "chinese": "n.量;数量",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'quantity' is often paraphrased as 'number' in the passage.",
    "explanation": "quantity ≈ number"
  },
  {
    "id": "ielts-074",
    "group": "雅思同义替换",
    "word": "settle",
    "synonyms": [
      "fix",
      "figure out"
    ],
    "chinese": "v.解决；定居;稳定",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'settle' is often paraphrased as 'fix' in the passage.",
    "explanation": "settle ≈ fix / figure out"
  },
  {
    "id": "ielts-075",
    "group": "雅思同义替换",
    "word": "sophistiate",
    "synonyms": [
      "complicate"
    ],
    "chinese": "v.使复杂",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'sophistiate' is often paraphrased as 'complicate' in the passage.",
    "explanation": "sophistiate ≈ complicate"
  },
  {
    "id": "ielts-076",
    "group": "雅思同义替换",
    "word": "specific",
    "synonyms": [
      "detailed",
      "particular"
    ],
    "chinese": "adj.办明确的；特殊的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'specific' is often paraphrased as 'detailed' in the passage.",
    "explanation": "specific ≈ detailed / particular"
  },
  {
    "id": "ielts-077",
    "group": "雅思同义替换",
    "word": "survive",
    "synonyms": [
      "remain"
    ],
    "chinese": "v.存活;幸存",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'survive' is often paraphrased as 'remain' in the passage.",
    "explanation": "survive ≈ remain"
  },
  {
    "id": "ielts-078",
    "group": "雅思同义替换",
    "word": "swift",
    "synonyms": [
      "quick",
      "rapid"
    ],
    "chinese": "adj.办迅速的;敏捷的;立刻的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'swift' is often paraphrased as 'quick' in the passage.",
    "explanation": "swift ≈ quick / rapid"
  },
  {
    "id": "ielts-079",
    "group": "雅思同义替换",
    "word": "unexpectedly",
    "synonyms": [
      "surprising"
    ],
    "chinese": "adv.出乎意料地",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'unexpectedly' is often paraphrased as 'surprising' in the passage.",
    "explanation": "unexpectedly ≈ surprising"
  },
  {
    "id": "ielts-080",
    "group": "雅思同义替换",
    "word": "surrounding",
    "synonyms": [
      "setting",
      "environment"
    ],
    "chinese": "n.环境",
    "category": "环境",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'surrounding' is often paraphrased as 'setting' in the passage.",
    "explanation": "surrounding ≈ setting / environment"
  },
  {
    "id": "ielts-081",
    "group": "雅思同义替换",
    "word": "attempt",
    "synonyms": [
      "try",
      "test"
    ],
    "chinese": "v.试图;尝试",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'attempt' is often paraphrased as 'try' in the passage.",
    "explanation": "attempt ≈ try / test"
  },
  {
    "id": "ielts-082",
    "group": "雅思同义替换",
    "word": "expertise",
    "synonyms": [
      "knowledge",
      "skill"
    ],
    "chinese": "v.专门技术",
    "category": "教育",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'expertise' is often paraphrased as 'knowledge' in the passage.",
    "explanation": "expertise ≈ knowledge / skill"
  },
  {
    "id": "ielts-083",
    "group": "雅思同义替换",
    "word": "faculty",
    "synonyms": [
      "ability"
    ],
    "chinese": "n.能力;才能；全体教员",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'faculty' is often paraphrased as 'ability' in the passage.",
    "explanation": "faculty ≈ ability"
  },
  {
    "id": "ielts-084",
    "group": "雅思同义替换",
    "word": "donate",
    "synonyms": [
      "contribute"
    ],
    "chinese": "v.捐赠",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'donate' is often paraphrased as 'contribute' in the passage.",
    "explanation": "donate ≈ contribute"
  },
  {
    "id": "ielts-085",
    "group": "雅思同义替换",
    "word": "dynamics",
    "synonyms": [
      "energy",
      "force",
      "move"
    ],
    "chinese": "n.动力学",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'dynamics' can be replaced by 'energy' to avoid repetition.",
    "explanation": "dynamics ≈ energy / force / move"
  },
  {
    "id": "ielts-086",
    "group": "雅思同义替换",
    "word": "incentive",
    "synonyms": [
      "motive",
      "stimulus"
    ],
    "chinese": "n.刺激;鼓励；动机",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'incentive' is often paraphrased as 'motive' in the passage.",
    "explanation": "incentive ≈ motive / stimulus"
  },
  {
    "id": "ielts-087",
    "group": "雅思同义替换",
    "word": "mortality",
    "synonyms": [
      "death"
    ],
    "chinese": "n.死亡率",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'mortality' can be replaced by 'death' to avoid repetition.",
    "explanation": "mortality ≈ death"
  },
  {
    "id": "ielts-088",
    "group": "雅思同义替换",
    "word": "peripheral",
    "synonyms": [
      "unimportant",
      "minor"
    ],
    "chinese": "adj.喊外围的;次要的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'peripheral' can be replaced by 'unimportant' to avoid repetition.",
    "explanation": "peripheral ≈ unimportant / minor"
  },
  {
    "id": "ielts-089",
    "group": "雅思同义替换",
    "word": "vicinity",
    "synonyms": [
      "neighbourhood",
      "nearby"
    ],
    "chinese": "n.邻近;附近",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'vicinity' is often paraphrased as 'neighbourhood' in the passage.",
    "explanation": "vicinity ≈ neighbourhood / nearby"
  },
  {
    "id": "ielts-090",
    "group": "雅思同义替换",
    "word": "threaten",
    "synonyms": [
      "endanger",
      "jeopardize",
      "risk",
      "hazard"
    ],
    "chinese": "v.威胁;危及",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'threaten' is often paraphrased as 'endanger' in the passage.",
    "explanation": "threaten ≈ endanger / jeopardize / risk / hazard"
  },
  {
    "id": "ielts-091",
    "group": "雅思同义替换",
    "word": "practice",
    "synonyms": [
      "method",
      "exercise"
    ],
    "chinese": "n.实行；练习",
    "category": "健康",
    "scenario": "Listening",
    "example": "In IELTS Listening, the recording may say 'method' while the question uses 'practice'.",
    "explanation": "practice ≈ method / exercise"
  },
  {
    "id": "ielts-092",
    "group": "雅思同义替换",
    "word": "bacteria",
    "synonyms": [
      "virus",
      "germ",
      "microbe"
    ],
    "chinese": "n.细菌",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'bacteria' is often paraphrased as 'virus' in the passage.",
    "explanation": "bacteria ≈ virus / germ / microbe"
  },
  {
    "id": "ielts-093",
    "group": "雅思同义替换",
    "word": "be subject to",
    "synonyms": [
      "face"
    ],
    "chinese": "受……支配",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'be subject to' is often paraphrased as 'face' in the passage.",
    "explanation": "be subject to ≈ face"
  },
  {
    "id": "ielts-094",
    "group": "雅思同义替换",
    "word": "be liable to",
    "synonyms": [
      "portential"
    ],
    "chinese": "易于……",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'be liable to' can be replaced by 'portential' to avoid repetition.",
    "explanation": "be liable to ≈ portential"
  },
  {
    "id": "ielts-095",
    "group": "雅思同义替换",
    "word": "innate",
    "synonyms": [
      "built-in",
      "inborn"
    ],
    "chinese": "adj.办天生的；内在的;直觉的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'innate' can be replaced by 'built-in' to avoid repetition.",
    "explanation": "innate ≈ built-in / inborn"
  },
  {
    "id": "ielts-096",
    "group": "雅思同义替换",
    "word": "pattern",
    "synonyms": [
      "formation"
    ],
    "chinese": "n.模式",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'pattern' can be replaced by 'formation' to avoid repetition.",
    "explanation": "pattern ≈ formation"
  },
  {
    "id": "ielts-097",
    "group": "雅思同义替换",
    "word": "therapy",
    "synonyms": [
      "treatment"
    ],
    "chinese": "n.治疗;理疗",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'therapy' is often paraphrased as 'treatment' in the passage.",
    "explanation": "therapy ≈ treatment"
  },
  {
    "id": "ielts-098",
    "group": "雅思同义替换",
    "word": "original",
    "synonyms": [
      "initial",
      "first"
    ],
    "chinese": "dj.办原始的;最初的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'original' can be replaced by 'initial' to avoid repetition.",
    "explanation": "original ≈ initial / first"
  },
  {
    "id": "ielts-099",
    "group": "雅思同义替换",
    "word": "confidential",
    "synonyms": [
      "undiscovered",
      "secret",
      "hidden"
    ],
    "chinese": "adj.办机密的;秘密的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'confidential' is often paraphrased as 'undiscovered' in the passage.",
    "explanation": "confidential ≈ undiscovered / secret / hidden"
  },
  {
    "id": "ielts-100",
    "group": "雅思同义替换",
    "word": "cognitive",
    "synonyms": [
      "mental"
    ],
    "chinese": "adj.办认知的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'cognitive' is often paraphrased as 'mental' in the passage.",
    "explanation": "cognitive ≈ mental"
  },
  {
    "id": "ielts-101",
    "group": "雅思同义替换",
    "word": "comply with",
    "synonyms": [
      "obey"
    ],
    "chinese": "照做;遵守",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'comply with' is often paraphrased as 'obey' in the passage.",
    "explanation": "comply with ≈ obey"
  },
  {
    "id": "ielts-102",
    "group": "雅思同义替换",
    "word": "consult",
    "synonyms": [
      "ask for advice"
    ],
    "chinese": "v.查阅;商量;请教;咨询",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'consult' can be replaced by 'ask for advice' to avoid repetition.",
    "explanation": "consult ≈ ask for advice"
  },
  {
    "id": "ielts-103",
    "group": "雅思同义替换",
    "word": "superior",
    "synonyms": [
      "higher",
      "upper"
    ],
    "chinese": "adj.办上级的；优秀的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'superior' can be replaced by 'higher' to avoid repetition.",
    "explanation": "superior ≈ higher / upper"
  },
  {
    "id": "ielts-104",
    "group": "雅思同义替换",
    "word": "co-operation",
    "synonyms": [
      "support",
      "work together"
    ],
    "chinese": "n.合作;协作",
    "category": "工作",
    "scenario": "Speaking",
    "example": "In IELTS Speaking, you can use 'support' as a natural alternative to 'co-operation'.",
    "explanation": "co-operation ≈ support / work together"
  },
  {
    "id": "ielts-105",
    "group": "雅思同义替换",
    "word": "co-ordinate",
    "synonyms": [
      "organize",
      "harmonize"
    ],
    "chinese": "v.使…….协调",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'co-ordinate' can be replaced by 'organize' to avoid repetition.",
    "explanation": "co-ordinate ≈ organize / harmonize"
  },
  {
    "id": "ielts-106",
    "group": "雅思同义替换",
    "word": "differ",
    "synonyms": [
      "vary"
    ],
    "chinese": "v.使……相异；使….不同",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'differ' is often paraphrased as 'vary' in the passage.",
    "explanation": "differ ≈ vary"
  },
  {
    "id": "ielts-107",
    "group": "雅思同义替换",
    "word": "cue",
    "synonyms": [
      "hint",
      "clue"
    ],
    "chinese": "n.线索",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'cue' is often paraphrased as 'hint' in the passage.",
    "explanation": "cue ≈ hint / clue"
  },
  {
    "id": "ielts-108",
    "group": "雅思同义替换",
    "word": "signal",
    "synonyms": [
      "symbol",
      "mark",
      "sign"
    ],
    "chinese": "n.信号",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'signal' is often paraphrased as 'symbol' in the passage.",
    "explanation": "signal ≈ symbol / mark / sign"
  },
  {
    "id": "ielts-109",
    "group": "雅思同义替换",
    "word": "abandon",
    "synonyms": [
      "quit",
      "give up",
      "forsake",
      "derelict"
    ],
    "chinese": "v.放弃;遗弃",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'abandon' can be replaced by 'quit' to avoid repetition.",
    "explanation": "abandon ≈ quit / give up / forsake / derelict"
  },
  {
    "id": "ielts-110",
    "group": "雅思同义替换",
    "word": "halt",
    "synonyms": [
      "stop",
      "quit"
    ],
    "chinese": "n.停止",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'halt' is often paraphrased as 'stop' in the passage.",
    "explanation": "halt ≈ stop / quit"
  },
  {
    "id": "ielts-111",
    "group": "雅思同义替换",
    "word": "fragile",
    "synonyms": [
      "vulnerable"
    ],
    "chinese": "adj.办脆弱的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'fragile' is often paraphrased as 'vulnerable' in the passage.",
    "explanation": "fragile ≈ vulnerable"
  },
  {
    "id": "ielts-112",
    "group": "雅思同义替换",
    "word": "retain",
    "synonyms": [
      "maintain"
    ],
    "chinese": "v.记住",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'retain' is often paraphrased as 'maintain' in the passage.",
    "explanation": "retain ≈ maintain"
  },
  {
    "id": "ielts-113",
    "group": "雅思同义替换",
    "word": "vanish",
    "synonyms": [
      "disappear"
    ],
    "chinese": "v.消失;绝迹",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'vanish' is often paraphrased as 'disappear' in the passage.",
    "explanation": "vanish ≈ disappear"
  },
  {
    "id": "ielts-114",
    "group": "雅思同义替换",
    "word": "delivery",
    "synonyms": [
      "send"
    ],
    "chinese": "n.递送",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'delivery' is often paraphrased as 'send' in the passage.",
    "explanation": "delivery ≈ send"
  },
  {
    "id": "ielts-115",
    "group": "雅思同义替换",
    "word": "erode",
    "synonyms": [
      "rust",
      "damage"
    ],
    "chinese": "v.侵蚀",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'erode' is often paraphrased as 'rust' in the passage.",
    "explanation": "erode ≈ rust / damage"
  },
  {
    "id": "ielts-116",
    "group": "雅思同义替换",
    "word": "induce",
    "synonyms": [
      "cause",
      "lead to"
    ],
    "chinese": "v.引起;引诱",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'induce' is often paraphrased as 'cause' in the passage.",
    "explanation": "induce ≈ cause / lead to"
  },
  {
    "id": "ielts-117",
    "group": "雅思同义替换",
    "word": "stable",
    "synonyms": [
      "constant",
      "unchanged"
    ],
    "chinese": "adj.稳定的",
    "category": "趋势描述",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'stable' can be replaced by 'constant' to avoid repetition.",
    "explanation": "stable ≈ constant / unchanged"
  },
  {
    "id": "ielts-118",
    "group": "雅思同义替换",
    "word": "integrate",
    "synonyms": [
      "combine",
      "whole"
    ],
    "chinese": "v.使……成整体",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'integrate' is often paraphrased as 'combine' in the passage.",
    "explanation": "integrate ≈ combine / whole"
  },
  {
    "id": "ielts-119",
    "group": "雅思同义替换",
    "word": "equal",
    "synonyms": [
      "fair",
      "even"
    ],
    "chinese": "adj.平等的；相等的；胜任的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'equal' is often paraphrased as 'fair' in the passage.",
    "explanation": "equal ≈ fair / even"
  },
  {
    "id": "ielts-120",
    "group": "雅思同义替换",
    "word": "grant",
    "synonyms": [
      "offer"
    ],
    "chinese": "v.拨款；授予",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'grant' is often paraphrased as 'offer' in the passage.",
    "explanation": "grant ≈ offer"
  },
  {
    "id": "ielts-121",
    "group": "雅思同义替换",
    "word": "accumulate",
    "synonyms": [
      "gather"
    ],
    "chinese": "v.累积;积聚",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'accumulate' is often paraphrased as 'gather' in the passage.",
    "explanation": "accumulate ≈ gather"
  },
  {
    "id": "ielts-122",
    "group": "雅思同义替换",
    "word": "addictive",
    "synonyms": [
      "habit"
    ],
    "chinese": "adj.上瘾的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'addictive' is often paraphrased as 'habit' in the passage.",
    "explanation": "addictive ≈ habit"
  },
  {
    "id": "ielts-123",
    "group": "雅思同义替换",
    "word": "adversity",
    "synonyms": [
      "trouble"
    ],
    "chinese": "n.逆境;不幸",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'adversity' is often paraphrased as 'trouble' in the passage.",
    "explanation": "adversity ≈ trouble"
  },
  {
    "id": "ielts-124",
    "group": "雅思同义替换",
    "word": "aggression",
    "synonyms": [
      "attack"
    ],
    "chinese": "v.侵犯;侵害",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'aggression' is often paraphrased as 'attack' in the passage.",
    "explanation": "aggression ≈ attack"
  },
  {
    "id": "ielts-125",
    "group": "雅思同义替换",
    "word": "agreeable",
    "synonyms": [
      "pleasant"
    ],
    "chinese": "adj.办令人愉快的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'agreeable' is often paraphrased as 'pleasant' in the passage.",
    "explanation": "agreeable ≈ pleasant"
  },
  {
    "id": "ielts-126",
    "group": "雅思同义替换",
    "word": "aid",
    "synonyms": [
      "help"
    ],
    "chinese": "n.援助;帮助",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'aid' is often paraphrased as 'help' in the passage.",
    "explanation": "aid ≈ help"
  },
  {
    "id": "ielts-127",
    "group": "雅思同义替换",
    "word": "allergic",
    "synonyms": [
      "irritate"
    ],
    "chinese": "adj.过敏的；对……极讨厌的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'allergic' is often paraphrased as 'irritate' in the passage.",
    "explanation": "allergic ≈ irritate"
  },
  {
    "id": "ielts-128",
    "group": "雅思同义替换",
    "word": "altitude",
    "synonyms": [
      "height"
    ],
    "chinese": "n.高度；海拔",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'altitude' is often paraphrased as 'height' in the passage.",
    "explanation": "altitude ≈ height"
  },
  {
    "id": "ielts-129",
    "group": "雅思同义替换",
    "word": "application",
    "synonyms": [
      "utilization"
    ],
    "chinese": "n.应用",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'application' is often paraphrased as 'utilization' in the passage.",
    "explanation": "application ≈ utilization"
  },
  {
    "id": "ielts-130",
    "group": "雅思同义替换",
    "word": "approve",
    "synonyms": [
      "agree"
    ],
    "chinese": "v.批准",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'approve' is often paraphrased as 'agree' in the passage.",
    "explanation": "approve ≈ agree"
  },
  {
    "id": "ielts-131",
    "group": "雅思同义替换",
    "word": "array",
    "synonyms": [
      "order"
    ],
    "chinese": "n.排列；大批",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'array' can be replaced by 'order' to avoid repetition.",
    "explanation": "array ≈ order"
  },
  {
    "id": "ielts-132",
    "group": "雅思同义替换",
    "word": "assign",
    "synonyms": [
      "allocate"
    ],
    "chinese": "v.分配；指派",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'assign' is often paraphrased as 'allocate' in the passage.",
    "explanation": "assign ≈ allocate"
  },
  {
    "id": "ielts-133",
    "group": "雅思同义替换",
    "word": "association",
    "synonyms": [
      "union"
    ],
    "chinese": "n.协会;联盟；联系",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'association' is often paraphrased as 'union' in the passage.",
    "explanation": "association ≈ union"
  },
  {
    "id": "ielts-134",
    "group": "雅思同义替换",
    "word": "attitude",
    "synonyms": [
      "opinion"
    ],
    "chinese": "n.看法;态度",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'attitude' is often paraphrased as 'opinion' in the passage.",
    "explanation": "attitude ≈ opinion"
  },
  {
    "id": "ielts-135",
    "group": "雅思同义替换",
    "word": "authority",
    "synonyms": [
      "government"
    ],
    "chinese": "n.当局;权威",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'authority' can be replaced by 'government' to avoid repetition.",
    "explanation": "authority ≈ government"
  },
  {
    "id": "ielts-136",
    "group": "雅思同义替换",
    "word": "be consistent with",
    "synonyms": [
      "compatible"
    ],
    "chinese": "与…….致",
    "category": "趋势描述",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'be consistent with' can be replaced by 'compatible' to avoid repetition.",
    "explanation": "be consistent with ≈ compatible"
  },
  {
    "id": "ielts-137",
    "group": "雅思同义替换",
    "word": "bear",
    "synonyms": [
      "tolerate"
    ],
    "chinese": "v.承担；忍受",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'bear' is often paraphrased as 'tolerate' in the passage.",
    "explanation": "bear ≈ tolerate"
  },
  {
    "id": "ielts-138",
    "group": "雅思同义替换",
    "word": "blight",
    "synonyms": [
      "destroy"
    ],
    "chinese": "v.损害；枯萎",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'blight' is often paraphrased as 'destroy' in the passage.",
    "explanation": "blight ≈ destroy"
  },
  {
    "id": "ielts-139",
    "group": "雅思同义替换",
    "word": "boundary",
    "synonyms": [
      "barrier"
    ],
    "chinese": "n.边界；底线",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'boundary' is often paraphrased as 'barrier' in the passage.",
    "explanation": "boundary ≈ barrier"
  },
  {
    "id": "ielts-140",
    "group": "雅思同义替换",
    "word": "bungle",
    "synonyms": [
      "mishandle"
    ],
    "chinese": "v.搞糟;拙劣地工作",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'bungle' can be replaced by 'mishandle' to avoid repetition.",
    "explanation": "bungle ≈ mishandle"
  },
  {
    "id": "ielts-141",
    "group": "雅思同义替换",
    "word": "burden",
    "synonyms": [
      "load"
    ],
    "chinese": "n.负担",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'burden' is often paraphrased as 'load' in the passage.",
    "explanation": "burden ≈ load"
  },
  {
    "id": "ielts-142",
    "group": "雅思同义替换",
    "word": "calamity",
    "synonyms": [
      "disaster"
    ],
    "chinese": "n.灾难",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'calamity' is often paraphrased as 'disaster' in the passage.",
    "explanation": "calamity ≈ disaster"
  },
  {
    "id": "ielts-143",
    "group": "雅思同义替换",
    "word": "capacity",
    "synonyms": [
      "volume"
    ],
    "chinese": "n.容量",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'capacity' is often paraphrased as 'volume' in the passage.",
    "explanation": "capacity ≈ volume"
  },
  {
    "id": "ielts-144",
    "group": "雅思同义替换",
    "word": "catastrophic",
    "synonyms": [
      "disastrous"
    ],
    "chinese": "adj.办灾难的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'catastrophic' is often paraphrased as 'disastrous' in the passage.",
    "explanation": "catastrophic ≈ disastrous"
  },
  {
    "id": "ielts-145",
    "group": "雅思同义替换",
    "word": "cater",
    "synonyms": [
      "serve"
    ],
    "chinese": "v.迎合；满足需要",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'cater' is often paraphrased as 'serve' in the passage.",
    "explanation": "cater ≈ serve"
  },
  {
    "id": "ielts-146",
    "group": "雅思同义替换",
    "word": "certify",
    "synonyms": [
      "verify"
    ],
    "chinese": "v.证明;保证",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'certify' is often paraphrased as 'verify' in the passage.",
    "explanation": "certify ≈ verify"
  },
  {
    "id": "ielts-147",
    "group": "雅思同义替换",
    "word": "civic",
    "synonyms": [
      "municipal"
    ],
    "chinese": "adj.市民的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'civic' is often paraphrased as 'municipal' in the passage.",
    "explanation": "civic ≈ municipal"
  },
  {
    "id": "ielts-148",
    "group": "雅思同义替换",
    "word": "comment",
    "synonyms": [
      "remark"
    ],
    "chinese": "n.评论；意见",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'comment' is often paraphrased as 'remark' in the passage.",
    "explanation": "comment ≈ remark"
  },
  {
    "id": "ielts-149",
    "group": "雅思同义替换",
    "word": "commiment",
    "synonyms": [
      "engagement"
    ],
    "chinese": "v.评论",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'commiment' is often paraphrased as 'engagement' in the passage.",
    "explanation": "commiment ≈ engagement"
  },
  {
    "id": "ielts-150",
    "group": "雅思同义替换",
    "word": "communal",
    "synonyms": [
      "public"
    ],
    "chinese": "n.承诺;许诺;义务；致力",
    "category": "社会",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'communal' is often paraphrased as 'public' in the passage.",
    "explanation": "communal ≈ public"
  },
  {
    "id": "ielts-151",
    "group": "雅思同义替换",
    "word": "commute",
    "synonyms": [
      "travel"
    ],
    "chinese": "adj.公共的;公社的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'commute' is often paraphrased as 'travel' in the passage.",
    "explanation": "commute ≈ travel"
  },
  {
    "id": "ielts-152",
    "group": "雅思同义替换",
    "word": "compare",
    "synonyms": [
      "contrast"
    ],
    "chinese": "v.通勤；用.….交换",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'compare' is often paraphrased as 'contrast' in the passage.",
    "explanation": "compare ≈ contrast"
  },
  {
    "id": "ielts-153",
    "group": "雅思同义替换",
    "word": "conceal",
    "synonyms": [
      "hide"
    ],
    "chinese": "v.与….相比较",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'conceal' is often paraphrased as 'hide' in the passage.",
    "explanation": "conceal ≈ hide"
  },
  {
    "id": "ielts-154",
    "group": "雅思同义替换",
    "word": "concentrate",
    "synonyms": [
      "focus"
    ],
    "chinese": "v.隐藏；隐瞒",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'concentrate' is often paraphrased as 'focus' in the passage.",
    "explanation": "concentrate ≈ focus"
  },
  {
    "id": "ielts-155",
    "group": "雅思同义替换",
    "word": "concur",
    "synonyms": [
      "agree"
    ],
    "chinese": "v.专心于；集中",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'concur' is often paraphrased as 'agree' in the passage.",
    "explanation": "concur ≈ agree"
  },
  {
    "id": "ielts-156",
    "group": "雅思同义替换",
    "word": "confer",
    "synonyms": [
      "grant"
    ],
    "chinese": "v.同意",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'confer' is often paraphrased as 'grant' in the passage.",
    "explanation": "confer ≈ grant"
  },
  {
    "id": "ielts-157",
    "group": "雅思同义替换",
    "word": "conflict",
    "synonyms": [
      "unharmonious"
    ],
    "chinese": "v.授予;给予",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'conflict' is often paraphrased as 'unharmonious' in the passage.",
    "explanation": "conflict ≈ unharmonious"
  },
  {
    "id": "ielts-158",
    "group": "雅思同义替换",
    "word": "confuse",
    "synonyms": [
      "puzzle"
    ],
    "chinese": "n.冲突;矛盾",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'confuse' is often paraphrased as 'puzzle' in the passage.",
    "explanation": "confuse ≈ puzzle"
  },
  {
    "id": "ielts-159",
    "group": "雅思同义替换",
    "word": "conservative",
    "synonyms": [
      "traditional"
    ],
    "chinese": "v.使混乱;使迷惑",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'conservative' is often paraphrased as 'traditional' in the passage.",
    "explanation": "conservative ≈ traditional"
  },
  {
    "id": "ielts-160",
    "group": "雅思同义替换",
    "word": "considerable",
    "synonyms": [
      "significant"
    ],
    "chinese": "adj.保守的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'considerable' is often paraphrased as 'significant' in the passage.",
    "explanation": "considerable ≈ significant"
  },
  {
    "id": "ielts-161",
    "group": "雅思同义替换",
    "word": "contingent",
    "synonyms": [
      "uncertain"
    ],
    "chinese": "adj办相当大的;重要的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'contingent' is often paraphrased as 'uncertain' in the passage.",
    "explanation": "contingent ≈ uncertain"
  },
  {
    "id": "ielts-162",
    "group": "雅思同义替换",
    "word": "controversial",
    "synonyms": [
      "disputable"
    ],
    "chinese": "adj.因情况而异的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'controversial' is often paraphrased as 'disputable' in the passage.",
    "explanation": "controversial ≈ disputable"
  },
  {
    "id": "ielts-163",
    "group": "雅思同义替换",
    "word": "correlation",
    "synonyms": [
      "link"
    ],
    "chinese": "adj.有争论的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'correlation' can be replaced by 'link' to avoid repetition.",
    "explanation": "correlation ≈ link"
  },
  {
    "id": "ielts-164",
    "group": "雅思同义替换",
    "word": "courtship",
    "synonyms": [
      "mate"
    ],
    "chinese": "n.相关;关联",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'courtship' is often paraphrased as 'mate' in the passage.",
    "explanation": "courtship ≈ mate"
  },
  {
    "id": "ielts-165",
    "group": "雅思同义替换",
    "word": "crash",
    "synonyms": [
      "collapse"
    ],
    "chinese": "n.求爱（时期）",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'crash' is often paraphrased as 'collapse' in the passage.",
    "explanation": "crash ≈ collapse"
  },
  {
    "id": "ielts-166",
    "group": "雅思同义替换",
    "word": "credibility",
    "synonyms": [
      "reliance"
    ],
    "chinese": "n.碰撞",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'credibility' is often paraphrased as 'reliance' in the passage.",
    "explanation": "credibility ≈ reliance"
  },
  {
    "id": "ielts-167",
    "group": "雅思同义替换",
    "word": "criminal",
    "synonyms": [
      "conviction"
    ],
    "chinese": "n.可信性",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'criminal' is often paraphrased as 'conviction' in the passage.",
    "explanation": "criminal ≈ conviction"
  },
  {
    "id": "ielts-168",
    "group": "雅思同义替换",
    "word": "crisis",
    "synonyms": [
      "risk"
    ],
    "chinese": "n.罪犯;犯人",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'crisis' is often paraphrased as 'risk' in the passage.",
    "explanation": "crisis ≈ risk"
  },
  {
    "id": "ielts-169",
    "group": "雅思同义替换",
    "word": "criticism",
    "synonyms": [
      "condemn"
    ],
    "chinese": "n.危机",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'criticism' is often paraphrased as 'condemn' in the passage.",
    "explanation": "criticism ≈ condemn"
  },
  {
    "id": "ielts-170",
    "group": "雅思同义替换",
    "word": "curb",
    "synonyms": [
      "restrict"
    ],
    "chinese": "n.批评",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'curb' is often paraphrased as 'restrict' in the passage.",
    "explanation": "curb ≈ restrict"
  },
  {
    "id": "ielts-171",
    "group": "雅思同义替换",
    "word": "damp",
    "synonyms": [
      "wet"
    ],
    "chinese": "V.限制、抑制",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'damp' is often paraphrased as 'wet' in the passage.",
    "explanation": "damp ≈ wet"
  },
  {
    "id": "ielts-172",
    "group": "雅思同义替换",
    "word": "dazzle",
    "synonyms": [
      "flash"
    ],
    "chinese": "v.使目眩；使……眼花",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'dazzle' is often paraphrased as 'flash' in the passage.",
    "explanation": "dazzle ≈ flash"
  },
  {
    "id": "ielts-173",
    "group": "雅思同义替换",
    "word": "deadline",
    "synonyms": [
      "limite"
    ],
    "chinese": "n.最后期限",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'deadline' is often paraphrased as 'limite' in the passage.",
    "explanation": "deadline ≈ limite"
  },
  {
    "id": "ielts-174",
    "group": "雅思同义替换",
    "word": "delay",
    "synonyms": [
      "postpone"
    ],
    "chinese": "n.延期;耽搁",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'delay' is often paraphrased as 'postpone' in the passage.",
    "explanation": "delay ≈ postpone"
  },
  {
    "id": "ielts-175",
    "group": "雅思同义替换",
    "word": "democratic",
    "synonyms": [
      "republic"
    ],
    "chinese": "adj.民主的",
    "category": "社会",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'democratic' is often paraphrased as 'republic' in the passage.",
    "explanation": "democratic ≈ republic"
  },
  {
    "id": "ielts-176",
    "group": "雅思同义替换",
    "word": "demographic",
    "synonyms": [
      "populaiton statistic"
    ],
    "chinese": "adj.办人口统计学的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'demographic' is often paraphrased as 'populaiton statistic' in the passage.",
    "explanation": "demographic ≈ populaiton statistic"
  },
  {
    "id": "ielts-177",
    "group": "雅思同义替换",
    "word": "dental",
    "synonyms": [
      "teeth"
    ],
    "chinese": "adj.办牙科的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'dental' is often paraphrased as 'teeth' in the passage.",
    "explanation": "dental ≈ teeth"
  },
  {
    "id": "ielts-178",
    "group": "雅思同义替换",
    "word": "depression",
    "synonyms": [
      "frustration"
    ],
    "chinese": "n.化抑郁;沮丧",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'depression' is often paraphrased as 'frustration' in the passage.",
    "explanation": "depression ≈ frustration"
  },
  {
    "id": "ielts-179",
    "group": "雅思同义替换",
    "word": "designate",
    "synonyms": [
      "appoint"
    ],
    "chinese": "v.指定;指派;标出",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'designate' is often paraphrased as 'appoint' in the passage.",
    "explanation": "designate ≈ appoint"
  },
  {
    "id": "ielts-180",
    "group": "雅思同义替换",
    "word": "detain",
    "synonyms": [
      "hold"
    ],
    "chinese": "v.留住",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'detain' is often paraphrased as 'hold' in the passage.",
    "explanation": "detain ≈ hold"
  },
  {
    "id": "ielts-181",
    "group": "雅思同义替换",
    "word": "devastate",
    "synonyms": [
      "wreck"
    ],
    "chinese": "v.毁坏;毁灭",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'devastate' is often paraphrased as 'wreck' in the passage.",
    "explanation": "devastate ≈ wreck"
  },
  {
    "id": "ielts-182",
    "group": "雅思同义替换",
    "word": "disclose",
    "synonyms": [
      "expose"
    ],
    "chinese": "v.公开；揭露",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'disclose' is often paraphrased as 'expose' in the passage.",
    "explanation": "disclose ≈ expose"
  },
  {
    "id": "ielts-183",
    "group": "雅思同义替换",
    "word": "disparate",
    "synonyms": [
      "different"
    ],
    "chinese": "adj.故不同的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'disparate' is often paraphrased as 'different' in the passage.",
    "explanation": "disparate ≈ different"
  },
  {
    "id": "ielts-184",
    "group": "雅思同义替换",
    "word": "display",
    "synonyms": [
      "show"
    ],
    "chinese": "v.显示",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'display' is often paraphrased as 'show' in the passage.",
    "explanation": "display ≈ show"
  },
  {
    "id": "ielts-185",
    "group": "雅思同义替换",
    "word": "disrupt",
    "synonyms": [
      "distroy"
    ],
    "chinese": "v.破坏",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'disrupt' is often paraphrased as 'distroy' in the passage.",
    "explanation": "disrupt ≈ distroy"
  },
  {
    "id": "ielts-186",
    "group": "雅思同义替换",
    "word": "distract",
    "synonyms": [
      "divert"
    ],
    "chinese": "v.转移;分心",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'distract' is often paraphrased as 'divert' in the passage.",
    "explanation": "distract ≈ divert"
  },
  {
    "id": "ielts-187",
    "group": "雅思同义替换",
    "word": "distribute",
    "synonyms": [
      "spread"
    ],
    "chinese": "v.分配;分发",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'distribute' is often paraphrased as 'spread' in the passage.",
    "explanation": "distribute ≈ spread"
  },
  {
    "id": "ielts-188",
    "group": "雅思同义替换",
    "word": "documention",
    "synonyms": [
      "record"
    ],
    "chinese": "n.文件；文献",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'documention' can be replaced by 'record' to avoid repetition.",
    "explanation": "documention ≈ record"
  },
  {
    "id": "ielts-189",
    "group": "雅思同义替换",
    "word": "domain",
    "synonyms": [
      "field"
    ],
    "chinese": "n.领域",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'domain' is often paraphrased as 'field' in the passage.",
    "explanation": "domain ≈ field"
  },
  {
    "id": "ielts-190",
    "group": "雅思同义替换",
    "word": "dominate",
    "synonyms": [
      "overbearing"
    ],
    "chinese": "adj.占优势的;占支配地位的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'dominate' is often paraphrased as 'overbearing' in the passage.",
    "explanation": "dominate ≈ overbearing"
  },
  {
    "id": "ielts-191",
    "group": "雅思同义替换",
    "word": "dramatic",
    "synonyms": [
      "striking"
    ],
    "chinese": "adj.戏剧化的；激动人心的；引人注意的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'dramatic' is often paraphrased as 'striking' in the passage.",
    "explanation": "dramatic ≈ striking"
  },
  {
    "id": "ielts-192",
    "group": "雅思同义替换",
    "word": "drought",
    "synonyms": [
      "dry"
    ],
    "chinese": "n.干旱",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'drought' is often paraphrased as 'dry' in the passage.",
    "explanation": "drought ≈ dry"
  },
  {
    "id": "ielts-193",
    "group": "雅思同义替换",
    "word": "durable",
    "synonyms": [
      "lasting"
    ],
    "chinese": "adj.持久的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'durable' is often paraphrased as 'lasting' in the passage.",
    "explanation": "durable ≈ lasting"
  },
  {
    "id": "ielts-194",
    "group": "雅思同义替换",
    "word": "eco-friendly",
    "synonyms": [
      "environmentally-friendly"
    ],
    "chinese": "adj.办生态友好的环保的",
    "category": "环境",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'eco-friendly' is often paraphrased as 'environmentally-friendly' in the passage.",
    "explanation": "eco-friendly ≈ environmentally-friendly"
  },
  {
    "id": "ielts-195",
    "group": "雅思同义替换",
    "word": "elaborate",
    "synonyms": [
      "illustrate"
    ],
    "chinese": "v.详细阐述;详细叙述",
    "category": "工作",
    "scenario": "Speaking",
    "example": "In IELTS Speaking, you can use 'illustrate' as a natural alternative to 'elaborate'.",
    "explanation": "elaborate ≈ illustrate"
  },
  {
    "id": "ielts-196",
    "group": "雅思同义替换",
    "word": "elderly",
    "synonyms": [
      "aged"
    ],
    "chinese": "adj.办局龄的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'elderly' is often paraphrased as 'aged' in the passage.",
    "explanation": "elderly ≈ aged"
  },
  {
    "id": "ielts-197",
    "group": "雅思同义替换",
    "word": "eliminate",
    "synonyms": [
      "dispose"
    ],
    "chinese": "v.消除;排除",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'eliminate' is often paraphrased as 'dispose' in the passage.",
    "explanation": "eliminate ≈ dispose"
  },
  {
    "id": "ielts-198",
    "group": "雅思同义替换",
    "word": "elusive",
    "synonyms": [
      "hard"
    ],
    "chinese": "adj.难懂的；行踪隐秘的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'elusive' is often paraphrased as 'hard' in the passage.",
    "explanation": "elusive ≈ hard"
  },
  {
    "id": "ielts-199",
    "group": "雅思同义替换",
    "word": "encyclopedia",
    "synonyms": [
      "entire range of knowledge"
    ],
    "chinese": "n.百科全书",
    "category": "教育",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'encyclopedia' is often paraphrased as 'entire range of knowledge' in the passage.",
    "explanation": "encyclopedia ≈ entire range of knowledge"
  },
  {
    "id": "ielts-200",
    "group": "雅思同义替换",
    "word": "entrepreneur",
    "synonyms": [
      "boss"
    ],
    "chinese": "n.企业家",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'entrepreneur' is often paraphrased as 'boss' in the passage.",
    "explanation": "entrepreneur ≈ boss"
  },
  {
    "id": "ielts-201",
    "group": "雅思同义替换",
    "word": "equator",
    "synonyms": [
      "geography"
    ],
    "chinese": "n.赤道",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'equator' can be replaced by 'geography' to avoid repetition.",
    "explanation": "equator ≈ geography"
  },
  {
    "id": "ielts-202",
    "group": "雅思同义替换",
    "word": "erratically",
    "synonyms": [
      "unpredictably"
    ],
    "chinese": "adv.不定地;无规",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'erratically' is often paraphrased as 'unpredictably' in the passage.",
    "explanation": "erratically ≈ unpredictably"
  },
  {
    "id": "ielts-203",
    "group": "雅思同义替换",
    "word": "established",
    "synonyms": [
      "built"
    ],
    "chinese": "adj.办确定的；已制定的;已建立的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'established' is often paraphrased as 'built' in the passage.",
    "explanation": "established ≈ built"
  },
  {
    "id": "ielts-204",
    "group": "雅思同义替换",
    "word": "estate",
    "synonyms": [
      "property"
    ],
    "chinese": "n.房地产",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'estate' is often paraphrased as 'property' in the passage.",
    "explanation": "estate ≈ property"
  },
  {
    "id": "ielts-205",
    "group": "雅思同义替换",
    "word": "ethical",
    "synonyms": [
      "moral"
    ],
    "chinese": "adj.办道德的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'ethical' can be replaced by 'moral' to avoid repetition.",
    "explanation": "ethical ≈ moral"
  },
  {
    "id": "ielts-206",
    "group": "雅思同义替换",
    "word": "eventually",
    "synonyms": [
      "finally"
    ],
    "chinese": "adv.最后;终于",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'eventually' is often paraphrased as 'finally' in the passage.",
    "explanation": "eventually ≈ finally"
  },
  {
    "id": "ielts-207",
    "group": "雅思同义替换",
    "word": "evidence",
    "synonyms": [
      "proof"
    ],
    "chinese": "n.迹象；证据",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'evidence' is often paraphrased as 'proof' in the passage.",
    "explanation": "evidence ≈ proof"
  },
  {
    "id": "ielts-208",
    "group": "雅思同义替换",
    "word": "evolve",
    "synonyms": [
      "develop"
    ],
    "chinese": "v.进化;发展；逐渐形成",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'evolve' is often paraphrased as 'develop' in the passage.",
    "explanation": "evolve ≈ develop"
  },
  {
    "id": "ielts-209",
    "group": "雅思同义替换",
    "word": "exceptional",
    "synonyms": [
      "extreme",
      "utmost"
    ],
    "chinese": "adj.异常的;出色的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'exceptional' is often paraphrased as 'extreme' in the passage.",
    "explanation": "exceptional ≈ extreme / utmost"
  },
  {
    "id": "ielts-210",
    "group": "雅思同义替换",
    "word": "exhausted",
    "synonyms": [
      "fatigue"
    ],
    "chinese": "adj.疲惫的;耗尽的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'exhausted' is often paraphrased as 'fatigue' in the passage.",
    "explanation": "exhausted ≈ fatigue"
  },
  {
    "id": "ielts-211",
    "group": "雅思同义替换",
    "word": "experiment",
    "synonyms": [
      "test"
    ],
    "chinese": "n.实验;试验",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'experiment' is often paraphrased as 'test' in the passage.",
    "explanation": "experiment ≈ test"
  },
  {
    "id": "ielts-212",
    "group": "雅思同义替换",
    "word": "explicit",
    "synonyms": [
      "clear"
    ],
    "chinese": "adj.办明确的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'explicit' is often paraphrased as 'clear' in the passage.",
    "explanation": "explicit ≈ clear"
  },
  {
    "id": "ielts-213",
    "group": "雅思同义替换",
    "word": "exploit",
    "synonyms": [
      "use"
    ],
    "chinese": "v.开发;利用",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'exploit' is often paraphrased as 'use' in the passage.",
    "explanation": "exploit ≈ use"
  },
  {
    "id": "ielts-214",
    "group": "雅思同义替换",
    "word": "extend",
    "synonyms": [
      "expand"
    ],
    "chinese": "v.扩展;延伸;推广",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'extend' can be replaced by 'expand' to avoid repetition.",
    "explanation": "extend ≈ expand"
  },
  {
    "id": "ielts-215",
    "group": "雅思同义替换",
    "word": "extract",
    "synonyms": [
      "quotaition"
    ],
    "chinese": "v.提取",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'extract' is often paraphrased as 'quotaition' in the passage.",
    "explanation": "extract ≈ quotaition"
  },
  {
    "id": "ielts-216",
    "group": "雅思同义替换",
    "word": "famine",
    "synonyms": [
      "hunger"
    ],
    "chinese": "n.饥荒",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'famine' is often paraphrased as 'hunger' in the passage.",
    "explanation": "famine ≈ hunger"
  },
  {
    "id": "ielts-217",
    "group": "雅思同义替换",
    "word": "finite",
    "synonyms": [
      "limited"
    ],
    "chinese": "adj.有限的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'finite' is often paraphrased as 'limited' in the passage.",
    "explanation": "finite ≈ limited"
  },
  {
    "id": "ielts-218",
    "group": "雅思同义替换",
    "word": "fitness",
    "synonyms": [
      "heath"
    ],
    "chinese": "n.健康",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'fitness' is often paraphrased as 'heath' in the passage.",
    "explanation": "fitness ≈ heath"
  },
  {
    "id": "ielts-219",
    "group": "雅思同义替换",
    "word": "foe",
    "synonyms": [
      "enemy"
    ],
    "chinese": "n.危害物",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'foe' is often paraphrased as 'enemy' in the passage.",
    "explanation": "foe ≈ enemy"
  },
  {
    "id": "ielts-220",
    "group": "雅思同义替换",
    "word": "format",
    "synonyms": [
      "structure"
    ],
    "chinese": "n.格式",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'format' can be replaced by 'structure' to avoid repetition.",
    "explanation": "format ≈ structure"
  },
  {
    "id": "ielts-221",
    "group": "雅思同义替换",
    "word": "fragment",
    "synonyms": [
      "piece"
    ],
    "chinese": "n.碎片",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'fragment' is often paraphrased as 'piece' in the passage.",
    "explanation": "fragment ≈ piece"
  },
  {
    "id": "ielts-222",
    "group": "雅思同义替换",
    "word": "freeze",
    "synonyms": [
      "chill"
    ],
    "chinese": "n.冰冻;冻结",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'freeze' is often paraphrased as 'chill' in the passage.",
    "explanation": "freeze ≈ chill"
  },
  {
    "id": "ielts-223",
    "group": "雅思同义替换",
    "word": "fullfill",
    "synonyms": [
      "execute"
    ],
    "chinese": "v.满足;实现",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'fullfill' is often paraphrased as 'execute' in the passage.",
    "explanation": "fullfill ≈ execute"
  },
  {
    "id": "ielts-224",
    "group": "雅思同义替换",
    "word": "gene",
    "synonyms": [
      "factor"
    ],
    "chinese": "n.基因",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'gene' can be replaced by 'factor' to avoid repetition.",
    "explanation": "gene ≈ factor"
  },
  {
    "id": "ielts-225",
    "group": "雅思同义替换",
    "word": "gifted",
    "synonyms": [
      "talented"
    ],
    "chinese": "adj.有天赋的;有才华的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'gifted' is often paraphrased as 'talented' in the passage.",
    "explanation": "gifted ≈ talented"
  },
  {
    "id": "ielts-226",
    "group": "雅思同义替换",
    "word": "graphic",
    "synonyms": [
      "picture"
    ],
    "chinese": "adj.形象的；图解的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'graphic' is often paraphrased as 'picture' in the passage.",
    "explanation": "graphic ≈ picture"
  },
  {
    "id": "ielts-227",
    "group": "雅思同义替换",
    "word": "habitat",
    "synonyms": [
      "residence"
    ],
    "chinese": "n.栖息地;住处",
    "category": "环境",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'habitat' is often paraphrased as 'residence' in the passage.",
    "explanation": "habitat ≈ residence"
  },
  {
    "id": "ielts-228",
    "group": "雅思同义替换",
    "word": "harbour",
    "synonyms": [
      "hold"
    ],
    "chinese": "v.怀有海港",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'harbour' is often paraphrased as 'hold' in the passage.",
    "explanation": "harbour ≈ hold"
  },
  {
    "id": "ielts-229",
    "group": "雅思同义替换",
    "word": "hardship",
    "synonyms": [
      "difficult"
    ],
    "chinese": "n.困苦；苦难",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'hardship' is often paraphrased as 'difficult' in the passage.",
    "explanation": "hardship ≈ difficult"
  },
  {
    "id": "ielts-230",
    "group": "雅思同义替换",
    "word": "harsh",
    "synonyms": [
      "rough"
    ],
    "chinese": "adj.办艰难的；严酷的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'harsh' is often paraphrased as 'rough' in the passage.",
    "explanation": "harsh ≈ rough"
  },
  {
    "id": "ielts-231",
    "group": "雅思同义替换",
    "word": "hypothesis",
    "synonyms": [
      "assumption"
    ],
    "chinese": "n.假设",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'hypothesis' is often paraphrased as 'assumption' in the passage.",
    "explanation": "hypothesis ≈ assumption"
  },
  {
    "id": "ielts-232",
    "group": "雅思同义替换",
    "word": "impact",
    "synonyms": [
      "influence"
    ],
    "chinese": "n.影响",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'impact' is often paraphrased as 'influence' in the passage.",
    "explanation": "impact ≈ influence"
  },
  {
    "id": "ielts-233",
    "group": "雅思同义替换",
    "word": "impressive",
    "synonyms": [
      "touching"
    ],
    "chinese": "adj.感人的；给人",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'impressive' is often paraphrased as 'touching' in the passage.",
    "explanation": "impressive ≈ touching"
  },
  {
    "id": "ielts-234",
    "group": "雅思同义替换",
    "word": "in accordance with",
    "synonyms": [
      "conform"
    ],
    "chinese": "依照",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'in accordance with' can be replaced by 'conform' to avoid repetition.",
    "explanation": "in accordance with ≈ conform"
  },
  {
    "id": "ielts-235",
    "group": "雅思同义替换",
    "word": "inaccurate",
    "synonyms": [
      "incorrect"
    ],
    "chinese": "adj.错误的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'inaccurate' can be replaced by 'incorrect' to avoid repetition.",
    "explanation": "inaccurate ≈ incorrect"
  },
  {
    "id": "ielts-236",
    "group": "雅思同义替换",
    "word": "inactive",
    "synonyms": [
      "passive"
    ],
    "chinese": "adj.不活跃的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'inactive' is often paraphrased as 'passive' in the passage.",
    "explanation": "inactive ≈ passive"
  },
  {
    "id": "ielts-237",
    "group": "雅思同义替换",
    "word": "inappropriate",
    "synonyms": [
      "hard"
    ],
    "chinese": "adj.不适当的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'inappropriate' is often paraphrased as 'hard' in the passage.",
    "explanation": "inappropriate ≈ hard"
  },
  {
    "id": "ielts-238",
    "group": "雅思同义替换",
    "word": "indulge",
    "synonyms": [
      "spoil"
    ],
    "chinese": "v.沉溺（于）",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'indulge' is often paraphrased as 'spoil' in the passage.",
    "explanation": "indulge ≈ spoil"
  },
  {
    "id": "ielts-239",
    "group": "雅思同义替换",
    "word": "infest",
    "synonyms": [
      "plague"
    ],
    "chinese": "v.侵害；寄生于",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'infest' is often paraphrased as 'plague' in the passage.",
    "explanation": "infest ≈ plague"
  },
  {
    "id": "ielts-240",
    "group": "雅思同义替换",
    "word": "installment",
    "synonyms": [
      "payment on its completion"
    ],
    "chinese": "n.安装；分期付款",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'installment' is often paraphrased as 'payment on its completion' in the passage.",
    "explanation": "installment ≈ payment on its completion"
  },
  {
    "id": "ielts-241",
    "group": "雅思同义替换",
    "word": "intelligence",
    "synonyms": [
      "mind"
    ],
    "chinese": "n.智力",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'intelligence' is often paraphrased as 'mind' in the passage.",
    "explanation": "intelligence ≈ mind"
  },
  {
    "id": "ielts-242",
    "group": "雅思同义替换",
    "word": "intense",
    "synonyms": [
      "strong"
    ],
    "chinese": "adj;紧张的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'intense' is often paraphrased as 'strong' in the passage.",
    "explanation": "intense ≈ strong"
  },
  {
    "id": "ielts-243",
    "group": "雅思同义替换",
    "word": "interaction",
    "synonyms": [
      "social activities"
    ],
    "chinese": "n.相互作用;交流互动",
    "category": "社会",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'interaction' is often paraphrased as 'social activities' in the passage.",
    "explanation": "interaction ≈ social activities"
  },
  {
    "id": "ielts-244",
    "group": "雅思同义替换",
    "word": "interference",
    "synonyms": [
      "interdependence"
    ],
    "chinese": "n.干涉",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'interference' is often paraphrased as 'interdependence' in the passage.",
    "explanation": "interference ≈ interdependence"
  },
  {
    "id": "ielts-245",
    "group": "雅思同义替换",
    "word": "interior",
    "synonyms": [
      "inner"
    ],
    "chinese": "adj.内部的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'interior' can be replaced by 'inner' to avoid repetition.",
    "explanation": "interior ≈ inner"
  },
  {
    "id": "ielts-246",
    "group": "雅思同义替换",
    "word": "interrupt",
    "synonyms": [
      "stop"
    ],
    "chinese": "v.中断",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'interrupt' is often paraphrased as 'stop' in the passage.",
    "explanation": "interrupt ≈ stop"
  },
  {
    "id": "ielts-247",
    "group": "雅思同义替换",
    "word": "introverted",
    "synonyms": [
      "shyness"
    ],
    "chinese": "adj.内向的;含蓄的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'introverted' is often paraphrased as 'shyness' in the passage.",
    "explanation": "introverted ≈ shyness"
  },
  {
    "id": "ielts-248",
    "group": "雅思同义替换",
    "word": "involve",
    "synonyms": [
      "associate"
    ],
    "chinese": "v.包含;牵涉",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'involve' is often paraphrased as 'associate' in the passage.",
    "explanation": "involve ≈ associate"
  },
  {
    "id": "ielts-249",
    "group": "雅思同义替换",
    "word": "keen",
    "synonyms": [
      "strong"
    ],
    "chinese": "adj.热切的；急迫的;强烈的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'keen' is often paraphrased as 'strong' in the passage.",
    "explanation": "keen ≈ strong"
  },
  {
    "id": "ielts-250",
    "group": "雅思同义替换",
    "word": "label",
    "synonyms": [
      "display"
    ],
    "chinese": "v.打上标签",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'label' is often paraphrased as 'display' in the passage.",
    "explanation": "label ≈ display"
  },
  {
    "id": "ielts-251",
    "group": "雅思同义替换",
    "word": "lack",
    "synonyms": [
      "shortage"
    ],
    "chinese": "v.缺乏；不足",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'lack' can be replaced by 'shortage' to avoid repetition.",
    "explanation": "lack ≈ shortage"
  },
  {
    "id": "ielts-252",
    "group": "雅思同义替换",
    "word": "landscape",
    "synonyms": [
      "scene"
    ],
    "chinese": "n.风景",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'landscape' can be replaced by 'scene' to avoid repetition.",
    "explanation": "landscape ≈ scene"
  },
  {
    "id": "ielts-253",
    "group": "雅思同义替换",
    "word": "likelihood",
    "synonyms": [
      "chance"
    ],
    "chinese": "n.可能性",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'likelihood' is often paraphrased as 'chance' in the passage.",
    "explanation": "likelihood ≈ chance"
  },
  {
    "id": "ielts-254",
    "group": "雅思同义替换",
    "word": "limb",
    "synonyms": [
      "arm or leg"
    ],
    "chinese": "n.四肢",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'limb' can be replaced by 'arm or leg' to avoid repetition.",
    "explanation": "limb ≈ arm or leg"
  },
  {
    "id": "ielts-255",
    "group": "雅思同义替换",
    "word": "linguistic",
    "synonyms": [
      "language"
    ],
    "chinese": "adj.语言（学）的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'linguistic' is often paraphrased as 'language' in the passage.",
    "explanation": "linguistic ≈ language"
  },
  {
    "id": "ielts-256",
    "group": "雅思同义替换",
    "word": "log",
    "synonyms": [
      "record"
    ],
    "chinese": "v.记录原木",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'log' can be replaced by 'record' to avoid repetition.",
    "explanation": "log ≈ record"
  },
  {
    "id": "ielts-257",
    "group": "雅思同义替换",
    "word": "look-in",
    "synonyms": [
      "opportunity",
      "chance"
    ],
    "chinese": "n.成功的机会",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'look-in' can be replaced by 'opportunity' to avoid repetition.",
    "explanation": "look-in ≈ opportunity / chance"
  },
  {
    "id": "ielts-258",
    "group": "雅思同义替换",
    "word": "lopsided",
    "synonyms": [
      "uneven"
    ],
    "chinese": "adj.不平衡的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'lopsided' is often paraphrased as 'uneven' in the passage.",
    "explanation": "lopsided ≈ uneven"
  },
  {
    "id": "ielts-259",
    "group": "雅思同义替换",
    "word": "mainly",
    "synonyms": [
      "primary"
    ],
    "chinese": "adv.主要地;大体上",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'mainly' is often paraphrased as 'primary' in the passage.",
    "explanation": "mainly ≈ primary"
  },
  {
    "id": "ielts-260",
    "group": "雅思同义替换",
    "word": "malfunction",
    "synonyms": [
      "breakdown"
    ],
    "chinese": "v.发生故障；不起作用",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'malfunction' is often paraphrased as 'breakdown' in the passage.",
    "explanation": "malfunction ≈ breakdown"
  },
  {
    "id": "ielts-261",
    "group": "雅思同义替换",
    "word": "mammal",
    "synonyms": [
      "creature"
    ],
    "chinese": "n.哺乳动物",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'mammal' is often paraphrased as 'creature' in the passage.",
    "explanation": "mammal ≈ creature"
  },
  {
    "id": "ielts-262",
    "group": "雅思同义替换",
    "word": "manage to do",
    "synonyms": [
      "success"
    ],
    "chinese": "设法完成某事",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'manage to do' is often paraphrased as 'success' in the passage.",
    "explanation": "manage to do ≈ success"
  },
  {
    "id": "ielts-263",
    "group": "雅思同义替换",
    "word": "manifest",
    "synonyms": [
      "obvious"
    ],
    "chinese": "v.出现;表现",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'manifest' is often paraphrased as 'obvious' in the passage.",
    "explanation": "manifest ≈ obvious"
  },
  {
    "id": "ielts-264",
    "group": "雅思同义替换",
    "word": "manufacture",
    "synonyms": [
      "produce"
    ],
    "chinese": "n.生产",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'manufacture' is often paraphrased as 'produce' in the passage.",
    "explanation": "manufacture ≈ produce"
  },
  {
    "id": "ielts-265",
    "group": "雅思同义替换",
    "word": "marine",
    "synonyms": [
      "sea"
    ],
    "chinese": "adj.海产的；航海的;海运的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'marine' is often paraphrased as 'sea' in the passage.",
    "explanation": "marine ≈ sea"
  },
  {
    "id": "ielts-266",
    "group": "雅思同义替换",
    "word": "mate",
    "synonyms": [
      "spouse"
    ],
    "chinese": "n.配偶",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'mate' is often paraphrased as 'spouse' in the passage.",
    "explanation": "mate ≈ spouse"
  },
  {
    "id": "ielts-267",
    "group": "雅思同义替换",
    "word": "mechanism",
    "synonyms": [
      "method"
    ],
    "chinese": "n.机制;原理",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'mechanism' is often paraphrased as 'method' in the passage.",
    "explanation": "mechanism ≈ method"
  },
  {
    "id": "ielts-268",
    "group": "雅思同义替换",
    "word": "mental",
    "synonyms": [
      "intelligent"
    ],
    "chinese": "adj.精神的;心理的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'mental' is often paraphrased as 'intelligent' in the passage.",
    "explanation": "mental ≈ intelligent"
  },
  {
    "id": "ielts-269",
    "group": "雅思同义替换",
    "word": "mercury",
    "synonyms": [
      "liquid metal"
    ],
    "chinese": "n.汞;水银",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'mercury' is often paraphrased as 'liquid metal' in the passage.",
    "explanation": "mercury ≈ liquid metal"
  },
  {
    "id": "ielts-270",
    "group": "雅思同义替换",
    "word": "meteorology",
    "synonyms": [
      "weather"
    ],
    "chinese": "adj.气象学的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'meteorology' can be replaced by 'weather' to avoid repetition.",
    "explanation": "meteorology ≈ weather"
  },
  {
    "id": "ielts-271",
    "group": "雅思同义替换",
    "word": "migrate",
    "synonyms": [
      "move"
    ],
    "chinese": "v.转移;迁移",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'migrate' is often paraphrased as 'move' in the passage.",
    "explanation": "migrate ≈ move"
  },
  {
    "id": "ielts-272",
    "group": "雅思同义替换",
    "word": "moisture",
    "synonyms": [
      "humidity"
    ],
    "chinese": "n.水分;湿度",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'moisture' is often paraphrased as 'humidity' in the passage.",
    "explanation": "moisture ≈ humidity"
  },
  {
    "id": "ielts-273",
    "group": "雅思同义替换",
    "word": "monitor",
    "synonyms": [
      "surveillance"
    ],
    "chinese": "v.监控",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'monitor' can be replaced by 'surveillance' to avoid repetition.",
    "explanation": "monitor ≈ surveillance"
  },
  {
    "id": "ielts-274",
    "group": "雅思同义替换",
    "word": "motif",
    "synonyms": [
      "theme"
    ],
    "chinese": "n.主题；图形",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'motif' is often paraphrased as 'theme' in the passage.",
    "explanation": "motif ≈ theme"
  },
  {
    "id": "ielts-275",
    "group": "雅思同义替换",
    "word": "mould",
    "synonyms": [
      "form"
    ],
    "chinese": "v.模压;塑造；塑造成",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'mould' can be replaced by 'form' to avoid repetition.",
    "explanation": "mould ≈ form"
  },
  {
    "id": "ielts-276",
    "group": "雅思同义替换",
    "word": "native",
    "synonyms": [
      "original"
    ],
    "chinese": "adj.本国的；土著的；天然的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'native' can be replaced by 'original' to avoid repetition.",
    "explanation": "native ≈ original"
  },
  {
    "id": "ielts-277",
    "group": "雅思同义替换",
    "word": "nocturnal",
    "synonyms": [
      "night"
    ],
    "chinese": "adj.办夜间的;夜间发生的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'nocturnal' is often paraphrased as 'night' in the passage.",
    "explanation": "nocturnal ≈ night"
  },
  {
    "id": "ielts-278",
    "group": "雅思同义替换",
    "word": "norm",
    "synonyms": [
      "regulation"
    ],
    "chinese": "n.规范",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'norm' can be replaced by 'regulation' to avoid repetition.",
    "explanation": "norm ≈ regulation"
  },
  {
    "id": "ielts-279",
    "group": "雅思同义替换",
    "word": "notoriety",
    "synonyms": [
      "famous"
    ],
    "chinese": "n.名声",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'notoriety' can be replaced by 'famous' to avoid repetition.",
    "explanation": "notoriety ≈ famous"
  },
  {
    "id": "ielts-280",
    "group": "雅思同义替换",
    "word": "objective",
    "synonyms": [
      "goal"
    ],
    "chinese": "n.目标adj.客观的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'objective' is often paraphrased as 'goal' in the passage.",
    "explanation": "objective ≈ goal"
  },
  {
    "id": "ielts-281",
    "group": "雅思同义替换",
    "word": "obligation",
    "synonyms": [
      "responsibility"
    ],
    "chinese": "n.义务",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'obligation' is often paraphrased as 'responsibility' in the passage.",
    "explanation": "obligation ≈ responsibility"
  },
  {
    "id": "ielts-282",
    "group": "雅思同义替换",
    "word": "obscure",
    "synonyms": [
      "hide"
    ],
    "chinese": "v.掩盖;使模糊不清",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'obscure' is often paraphrased as 'hide' in the passage.",
    "explanation": "obscure ≈ hide"
  },
  {
    "id": "ielts-283",
    "group": "雅思同义替换",
    "word": "obtain",
    "synonyms": [
      "get"
    ],
    "chinese": "v.获得",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'obtain' is often paraphrased as 'get' in the passage.",
    "explanation": "obtain ≈ get"
  },
  {
    "id": "ielts-284",
    "group": "雅思同义替换",
    "word": "odd",
    "synonyms": [
      "strange"
    ],
    "chinese": "adj.古怪的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'odd' is often paraphrased as 'strange' in the passage.",
    "explanation": "odd ≈ strange"
  },
  {
    "id": "ielts-285",
    "group": "雅思同义替换",
    "word": "odour",
    "synonyms": [
      "smell"
    ],
    "chinese": "n.气味",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'odour' is often paraphrased as 'smell' in the passage.",
    "explanation": "odour ≈ smell"
  },
  {
    "id": "ielts-286",
    "group": "雅思同义替换",
    "word": "offensive",
    "synonyms": [
      "hostile"
    ],
    "chinese": "adj.办冒犯的;无礼的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'offensive' is often paraphrased as 'hostile' in the passage.",
    "explanation": "offensive ≈ hostile"
  },
  {
    "id": "ielts-287",
    "group": "雅思同义替换",
    "word": "official",
    "synonyms": [
      "authority"
    ],
    "chinese": "adj;官方的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'official' can be replaced by 'authority' to avoid repetition.",
    "explanation": "official ≈ authority"
  },
  {
    "id": "ielts-288",
    "group": "雅思同义替换",
    "word": "optimum",
    "synonyms": [
      "best"
    ],
    "chinese": "n.最佳效果adj.最适宜的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'optimum' is often paraphrased as 'best' in the passage.",
    "explanation": "optimum ≈ best"
  },
  {
    "id": "ielts-289",
    "group": "雅思同义替换",
    "word": "ordinary",
    "synonyms": [
      "common"
    ],
    "chinese": "adj.普通的平凡的；平常的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'ordinary' can be replaced by 'common' to avoid repetition.",
    "explanation": "ordinary ≈ common"
  },
  {
    "id": "ielts-290",
    "group": "雅思同义替换",
    "word": "organ",
    "synonyms": [
      "a part of body"
    ],
    "chinese": "n.器官；机构",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'organ' can be replaced by 'a part of body' to avoid repetition.",
    "explanation": "organ ≈ a part of body"
  },
  {
    "id": "ielts-291",
    "group": "雅思同义替换",
    "word": "out of question",
    "synonyms": [
      "impossible"
    ],
    "chinese": "不可能",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'out of question' is often paraphrased as 'impossible' in the passage.",
    "explanation": "out of question ≈ impossible"
  },
  {
    "id": "ielts-292",
    "group": "雅思同义替换",
    "word": "overcome",
    "synonyms": [
      "defeat"
    ],
    "chinese": "v.克服",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'overcome' is often paraphrased as 'defeat' in the passage.",
    "explanation": "overcome ≈ defeat"
  },
  {
    "id": "ielts-293",
    "group": "雅思同义替换",
    "word": "overtake",
    "synonyms": [
      "surpass"
    ],
    "chinese": "v.赶上",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'overtake' is often paraphrased as 'surpass' in the passage.",
    "explanation": "overtake ≈ surpass"
  },
  {
    "id": "ielts-294",
    "group": "雅思同义替换",
    "word": "paralyse",
    "synonyms": [
      "connot move"
    ],
    "chinese": "v.使麻痹；使.….瘫痪",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'paralyse' is often paraphrased as 'connot move' in the passage.",
    "explanation": "paralyse ≈ connot move"
  },
  {
    "id": "ielts-295",
    "group": "雅思同义替换",
    "word": "paramount",
    "synonyms": [
      "principal"
    ],
    "chinese": "办最重要的;主要的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'paramount' is often paraphrased as 'principal' in the passage.",
    "explanation": "paramount ≈ principal"
  },
  {
    "id": "ielts-296",
    "group": "雅思同义替换",
    "word": "participate",
    "synonyms": [
      "join"
    ],
    "chinese": "v.参加",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'participate' is often paraphrased as 'join' in the passage.",
    "explanation": "participate ≈ join"
  },
  {
    "id": "ielts-297",
    "group": "雅思同义替换",
    "word": "patient",
    "synonyms": [
      "repetitive"
    ],
    "chinese": "n.容忍的病人；患者",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'patient' is often paraphrased as 'repetitive' in the passage.",
    "explanation": "patient ≈ repetitive"
  },
  {
    "id": "ielts-298",
    "group": "雅思同义替换",
    "word": "peak",
    "synonyms": [
      "top"
    ],
    "chinese": "adj.有耐性的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'peak' is often paraphrased as 'top' in the passage.",
    "explanation": "peak ≈ top"
  },
  {
    "id": "ielts-299",
    "group": "雅思同义替换",
    "word": "permit",
    "synonyms": [
      "allow"
    ],
    "chinese": "n.最局峰;顶点v.使达到顶峰",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'permit' is often paraphrased as 'allow' in the passage.",
    "explanation": "permit ≈ allow"
  },
  {
    "id": "ielts-300",
    "group": "雅思同义替换",
    "word": "persuade",
    "synonyms": [
      "influence"
    ],
    "chinese": "n.许可证;执照v.许可",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'persuade' is often paraphrased as 'influence' in the passage.",
    "explanation": "persuade ≈ influence"
  },
  {
    "id": "ielts-301",
    "group": "雅思同义替换",
    "word": "pessimistic",
    "synonyms": [
      "negative"
    ],
    "chinese": "v.说服;劝说",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'pessimistic' is often paraphrased as 'negative' in the passage.",
    "explanation": "pessimistic ≈ negative"
  },
  {
    "id": "ielts-302",
    "group": "雅思同义替换",
    "word": "phase",
    "synonyms": [
      "process"
    ],
    "chinese": "adj.悲观的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'phase' is often paraphrased as 'process' in the passage.",
    "explanation": "phase ≈ process"
  },
  {
    "id": "ielts-303",
    "group": "雅思同义替换",
    "word": "physical",
    "synonyms": [
      "body"
    ],
    "chinese": "n.阶段",
    "category": "健康",
    "scenario": "Listening",
    "example": "In IELTS Listening, the recording may say 'body' while the question uses 'physical'.",
    "explanation": "physical ≈ body"
  },
  {
    "id": "ielts-304",
    "group": "雅思同义替换",
    "word": "plagiarise",
    "synonyms": [
      "copy"
    ],
    "chinese": "adj.身体上的",
    "category": "趋势描述",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'plagiarise' can be replaced by 'copy' to avoid repetition.",
    "explanation": "plagiarise ≈ copy"
  },
  {
    "id": "ielts-305",
    "group": "雅思同义替换",
    "word": "plenty of",
    "synonyms": [
      "many"
    ],
    "chinese": "v.抄袭",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'plenty of' is often paraphrased as 'many' in the passage.",
    "explanation": "plenty of ≈ many"
  },
  {
    "id": "ielts-306",
    "group": "雅思同义替换",
    "word": "plot",
    "synonyms": [
      "plan"
    ],
    "chinese": "adj.大量的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'plot' is often paraphrased as 'plan' in the passage.",
    "explanation": "plot ≈ plan"
  },
  {
    "id": "ielts-307",
    "group": "雅思同义替换",
    "word": "pose",
    "synonyms": [
      "cause"
    ],
    "chinese": "v.提出;造成;形成",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'pose' is often paraphrased as 'cause' in the passage.",
    "explanation": "pose ≈ cause"
  },
  {
    "id": "ielts-308",
    "group": "雅思同义替换",
    "word": "portable",
    "synonyms": [
      "conveyable"
    ],
    "chinese": "adj.办便携的",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'portable' can be replaced by 'conveyable' to avoid repetition.",
    "explanation": "portable ≈ conveyable"
  },
  {
    "id": "ielts-309",
    "group": "雅思同义替换",
    "word": "poverty",
    "synonyms": [
      "poor"
    ],
    "chinese": "n.贫穷",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'poverty' can be replaced by 'poor' to avoid repetition.",
    "explanation": "poverty ≈ poor"
  },
  {
    "id": "ielts-310",
    "group": "雅思同义替换",
    "word": "praise",
    "synonyms": [
      "commend"
    ],
    "chinese": "v.赞扬",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'praise' is often paraphrased as 'commend' in the passage.",
    "explanation": "praise ≈ commend"
  },
  {
    "id": "ielts-311",
    "group": "雅思同义替换",
    "word": "predict",
    "synonyms": [
      "expect"
    ],
    "chinese": "v.预测;预知",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'predict' is often paraphrased as 'expect' in the passage.",
    "explanation": "predict ≈ expect"
  },
  {
    "id": "ielts-312",
    "group": "雅思同义替换",
    "word": "pressing",
    "synonyms": [
      "urgent"
    ],
    "chinese": "adj.办迫切的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'pressing' is often paraphrased as 'urgent' in the passage.",
    "explanation": "pressing ≈ urgent"
  },
  {
    "id": "ielts-313",
    "group": "雅思同义替换",
    "word": "private",
    "synonyms": [
      "personal"
    ],
    "chinese": "adj.私人的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'private' is often paraphrased as 'personal' in the passage.",
    "explanation": "private ≈ personal"
  },
  {
    "id": "ielts-314",
    "group": "雅思同义替换",
    "word": "prohibit",
    "synonyms": [
      "not allowed"
    ],
    "chinese": "v.禁止",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'prohibit' is often paraphrased as 'not allowed' in the passage.",
    "explanation": "prohibit ≈ not allowed"
  },
  {
    "id": "ielts-315",
    "group": "雅思同义替换",
    "word": "prolong",
    "synonyms": [
      "extend"
    ],
    "chinese": "v.拉长;延长",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'prolong' is often paraphrased as 'extend' in the passage.",
    "explanation": "prolong ≈ extend"
  },
  {
    "id": "ielts-316",
    "group": "雅思同义替换",
    "word": "promote",
    "synonyms": [
      "improve"
    ],
    "chinese": "v.促进;推销",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'promote' is often paraphrased as 'improve' in the passage.",
    "explanation": "promote ≈ improve"
  },
  {
    "id": "ielts-317",
    "group": "雅思同义替换",
    "word": "prosper",
    "synonyms": [
      "success"
    ],
    "chinese": "v.使成功;使繁荣",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'prosper' is often paraphrased as 'success' in the passage.",
    "explanation": "prosper ≈ success"
  },
  {
    "id": "ielts-318",
    "group": "雅思同义替换",
    "word": "purify",
    "synonyms": [
      "clean"
    ],
    "chinese": "v.净化",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'purify' is often paraphrased as 'clean' in the passage.",
    "explanation": "purify ≈ clean"
  },
  {
    "id": "ielts-319",
    "group": "雅思同义替换",
    "word": "qualify",
    "synonyms": [
      "fulfill"
    ],
    "chinese": "v.取得资格",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'qualify' is often paraphrased as 'fulfill' in the passage.",
    "explanation": "qualify ≈ fulfill"
  },
  {
    "id": "ielts-320",
    "group": "雅思同义替换",
    "word": "radical",
    "synonyms": [
      "utmost"
    ],
    "chinese": "adj.彻底的根本的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'radical' is often paraphrased as 'utmost' in the passage.",
    "explanation": "radical ≈ utmost"
  },
  {
    "id": "ielts-321",
    "group": "雅思同义替换",
    "word": "range",
    "synonyms": [
      "scope"
    ],
    "chinese": "n.范围幅度",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'range' is often paraphrased as 'scope' in the passage.",
    "explanation": "range ≈ scope"
  },
  {
    "id": "ielts-322",
    "group": "雅思同义替换",
    "word": "rare",
    "synonyms": [
      "unusual"
    ],
    "chinese": "adj.稀有的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'rare' is often paraphrased as 'unusual' in the passage.",
    "explanation": "rare ≈ unusual"
  },
  {
    "id": "ielts-323",
    "group": "雅思同义替换",
    "word": "rate",
    "synonyms": [
      "rank",
      "measure"
    ],
    "chinese": "n.等级v.评估",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'rate' is often paraphrased as 'rank' in the passage.",
    "explanation": "rate ≈ rank / measure"
  },
  {
    "id": "ielts-324",
    "group": "雅思同义替换",
    "word": "react",
    "synonyms": [
      "respond"
    ],
    "chinese": "v.反应",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'react' is often paraphrased as 'respond' in the passage.",
    "explanation": "react ≈ respond"
  },
  {
    "id": "ielts-325",
    "group": "雅思同义替换",
    "word": "recreation",
    "synonyms": [
      "entertainment"
    ],
    "chinese": "n.娱乐;消遣",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'recreation' is often paraphrased as 'entertainment' in the passage.",
    "explanation": "recreation ≈ entertainment"
  },
  {
    "id": "ielts-326",
    "group": "雅思同义替换",
    "word": "reduction",
    "synonyms": [
      "decrease"
    ],
    "chinese": "n.下降;减少",
    "category": "趋势描述",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'reduction' can be replaced by 'decrease' to avoid repetition.",
    "explanation": "reduction ≈ decrease"
  },
  {
    "id": "ielts-327",
    "group": "雅思同义替换",
    "word": "refer to",
    "synonyms": [
      "talk about"
    ],
    "chinese": "指（的是）;涉及;提及",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'refer to' is often paraphrased as 'talk about' in the passage.",
    "explanation": "refer to ≈ talk about"
  },
  {
    "id": "ielts-328",
    "group": "雅思同义替换",
    "word": "rehearsal",
    "synonyms": [
      "preparation"
    ],
    "chinese": "n.排演；预演练习",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'rehearsal' is often paraphrased as 'preparation' in the passage.",
    "explanation": "rehearsal ≈ preparation"
  },
  {
    "id": "ielts-329",
    "group": "雅思同义替换",
    "word": "reject",
    "synonyms": [
      "exclude"
    ],
    "chinese": "v.*拒绝;排斥;丢弃",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'reject' is often paraphrased as 'exclude' in the passage.",
    "explanation": "reject ≈ exclude"
  },
  {
    "id": "ielts-330",
    "group": "雅思同义替换",
    "word": "relevant",
    "synonyms": [
      "relative"
    ],
    "chinese": "adj.相关的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'relevant' is often paraphrased as 'relative' in the passage.",
    "explanation": "relevant ≈ relative"
  },
  {
    "id": "ielts-331",
    "group": "雅思同义替换",
    "word": "religious",
    "synonyms": [
      "sacred"
    ],
    "chinese": "adj.峰宗教的；虔钺的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'religious' is often paraphrased as 'sacred' in the passage.",
    "explanation": "religious ≈ sacred"
  },
  {
    "id": "ielts-332",
    "group": "雅思同义替换",
    "word": "reluctant",
    "synonyms": [
      "unwilling"
    ],
    "chinese": "adj.办不情愿的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'reluctant' is often paraphrased as 'unwilling' in the passage.",
    "explanation": "reluctant ≈ unwilling"
  },
  {
    "id": "ielts-333",
    "group": "雅思同义替换",
    "word": "reproduce",
    "synonyms": [
      "breed"
    ],
    "chinese": "v.繁殖",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'reproduce' is often paraphrased as 'breed' in the passage.",
    "explanation": "reproduce ≈ breed"
  },
  {
    "id": "ielts-334",
    "group": "雅思同义替换",
    "word": "responsible",
    "synonyms": [
      "liable"
    ],
    "chinese": "adj.办负责的;可靠的；有责任的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'responsible' is often paraphrased as 'liable' in the passage.",
    "explanation": "responsible ≈ liable"
  },
  {
    "id": "ielts-335",
    "group": "雅思同义替换",
    "word": "revision",
    "synonyms": [
      "editing"
    ],
    "chinese": "n.修正",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'revision' is often paraphrased as 'editing' in the passage.",
    "explanation": "revision ≈ editing"
  },
  {
    "id": "ielts-336",
    "group": "雅思同义替换",
    "word": "revive",
    "synonyms": [
      "renaissance"
    ],
    "chinese": "v.使复苏;恢复",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'revive' is often paraphrased as 'renaissance' in the passage.",
    "explanation": "revive ≈ renaissance"
  },
  {
    "id": "ielts-337",
    "group": "雅思同义替换",
    "word": "ruin",
    "synonyms": [
      "destroy"
    ],
    "chinese": "v.毁灭",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'ruin' is often paraphrased as 'destroy' in the passage.",
    "explanation": "ruin ≈ destroy"
  },
  {
    "id": "ielts-338",
    "group": "雅思同义替换",
    "word": "scenic",
    "synonyms": [
      "beautiful"
    ],
    "chinese": "adj.风景优美的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'scenic' is often paraphrased as 'beautiful' in the passage.",
    "explanation": "scenic ≈ beautiful"
  },
  {
    "id": "ielts-339",
    "group": "雅思同义替换",
    "word": "shade",
    "synonyms": [
      "shelter"
    ],
    "chinese": "n.遮阳；阴影",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'shade' is often paraphrased as 'shelter' in the passage.",
    "explanation": "shade ≈ shelter"
  },
  {
    "id": "ielts-340",
    "group": "雅思同义替换",
    "word": "skepticism",
    "synonyms": [
      "doubt"
    ],
    "chinese": "n.怀疑",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'skepticism' is often paraphrased as 'doubt' in the passage.",
    "explanation": "skepticism ≈ doubt"
  },
  {
    "id": "ielts-341",
    "group": "雅思同义替换",
    "word": "soar",
    "synonyms": [
      "increase"
    ],
    "chinese": "v.激增",
    "category": "趋势描述",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'soar' can be replaced by 'increase' to avoid repetition.",
    "explanation": "soar ≈ increase"
  },
  {
    "id": "ielts-342",
    "group": "雅思同义替换",
    "word": "solely",
    "synonyms": [
      "alone"
    ],
    "chinese": "adv.唯一地",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'solely' is often paraphrased as 'alone' in the passage.",
    "explanation": "solely ≈ alone"
  },
  {
    "id": "ielts-343",
    "group": "雅思同义替换",
    "word": "solicitor",
    "synonyms": [
      "lawyer"
    ],
    "chinese": "n.律师",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'solicitor' can be replaced by 'lawyer' to avoid repetition.",
    "explanation": "solicitor ≈ lawyer"
  },
  {
    "id": "ielts-344",
    "group": "雅思同义替换",
    "word": "steer",
    "synonyms": [
      "manage"
    ],
    "chinese": "v.控制;引导",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'steer' is often paraphrased as 'manage' in the passage.",
    "explanation": "steer ≈ manage"
  },
  {
    "id": "ielts-345",
    "group": "雅思同义替换",
    "word": "stimulate",
    "synonyms": [
      "motivate"
    ],
    "chinese": "v.刺激;激励",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'stimulate' is often paraphrased as 'motivate' in the passage.",
    "explanation": "stimulate ≈ motivate"
  },
  {
    "id": "ielts-346",
    "group": "雅思同义替换",
    "word": "stride",
    "synonyms": [
      "progress"
    ],
    "chinese": "n;进展",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'stride' is often paraphrased as 'progress' in the passage.",
    "explanation": "stride ≈ progress"
  },
  {
    "id": "ielts-347",
    "group": "雅思同义替换",
    "word": "succumb",
    "synonyms": [
      "yield"
    ],
    "chinese": "vi.屈服",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'succumb' is often paraphrased as 'yield' in the passage.",
    "explanation": "succumb ≈ yield"
  },
  {
    "id": "ielts-348",
    "group": "雅思同义替换",
    "word": "subdivide",
    "synonyms": [
      "break down"
    ],
    "chinese": "v.把…….细分",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'subdivide' is often paraphrased as 'break down' in the passage.",
    "explanation": "subdivide ≈ break down"
  },
  {
    "id": "ielts-349",
    "group": "雅思同义替换",
    "word": "subtle",
    "synonyms": [
      "delicate"
    ],
    "chinese": "adj.微妙的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'subtle' is often paraphrased as 'delicate' in the passage.",
    "explanation": "subtle ≈ delicate"
  },
  {
    "id": "ielts-350",
    "group": "雅思同义替换",
    "word": "substance",
    "synonyms": [
      "matter"
    ],
    "chinese": "n.物质；实质",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'substance' is often paraphrased as 'matter' in the passage.",
    "explanation": "substance ≈ matter"
  },
  {
    "id": "ielts-351",
    "group": "雅思同义替换",
    "word": "sufficiency",
    "synonyms": [
      "enough"
    ],
    "chinese": "n.足量;充足",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'sufficiency' is often paraphrased as 'enough' in the passage.",
    "explanation": "sufficiency ≈ enough"
  },
  {
    "id": "ielts-352",
    "group": "雅思同义替换",
    "word": "supersede",
    "synonyms": [
      "replace"
    ],
    "chinese": "v.取代;代替",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'supersede' is often paraphrased as 'replace' in the passage.",
    "explanation": "supersede ≈ replace"
  },
  {
    "id": "ielts-353",
    "group": "雅思同义替换",
    "word": "suppress",
    "synonyms": [
      "hold"
    ],
    "chinese": "v.抑制；隐瞒",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'suppress' is often paraphrased as 'hold' in the passage.",
    "explanation": "suppress ≈ hold"
  },
  {
    "id": "ielts-354",
    "group": "雅思同义替换",
    "word": "supremacy",
    "synonyms": [
      "priority"
    ],
    "chinese": "n.至高无上的地位",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'supremacy' can be replaced by 'priority' to avoid repetition.",
    "explanation": "supremacy ≈ priority"
  },
  {
    "id": "ielts-355",
    "group": "雅思同义替换",
    "word": "suspicious",
    "synonyms": [
      "odd"
    ],
    "chinese": "adj.可疑的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'suspicious' is often paraphrased as 'odd' in the passage.",
    "explanation": "suspicious ≈ odd"
  },
  {
    "id": "ielts-356",
    "group": "雅思同义替换",
    "word": "sustainable",
    "synonyms": [
      "long-term"
    ],
    "chinese": "adj.可持续的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'sustainable' is often paraphrased as 'long-term' in the passage.",
    "explanation": "sustainable ≈ long-term"
  },
  {
    "id": "ielts-357",
    "group": "雅思同义替换",
    "word": "symptom",
    "synonyms": [
      "sign"
    ],
    "chinese": "n.症状;征兆",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'symptom' is often paraphrased as 'sign' in the passage.",
    "explanation": "symptom ≈ sign"
  },
  {
    "id": "ielts-358",
    "group": "雅思同义替换",
    "word": "tension",
    "synonyms": [
      "upset"
    ],
    "chinese": "n.紧张;不安",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'tension' is often paraphrased as 'upset' in the passage.",
    "explanation": "tension ≈ upset"
  },
  {
    "id": "ielts-359",
    "group": "雅思同义替换",
    "word": "term",
    "synonyms": [
      "word"
    ],
    "chinese": "n.自始至终",
    "category": "逻辑关系",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'term' can be replaced by 'word' to avoid repetition.",
    "explanation": "term ≈ word"
  },
  {
    "id": "ielts-360",
    "group": "雅思同义替换",
    "word": "throughout",
    "synonyms": [
      "anywhere"
    ],
    "chinese": "adv.全部遍及",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'throughout' is often paraphrased as 'anywhere' in the passage.",
    "explanation": "throughout ≈ anywhere"
  },
  {
    "id": "ielts-361",
    "group": "雅思同义替换",
    "word": "toll",
    "synonyms": [
      "charge"
    ],
    "chinese": "n.通行费v.征收",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'toll' is often paraphrased as 'charge' in the passage.",
    "explanation": "toll ≈ charge"
  },
  {
    "id": "ielts-362",
    "group": "雅思同义替换",
    "word": "trace",
    "synonyms": [
      "track"
    ],
    "chinese": "n.追溯；痕迹",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'trace' is often paraphrased as 'track' in the passage.",
    "explanation": "trace ≈ track"
  },
  {
    "id": "ielts-363",
    "group": "雅思同义替换",
    "word": "transcend",
    "synonyms": [
      "excel"
    ],
    "chinese": "v.胜过;超越",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'transcend' is often paraphrased as 'excel' in the passage.",
    "explanation": "transcend ≈ excel"
  },
  {
    "id": "ielts-364",
    "group": "雅思同义替换",
    "word": "transmit",
    "synonyms": [
      "send"
    ],
    "chinese": "v.运输；经过;传送",
    "category": "地图题",
    "scenario": "Listening",
    "example": "In IELTS Listening, the recording may say 'send' while the question uses 'transmit'.",
    "explanation": "transmit ≈ send"
  },
  {
    "id": "ielts-365",
    "group": "雅思同义替换",
    "word": "tremendous",
    "synonyms": [
      "vast"
    ],
    "chinese": "adj.巨大的;惊人的",
    "category": "趋势描述",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'tremendous' can be replaced by 'vast' to avoid repetition.",
    "explanation": "tremendous ≈ vast"
  },
  {
    "id": "ielts-366",
    "group": "雅思同义替换",
    "word": "trigger",
    "synonyms": [
      "begin"
    ],
    "chinese": "n.触发;引发引起",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'trigger' is often paraphrased as 'begin' in the passage.",
    "explanation": "trigger ≈ begin"
  },
  {
    "id": "ielts-367",
    "group": "雅思同义替换",
    "word": "tropical",
    "synonyms": [
      "hot"
    ],
    "chinese": "adj热带的",
    "category": "环境",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'tropical' is often paraphrased as 'hot' in the passage.",
    "explanation": "tropical ≈ hot"
  },
  {
    "id": "ielts-368",
    "group": "雅思同义替换",
    "word": "unbiased",
    "synonyms": [
      "fair"
    ],
    "chinese": "adj.公正的;无偏见的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'unbiased' is often paraphrased as 'fair' in the passage.",
    "explanation": "unbiased ≈ fair"
  },
  {
    "id": "ielts-369",
    "group": "雅思同义替换",
    "word": "uniform",
    "synonyms": [
      "consistent"
    ],
    "chinese": "adj.本始终如的",
    "category": "趋势描述",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'uniform' can be replaced by 'consistent' to avoid repetition.",
    "explanation": "uniform ≈ consistent"
  },
  {
    "id": "ielts-370",
    "group": "雅思同义替换",
    "word": "valuable",
    "synonyms": [
      "benefit"
    ],
    "chinese": "adj.叫宝贵的;有价值的",
    "category": "经济",
    "scenario": "Writing",
    "example": "In IELTS Writing, 'valuable' can be replaced by 'benefit' to avoid repetition.",
    "explanation": "valuable ≈ benefit"
  },
  {
    "id": "ielts-371",
    "group": "雅思同义替换",
    "word": "versatile",
    "synonyms": [
      "all-around"
    ],
    "chinese": "adj.沉多功能的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'versatile' is often paraphrased as 'all-around' in the passage.",
    "explanation": "versatile ≈ all-around"
  },
  {
    "id": "ielts-372",
    "group": "雅思同义替换",
    "word": "view",
    "synonyms": [
      "overlook"
    ],
    "chinese": "v.看",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'view' is often paraphrased as 'overlook' in the passage.",
    "explanation": "view ≈ overlook"
  },
  {
    "id": "ielts-373",
    "group": "雅思同义替换",
    "word": "violent",
    "synonyms": [
      "fierce"
    ],
    "chinese": "adj.暴力的；猛烈的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'violent' is often paraphrased as 'fierce' in the passage.",
    "explanation": "violent ≈ fierce"
  },
  {
    "id": "ielts-374",
    "group": "雅思同义替换",
    "word": "visible",
    "synonyms": [
      "see"
    ],
    "chinese": "adj.明显的;看得见的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'visible' is often paraphrased as 'see' in the passage.",
    "explanation": "visible ≈ see"
  },
  {
    "id": "ielts-375",
    "group": "雅思同义替换",
    "word": "visual",
    "synonyms": [
      "image"
    ],
    "chinese": "adj.视觉的",
    "category": "学术阅读",
    "scenario": "Reading",
    "example": "In IELTS Reading, 'visual' is often paraphrased as 'image' in the passage.",
    "explanation": "visual ≈ image"
  },
  {
    "id": "ielts-376",
    "group": "雅思同义替换",
    "word": "well-being",
    "synonyms": [
      "health"
    ],
    "chinese": "n.健康;康乐",
    "category": "健康",
    "scenario": "Listening",
    "example": "In IELTS Listening, the recording may say 'health' while the question uses 'well-being'.",
    "explanation": "well-being ≈ health"
  }
];
