import { API, API_ENDPOINTS } from "@/shared/api"
import { testAdapters } from "./adapters"
import {
   CreateTestDto,
   GetQuestionDto,
   GetTestDto,
   UpdateTestDto,
   UpdateTestPassesDto,
} from "./dto"
import { Question, Test, TestId, TestsFilters, UpdateTestPasses } from "../model/types"
import { setPath } from "@/shared/lib"

const { Tests, Questions, Passes } = API_ENDPOINTS

export const testsService = {
   async fetchTests(filters: TestsFilters): Promise<Test[]> {
      const response = await API.get<GetTestDto[]>(Tests, {
         params: filters,
      })
      const tests = response.data.map(testAdapters.main)
      return tests
   },

   async fetchTestById(id: TestId): Promise<Test> {
      const response = await API.get<GetTestDto>(setPath(Tests, id))
      const test = testAdapters.main(response.data)
      return test
   },

   async fetchQuestionByTestId(testId: TestId): Promise<Question[]> {
      const response = await API.get<GetQuestionDto[]>(setPath(Tests, testId, Questions))
      const question = response.data.map(testAdapters.main)
      return question
   },

   async updateTestPasses(testId: TestId): Promise<UpdateTestPasses> {
      const response = await API.patch<UpdateTestPassesDto>(
         setPath(Tests, testId, Passes),
      )
      return response.data
   },

   async updateTest(testId: TestId, dto: UpdateTestDto) {
      const resposnse = await API.put(setPath(Tests, testId), dto)
      return resposnse.data
   },

   async createTest(dto: CreateTestDto) {
      const resposnse = await API.post(Tests, dto)
      return resposnse.data
   },

   async deleteTest(testId: TestId) {
      const resposnse = await API.delete(setPath(Tests, testId))
      return resposnse.data
   },
}
