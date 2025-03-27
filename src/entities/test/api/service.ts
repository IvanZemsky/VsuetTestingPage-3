import { API, API_ENDPOINTS } from "@/shared/api"
import { ApiQueryOptions } from "@/shared/api/types"
import { testAdapters } from "./adapters"
import { GetQuestionDto, GetTestDto, UpdateTestPassesDto } from "./dto"
import { Question, Test, TestId, TestsFilters, UpdateTestPasses } from "../model/types"
import { setPath } from "@/shared/lib"

const { Tests, Questions, Passes } = API_ENDPOINTS

export const testsService = {
   async fetchTests(
      filters: TestsFilters,
      options: ApiQueryOptions = {},
   ): Promise<Test[]> {
      const queryOptions: ApiQueryOptions = {
         ...options,
         query: filters,
      }

      const response = await API.get<GetTestDto[]>(Tests, queryOptions)
      const tests = response.map(testAdapters.test)
      return tests
   },

   async fetchTestById(id: TestId): Promise<Test> {
      const response = await API.get<GetTestDto>(setPath(Tests, id))
      const test = testAdapters.test(response)
      return test
   },

   async fetchQuestionByTestId(testId: TestId): Promise<Question[]> {
      const response = await API.get<GetQuestionDto[]>(setPath(Tests, testId, Questions))
      const question = response.map(testAdapters.main)
      return question
   },

   async updateTestPasses(testId: TestId): Promise<UpdateTestPasses> {
      const response = await API.patch<UpdateTestPassesDto>(
         setPath(Tests, testId, Passes),
      )
      return response
   },
}
