import { TestId, testsService } from "@/entities/test"
import { useQuery } from "@tanstack/react-query"

export function useIncrementTestPasses(testId: TestId, enabled: boolean = false) {
   const updatePassesResult = useQuery({
      queryFn: () => testsService.updateTestPasses(testId),
      queryKey: [testId],
      enabled,
   })

   return updatePassesResult
}
