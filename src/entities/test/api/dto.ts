import { Answer } from "../model/types"

export type GetSpecializationTagDto = {
   _id: string
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
