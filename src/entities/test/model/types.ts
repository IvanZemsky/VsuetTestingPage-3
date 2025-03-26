export type AnswerId = string
export type QuestionId = string
export type TestId = string
export type DepartmentId = string

export type Subject =
   | "Химия"
   | "Физика"
   | "Биология"
   | "Математика"
   | "Обществознание"
   | "Русский язык"
   | "Английский язык"
   | "Информатика"
   | "География"
   | "История"

export type Qualification = "Бакалаврит" | "Специалитет" | "Магистратура" | "СПО"

export type SpecializationTag = {
   id: string
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

export type Department = {
   id: string
   name: string
   abbreviation: string
}

export type Direction = {
   id: string
   name: string
}

export type Test = {
   id: TestId
   name: string
   description: string
   img: string
   maxResult: number
   entranceTests: Subject[]
   specializationCode: string
   tags: SpecializationTag[]
   department: DepartmentId
   qualification: Qualification
   passes: number
}

export type TestsFilters = {
   search: string
   limit: number
   page: number
   department: string
   entranceTests: string[]
   qualification: string
   direction: string
}

export type MaxPercentResult = 35 | 75 | 100

export type UpdateTestPasses = {
   testId: TestId
   passes: number
}
