import { TestsFilters } from "@/entities/test"
import { createContext, Dispatch, SetStateAction, useContext } from "react"

export const TestsFiltersContext = createContext<{
   filters: TestsFilters
   setFilters: Dispatch<SetStateAction<TestsFilters>>
}>({
   filters: {
      search: "",
      limit: 0,
      page: 0,
      department: "",
      entranceTests: [],
      qualification: "",
      direction: "",
   },
   setFilters: () => {},
})

export function useTestsFiltersContext() {
   const context = useContext(TestsFiltersContext)

   if (!context) {
      throw new Error("useFiltersContext must be used inside FilterContextProvider")
   }

   return context
}
