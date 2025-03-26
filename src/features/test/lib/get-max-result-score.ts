import { Question } from "@/entities/test"

export function getMaxResultScore(questions: Question[]) {
   const maxScore = questions.reduce((acc, question) => {
      let maxAnswerScore = 0
      question.answers.forEach((answer) => {
         if (answer.score > maxAnswerScore) {
            maxAnswerScore = answer.score
         }
      })

      return acc + maxAnswerScore
   }, 0)

   return maxScore
}
