from __future__ import annotations

import json
import re
from pathlib import Path


SOURCE = Path("/Users/yangxinyu/Documents/Codex/2026-07-01/ptn-ptn-ptn-scnanoatac-seq2-atac/outputs/PTN_Key_Terms_Glossary.md")
OUTPUT = Path("/Users/yangxinyu/Documents/雅思/ielts-synonym-trainer/src/data/biologyTerms.ts")


def section_title(line: str) -> str:
    title = re.sub(r"^##\s+", "", line).strip()
    title = re.sub(r"^[一二三四五六七八九十]+、", "", title)
    return title


def main() -> None:
    current_section = ""
    entries = []
    seen = set()

    for raw_line in SOURCE.read_text(encoding="utf-8").splitlines():
      line = raw_line.strip()
      if line.startswith("## "):
          current_section = section_title(line)
          continue
      if not line.startswith("|") or "---" in line or "English term" in line:
          continue

      cells = [cell.strip() for cell in line.strip("|").split("|")]
      if len(cells) < 3:
          continue

      english, chinese, note = cells[:3]
      if not english or english in seen:
          continue
      seen.add(english)

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
