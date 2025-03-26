import { TEST_RESULTS } from "@/entities/test"

export function getResultText(percentResult: number) {
   for (const [key, value] of Object.entries(TEST_RESULTS)) {
      if (percentResult <= +key) {
         return value
      }
   }
}
