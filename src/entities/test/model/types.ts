export type AnswerId = string
export type QuestionId = string
export type TestId = string

export type SpecializationTag = {
   id: number
   name: string
   symbol: string
}

export type Answer = {
   id: AnswerId
   text: string
   score: number
}

export type Question = {
   id: QuestionId
   title: string
   answers: Answer[]
}

export type Test = {
   id: TestId
   name: string
   description: string
   img: string
   maxResult: number
   specializationCode: string
   tags: SpecializationTag[]
   passes: number
}

export type TestsFilters = {
   search: string
   limit: number
   page: number
}

export type MaxPercentResult = 35 | 75 | 100

export type UpdateTestPasses = {
   testId: TestId
   passes: number
}
