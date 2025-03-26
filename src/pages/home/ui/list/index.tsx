import { testsService } from "@/entities/test"
import { TestsList } from "@/features/test"
import { useQuery } from "@/shared/lib"
import { useTestsFiltersContext } from "../../model/filters-context/context"

export const HomeTestsList = () => {
   const { filters } = useTestsFiltersContext()

   const { data, isError, isLoading } = useQuery({
      queryFn: () => testsService.fetchTests(filters),
      dependency: filters,
   })

   if (isLoading) {
      return <p>Загрузка...</p>
   }

   if (isError || !data) {
      return <p>Произошла ошибка</p>
   }

   return <TestsList tests={data} />
}
