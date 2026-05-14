from __future__ import annotations

import json
import re
from pathlib import Path

import openpyxl


SOURCE = Path("/Users/yangxinyu/Downloads/雅思资料分享/阅读/538雅思同义替换/雅思阅读刘洪波538考点词表格整理版可用于练习.xlsx")
OUTPUT = Path("/Users/yangxinyu/Documents/雅思/ielts-synonym-trainer/src/data/vocabulary.ts")


CATEGORY_RULES = [
    ("教育", ["learn", "education", "school", "student", "teach", "academic", "knowledge", "comprehend", "understand"]),
    ("科技", ["technology", "technical", "artificial", "digital", "machine", "device", "innovation", "industrial"]),
    ("环境", ["environment", "climate", "tropical", "natural", "fertilizer", "toxic", "domestic", "resource", "habitat"]),
    ("社会", ["community", "public", "social", "population", "urban", "cultural", "human", "people", "national"]),
    ("工作", ["work", "job", "career", "employee", "labour", "labor", "profession", "expert", "occupy"]),
    ("健康", ["health", "disease", "well-being", "medical", "stress", "exercise", "diet", "physical"]),
    ("经济", ["economic", "money", "financial", "market", "trade", "exchange", "valuable", "benefit", "cost"]),
    ("地图题", ["map", "route", "location", "direction", "transport", "transmit", "approach", "shift"]),
    ("趋势描述", ["increase", "decrease", "trend", "decline", "rise", "fall", "tremendous", "constant", "consistent"]),
    ("逻辑关系", ["and", "or", "because", "therefore", "although", "however", "rather", "other than", "not only"]),
]

SCENARIO_BY_CATEGORY = {
    "教育": "Reading",
    "科技": "Reading",
    "环境": "Reading",
    "社会": "Reading",
    "工作": "Speaking",
    "健康": "Listening",
    "经济": "Writing",
    "地图题": "Listening",
    "趋势描述": "Writing",
    "逻辑关系": "Writing",
    "学术阅读": "Reading",
}


def clean_synonym(value: str) -> str:
    value = re.sub(r"[\u4e00-\u9fff]+", "", value)
    value = re.sub(r"\s+", " ", value).strip()
    return value.strip(" ;,，；:：.。")


def clean_chinese(value: str) -> str:
    return re.sub(r"\s+", " ", value or "").strip()


def category_for(word: str, synonyms: list[str], chinese: str) -> str:
    haystack = " ".join([word, *synonyms, chinese]).lower()
    for category, needles in CATEGORY_RULES:
        if any(needle in haystack for needle in needles):
            return category
    return "学术阅读"


def make_example(word: str, synonyms: list[str], scenario: str) -> str:
    synonym = synonyms[0] if synonyms else word
    if scenario == "Writing":
        return f"In IELTS Writing, '{word}' can be replaced by '{synonym}' to avoid repetition."
    if scenario == "Listening":
        return f"In IELTS Listening, the recording may say '{synonym}' while the question uses '{word}'."
    if scenario == "Speaking":
        return f"In IELTS Speaking, you can use '{synonym}' as a natural alternative to '{word}'."
    return f"In IELTS Reading, '{word}' is often paraphrased as '{synonym}' in the passage."


def main() -> None:
    wb = openpyxl.load_workbook(SOURCE, read_only=True, data_only=True)
    ws = wb["Sheet1"]
    entries = []

    for row in ws.iter_rows(values_only=True):
        index, word, chinese, synonyms_text = row[:4]
        if not isinstance(index, (int, float)) or not word or not synonyms_text:
            continue

        synonyms = []
        seen = set()
        for part in str(synonyms_text).split(";"):
            cleaned = clean_synonym(part)
            if not cleaned:
                continue
            key = cleaned.lower()
            if key in seen:
                continue
            seen.add(key)
            synonyms.append(cleaned)

        if not synonyms:
            continue

        word_text = str(word).strip()
        chinese_text = clean_chinese(str(chinese or ""))
        category = category_for(word_text, synonyms, chinese_text)
        scenario = SCENARIO_BY_CATEGORY[category]
        entry_id = f"ielts-{len(entries) + 1:03d}"

        entries.append(
            {
                "id": entry_id,
                "word": word_text,
                "synonyms": synonyms,
                "chinese": chinese_text,
                "category": category,
                "scenario": scenario,
                "example": make_example(word_text, synonyms, scenario),
                "explanation": f"{word_text} ≈ {' / '.join(synonyms[:4])}",
            }
        )

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    payload = json.dumps(entries, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        "export type Scenario = \"Reading\" | \"Listening\" | \"Writing\" | \"Speaking\";\n\n"
        "export interface VocabularyEntry {\n"
        "  id: string;\n"
        "  word: string;\n"
        "  synonyms: string[];\n"
        "  chinese: string;\n"
        "  category: string;\n"
        "  scenario: Scenario;\n"
        "  example: string;\n"
        "  explanation?: string;\n"
        "}\n\n"
        f"export const vocabulary: VocabularyEntry[] = {payload};\n\n"
        "export const categories = Array.from(new Set(vocabulary.map((item) => item.category))).sort();\n"
        "export const scenarios: Scenario[] = [\"Reading\", \"Listening\", \"Writing\", \"Speaking\"];\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(entries)} entries to {OUTPUT}")


if __name__ == "__main__":
    main()
