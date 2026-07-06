import { biologyTerms } from "./biologyTerms";
import { ieltsVocabulary, type Scenario, type VocabularyEntry, type VocabularyGroup } from "./vocabulary";

export type { Scenario, VocabularyEntry, VocabularyGroup };

export const vocabulary: VocabularyEntry[] = [...ieltsVocabulary, ...biologyTerms];

export const groups: VocabularyGroup[] = ["雅思同义替换", "生物学专业名词"];

export const categories = Array.from(new Set(vocabulary.map((item) => item.category))).sort();

export const scenarios: Scenario[] = ["Reading", "Listening", "Writing", "Speaking", "Biology"];
