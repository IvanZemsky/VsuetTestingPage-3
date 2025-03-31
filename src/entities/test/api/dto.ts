import { Answer, Question, Test } from "../model/types"

export type GetSpecializationTagDto = {
   id: number
   name: string
   symbol: string
}

export type GetTestDto = {
   _id: string
   name: string
   description: string
   img: string
   maxResult: number
   specializationCode: string
   tags: GetSpecializationTagDto[]
   passes: number
}

export type GetQuestionDto = {
   _id: string
   title: string
   answers: Answer[]
}

export type UpdateTestPassesDto = {
   testId: string
   passes: number
}

export type UpdateQuestionDto = Question & {
   isNew?: boolean
}

export type UpdateTestDto = Omit<Test, "passes"> & {
   questions: UpdateQuestionDto[]
}

export type CreateQuestionDto = Question

export type CreateTestDto = Omit<Test, "id" | "passes"> & {
   questions: CreateQuestionDto[]
}
