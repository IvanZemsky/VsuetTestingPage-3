import { Question as QuestionType, TestId, useTestContext } from "@/entities/test"
import { useEffect, useState } from "react"
import styles from "./styles.module.css"
import { SelectAnswer } from "../select-answer"
import { ProgressLine } from "@/shared/ui"
import { getMaxResultScore } from "../../lib/get-max-result-score"

type Props = {
   testId: TestId
   questions: QuestionType[]
}

export const Question = ({ testId, questions }: Props) => {
   const [questionId, setQuestionId] = useState(0)
   const { score, maxScore } = useTestContext()

   const currentQuestion = questions[questionId]
   const isEndQuestion = questionId === questions.length - 1

   useEffect(() => {
      maxScore.current = getMaxResultScore(questions)
      score.current = 0
   }, [])

   return (
      <section className={styles.question}>
         <h2 className={styles.questionTitle}>{currentQuestion.title}</h2>

         <SelectAnswer
            testId={testId}
            isEndQuestion={isEndQuestion}
            answers={currentQuestion.answers}
            setScene={setQuestionId}
         />
         <ProgressLine
            questionNumber={questions.indexOf(currentQuestion) + 1}
            questionAmount={questions.length}
         />
      </section>
   )
}
