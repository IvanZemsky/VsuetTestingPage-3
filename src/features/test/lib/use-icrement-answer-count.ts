import { testsService } from "@/entities/test"
import { useMutation } from "@tanstack/react-query"

export function useIncrementAnswerCount() {
   const updatePassesResult = useMutation({
      mutationFn: testsService.updateQuestionAnswerCount
   })

   return updatePassesResult
}
