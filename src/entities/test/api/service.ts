import { API, API_ENDPOINTS } from "@/shared/api"
import { ApiQueryOptions } from "@/shared/api/types"
import { testAdapters } from "./adapters"
import {
   GetDepartmentDto,
   GetDirectionDto,
   GetQuestionDto,
   GetTestDto,
   UpdateTestPassesDto,
} from "./dto"
import {
   Department,
   Direction,
   Question,
   Test,
   TestId,
   TestsFilters,
   UpdateTestPasses,
} from "../model/types"
import { setPath } from "@/shared/lib"

const { Tests, Questions, Departments, Directions, Passes } = API_ENDPOINTS

export const testsService = {
   async fetchTests(
      filters: TestsFilters,
      options: ApiQueryOptions = {},
   ): Promise<Test[]> {
      const { entranceTests, ...restFilters } = filters

      const queryOptions: ApiQueryOptions = {
         ...options,
         query: {
            ...restFilters,
            entrance_tests: entranceTests.join(","),
         },
      }

      const response = await API.get<GetTestDto[]>(Tests, queryOptions)
      const tests = response.map(testAdapters.test)
      return tests
   },

   async fetchTestById(id: TestId, options: ApiQueryOptions = {}): Promise<Test> {
      const response = await API.get<GetTestDto>(setPath(Tests, id), options)
      const test = testAdapters.test(response)
      return test
   },

   async fetchQuestionByTestId(
      testId: TestId,
      options: ApiQueryOptions = {},
   ): Promise<Question[]> {
      const response = await API.get<GetQuestionDto[]>(
         setPath(Tests, testId, Questions),
         options,
      )
      const question = response.map(testAdapters.main)
      return question
   },

   async fetchDepartments(options: ApiQueryOptions = {}): Promise<Department[]> {
      const response = await API.get<GetDepartmentDto[]>(Departments, options)
      const departments = response.map(testAdapters.main)
      return departments
   },

   async fetchDirections(options: ApiQueryOptions = {}): Promise<Direction[]> {
      const response = await API.get<GetDirectionDto[]>(Directions, options)
      const directions = response.map(testAdapters.main)
      return directions
   },

   async updateTestPasses(
      testId: TestId,
      options: ApiQueryOptions = {},
   ): Promise<UpdateTestPasses> {
      const response = await API.patch<UpdateTestPassesDto>(
         setPath(Tests, testId, Passes),
         options,
      )
      return response
   },
}
