import { Answer, AnswerId, TestId, useTestContext } from "@/entities/test"
import styles from "./styles.module.css"
import NextQuestionBtn from "../next-question-btn"
import { AnswerBtn } from "../answer-btn"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { useNavigate } from "react-router"
import { useIncrementTestPasses } from "../../lib/use-increment-test-passes"
import { saveScoreToLS } from "../../lib/save-score-to-ls"

type Props = {
   testId: TestId
   isEndQuestion: boolean
   answers: Answer[]
   setScene: Dispatch<SetStateAction<number>>
}

export const SelectAnswer = ({ testId, answers, setScene, isEndQuestion }: Props) => {
   const navigate = useNavigate()
   const [selectedAnswerId, setSelectedAnswerId] = useState<AnswerId | null>(null)
   const { increaseScore, score, maxScore } = useTestContext()
   const incrementPasses = useIncrementTestPasses(testId, isEndQuestion)

   const handleAnswerChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSelectedAnswerId(event.target.value)
   }

   const handleNextQuestionClick = () => {
      if (selectedAnswerId) {
         const answerScore = answers.find(
            (answer) => answer.id === selectedAnswerId,
         )!.score

         increaseScore(answerScore)

         if (isEndQuestion) {
            saveScoreToLS({ testId, score: score.current, maxScore: maxScore.current })

            window.scrollTo({ top: 0 })
            navigate("result")
            return
         }

         setScene((prevScene) => prevScene + 1)
         setSelectedAnswerId(null)
         window.scrollTo({ top: 0 })
      }
   }

   return (
      <form className={styles.controls}>
         <div className={styles.answersList}>
            {answers.map((answer) => (
               <AnswerBtn
                  key={answer.id}
                  answer={answer}
                  id={answer.id}
                  value={answer.id}
                  onChange={handleAnswerChange}
               />
            ))}
         </div>
         <NextQuestionBtn
            onClick={handleNextQuestionClick}
            disabled={!selectedAnswerId || (isEndQuestion && incrementPasses.isLoading)}
         />
      </form>
   )
}
