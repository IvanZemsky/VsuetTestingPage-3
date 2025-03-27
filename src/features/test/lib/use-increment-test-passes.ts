import { testsService } from "@/entities/test"
import { useMutation } from "@tanstack/react-query"

export function useIncrementTestPasses() {
   const updatePassesResult = useMutation({
      mutationFn: testsService.updateTestPasses
   })

   return updatePassesResult
}
