import { Answer, DepartmentId, Qualification, Subject } from "../model/types"

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
   entranceTests: Subject[]
   specializationCode: string
   tags: GetSpecializationTagDto[]
   department: DepartmentId
   qualification: Qualification
   passes: number
}

export type GetDepartmentDto = {
   _id: string
   name: string
   abbreviation: string
}

export type GetDirectionDto = {
   _id: string
   name: string
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
