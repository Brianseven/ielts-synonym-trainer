from __future__ import annotations

import json
import re
from pathlib import Path
from xml.etree import ElementTree as ET
from zipfile import ZipFile


MARKDOWN_SOURCES = [
    Path("/Users/yangxinyu/Documents/Codex/2026-07-01/ptn-ptn-ptn-scnanoatac-seq2-atac/outputs/PTN_Key_Terms_Glossary.md"),
    Path("/Users/yangxinyu/Documents/Codex/2026-07-01/ptn-ptn-ptn-scnanoatac-seq2-atac/outputs/PKU_Abstract_Terms_Additional_Articles.md"),
]
DOCX_SOURCE = Path("/Users/yangxinyu/Documents/Codex/2026-07-01/ptn-ptn-ptn-scnanoatac-seq2-atac/outputs/PTN_PKU_Keyword_Frequency_Field_Glossary.docx")
OUTPUT = Path("/Users/yangxinyu/Documents/雅思/ielts-synonym-trainer/src/data/biologyTerms.ts")
WORD_NS = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}


def section_title(line: str) -> str:
    title = re.sub(r"^##\s+", "", line).strip()
    title = re.sub(r"^[一二三四五六七八九十]+、", "", title)
    title = re.sub(r"^\d+\.\s+", "", title)
    return title


def make_entry(english: str, chinese: str, category: str, note: str, entries: list[dict[str, object]]) -> dict[str, object]:
    return {
        "id": f"bio-{len(entries) + 1:03d}",
        "group": "生物学专业名词",
        "word": english,
        "synonyms": [],
        "chinese": chinese,
        "category": category or "生物学专业名词",
        "scenario": "Biology",
        "example": note,
        "explanation": note,
    }


def add_entry(
    *,
    english: str,
    chinese: str,
    category: str,
    note: str,
    entries: list[dict[str, object]],
    seen: set[str],
) -> bool:
    english = english.strip()
    key = english.casefold()
    if not english or key in seen:
        return False
    seen.add(key)
    entries.append(make_entry(english, chinese.strip(), category.strip(), note.strip(), entries))
    return True


def parse_markdown_sources(entries: list[dict[str, object]], seen: set[str]) -> None:
    for source in MARKDOWN_SOURCES:
        current_section = ""

        for raw_line in source.read_text(encoding="utf-8").splitlines():
            line = raw_line.strip()
            if line.startswith("## "):
                current_section = section_title(line)
                continue
            if not line.startswith("|") or "---" in line or "English term" in line or "中文解释" in line:
                continue

            cells = [cell.strip() for cell in line.strip("|").split("|")]
            if len(cells) < 2:
                continue

            note = cells[2] if len(cells) >= 3 else cells[1]
            add_entry(
                english=cells[0],
                chinese=cells[1],
                category=current_section,
                note=note,
                entries=entries,
                seen=seen,
            )


def table_rows(table: ET.Element) -> list[list[str]]:
    rows = []
    for tr in table.findall("./w:tr", WORD_NS):
        cells = []
        for tc in tr.findall("./w:tc", WORD_NS):
            parts = []
            for paragraph in tc.findall(".//w:p", WORD_NS):
                text = "".join(node.text or "" for node in paragraph.findall(".//w:t", WORD_NS)).strip()
                if text:
                    parts.append(text)
            cells.append("\n".join(parts))
        rows.append(cells)
    return rows


def parse_docx_source(entries: list[dict[str, object]], seen: set[str]) -> int:
    with ZipFile(DOCX_SOURCE) as archive:
        root = ET.fromstring(archive.read("word/document.xml"))

    tables = root.findall(".//w:tbl", WORD_NS)
    added = 0
    for rows in map(table_rows, tables):
        if not rows or "English term" not in rows[0]:
            continue
        header = rows[0]
        if "领域" not in header or "来源题目" not in header:
            continue

        term_index = header.index("English term")
        chinese_index = header.index("中文解释")
        frequency_index = header.index("频次")
        field_index = header.index("领域")
        source_index = header.index("来源题目")

        for row in rows[1:]:
            if len(row) <= max(term_index, chinese_index, frequency_index, field_index, source_index):
                continue
            note = f"频次：{row[frequency_index]}；领域：{row[field_index]}；来源：{row[source_index]}"
            added += add_entry(
                english=row[term_index],
                chinese=row[chinese_index],
                category=row[field_index],
                note=note,
                entries=entries,
                seen=seen,
            )
        break
    return added


def main() -> None:
    entries = []
    seen = set()

    parse_markdown_sources(entries, seen)
    docx_added = parse_docx_source(entries, seen)

    payload = json.dumps(entries, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        "import type { VocabularyEntry } from \"./vocabulary\";\n\n"
        f"export const biologyTerms: VocabularyEntry[] = {payload};\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(entries)} biology terms to {OUTPUT} ({docx_added} added from DOCX)")


if __name__ == "__main__":
    main()
