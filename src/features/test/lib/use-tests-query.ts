import { testsService } from "@/entities/test"
import { useQuery } from "@tanstack/react-query"

export function useTestsQuery(search: string) {
   return useQuery({
      queryFn: () => testsService.fetchTests({ search, page: 0, limit: 0 }),
      queryKey: [search],
   })
}
