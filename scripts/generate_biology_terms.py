from __future__ import annotations

import json
import re
from pathlib import Path


SOURCES = [
    Path("/Users/yangxinyu/Documents/Codex/2026-07-01/ptn-ptn-ptn-scnanoatac-seq2-atac/outputs/PTN_Key_Terms_Glossary.md"),
    Path("/Users/yangxinyu/Documents/Codex/2026-07-01/ptn-ptn-ptn-scnanoatac-seq2-atac/outputs/PKU_Abstract_Terms_Additional_Articles.md"),
]
OUTPUT = Path("/Users/yangxinyu/Documents/雅思/ielts-synonym-trainer/src/data/biologyTerms.ts")


def section_title(line: str) -> str:
    title = re.sub(r"^##\s+", "", line).strip()
    title = re.sub(r"^[一二三四五六七八九十]+、", "", title)
    title = re.sub(r"^\d+\.\s+", "", title)
    return title


def main() -> None:
    entries = []
    seen = set()

    for source in SOURCES:
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

            english = cells[0]
            chinese = cells[1]
            note = cells[2] if len(cells) >= 3 else chinese
            key = english.casefold()
            if not english or key in seen:
                continue
            seen.add(key)

            entries.append(
                {
                    "id": f"bio-{len(entries) + 1:03d}",
                    "group": "生物学专业名词",
                    "word": english,
                    "synonyms": [],
                    "chinese": chinese,
                    "category": current_section or "生物学专业名词",
                    "scenario": "Biology",
                    "example": note,
                    "explanation": note,
                }
            )

    payload = json.dumps(entries, ensure_ascii=False, indent=2)
    OUTPUT.write_text(
        "import type { VocabularyEntry } from \"./vocabulary\";\n\n"
        f"export const biologyTerms: VocabularyEntry[] = {payload};\n",
        encoding="utf-8",
    )
    print(f"Wrote {len(entries)} biology terms to {OUTPUT}")


if __name__ == "__main__":
    main()
