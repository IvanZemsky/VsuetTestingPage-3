import { getMaxResultScore } from "../get-max-result-score"
import { mockQuestions } from "./mock"

import {expect, test} from "vitest"

test("Получение максимального числа очков теста", () => {
   expect(getMaxResultScore(mockQuestions)).toBe(50)
})
