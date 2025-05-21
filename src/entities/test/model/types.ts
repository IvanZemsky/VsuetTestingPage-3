export type AnswerId = string
export type QuestionId = string
export type TestId = string

export type Test = {
   id: TestId
   name: string
   description: string
   img: string
   specializationCode: string
   tags: SpecializationTag[]
   passes: number
}

export type SpecializationTag = {
   id: number
   name: string
   symbol: string
}

export type Question = {
   id: QuestionId
   testId: TestId
   title: string
   answers: Answer[]
}

export type Answer = {
   id: AnswerId
   text: string
   score: number
   count: number
}

export type TestsFilters = {
   search: string
   limit: number
   page: number
}

export type MaxPercentResult = 35 | 75 | 100

export type UpdateTestPasses = {
   testId: string
   passes: number
}
