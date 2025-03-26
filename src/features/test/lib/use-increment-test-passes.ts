import { TestId, testsService } from "@/entities/test"
import { useQuery } from "@/shared/lib"

export function useIncrementTestPasses(testId: TestId, enabled: boolean = false) {
   const updatePassesResult = useQuery({
      queryFn: () => testsService.updateTestPasses(testId),
      enabled,
   })

   return updatePassesResult
}
