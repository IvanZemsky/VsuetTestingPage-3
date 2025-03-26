import { TestId } from "@/entities/test"

export function saveScoreToLS({
   testId,
   score,
   maxScore,
}: {
   testId: TestId
   score: number
   maxScore: number
}) {
   const localStorageScore: Record<TestId, { score: number; maxScore: number }> =
      JSON.parse(localStorage.getItem("results") || "{}")

   localStorageScore[testId] = {
      score,
      maxScore,
   }

   localStorage.setItem("results", JSON.stringify(localStorageScore))
}
