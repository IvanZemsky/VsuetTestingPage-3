import { PropsWithChildren, useState } from "react"
import { TestsFilters } from "@/entities/test"
import { TestsFiltersContext } from "./context"

export const TestsFiltersContextProvider = ({ children }: PropsWithChildren) => {
   const [filters, setFilters] = useState<TestsFilters>({
      search: "",
      limit: 0,
      page: 0,
      department: "",
      entranceTests: [],
      qualification: "",
      direction: "",
   })

   return (
      <TestsFiltersContext.Provider value={{ filters, setFilters }}>
         {children}
      </TestsFiltersContext.Provider>
   )
}
