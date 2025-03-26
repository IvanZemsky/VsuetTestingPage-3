import { testsService } from "@/entities/test"
import { useQuery } from "@/shared/lib"
import { useRef, useState, FormEvent, ChangeEvent } from "react"
import { useTestsFiltersContext } from "../model/filters-context/context"

export function useFiltersForm() {
   const { setFilters } = useTestsFiltersContext()
   const searchRef = useRef<HTMLInputElement>(null)
   const [entranceTests, setEntranceTests] = useState<string[]>([])
   const [qualification, setQualification] = useState<string>()
   const [department, setDepartment] = useState<string>()
   const [direction, setDirection] = useState<string>()

   const departmentsQuery = useQuery({
      queryFn: () => testsService.fetchDepartments(),
   })

   const directionsQuery = useQuery({
      queryFn: () => testsService.fetchDirections(),
   })

   const handleQualificationChange = (event: ChangeEvent<HTMLInputElement>) => {
      setQualification(event.target.value)
   }

   const handleDirectionChange = (event: ChangeEvent<HTMLInputElement>) => {
      setDirection(event.target.value)
   }

   const handleDepartmentChange = (event: ChangeEvent<HTMLInputElement>) => {
      setDepartment(event.target.value)
   }
   const reset = () => {
      setEntranceTests([])
      setQualification(undefined)
      setDepartment(undefined)
      setDirection(undefined)
      console.log("search", searchRef?.current?.value)
      console.log("entranceTests", entranceTests)
      console.log("qualification", qualification)
      console.log("department", department)
      console.log("direction", direction)
   }

   const handleSubmit = (event: FormEvent) => {
      event.preventDefault()
      const filters = {
         search: searchRef?.current?.value || "",
         entranceTests: entranceTests || "",
         qualification: qualification || "",
         department: department || "",
         direction: direction || "",
      }
      setFilters((prev) => ({
         ...prev,
         ...filters,
      }))
   }

   return {
      searchRef,
      entranceTests: {
         value: entranceTests,
         set: setEntranceTests,
      },
      qualification: {
         value: qualification,
         set: setQualification,
         handler: handleQualificationChange,
      },
      department: {
         query: departmentsQuery,
         value: department,
         set: setDepartment,
         handler: handleDepartmentChange,
      },
      direction: {
         query: directionsQuery,
         value: direction,
         set: setDirection,
         handler: handleDirectionChange,
      },
      handleSubmit,
      reset,
   }
}
