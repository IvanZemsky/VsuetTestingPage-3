import { TestId, testsService } from "@/entities/test"
import { Loading } from "@/shared/ui"
import { useQuery } from "@tanstack/react-query"
import styles from "./styles.module.css"
import { AnswerStats } from "../answer-stats"

type Props = {
   testId: TestId
}
export const QuestionList = ({ testId }: Props) => {
   const fetchQuestionsQuery = useQuery({
      queryFn: () => testsService.fetchQuestionByTestId(testId!),
      queryKey: ["questions", testId],
      enabled: !!testId,
      refetchOnWindowFocus: false,
   })

   if (fetchQuestionsQuery.isError) {
      return <p>Произошла ошибка</p>
   }

   if (fetchQuestionsQuery.isPending) {
      return <Loading />
   }

   if (!fetchQuestionsQuery.data) {
      return <p>Произошла ошибка: Вопросы не найдены</p>
   }

   return (
      <div className={styles.list}>
         {fetchQuestionsQuery.data.map((question) => (
            <div className={styles.question} key={question.id}>
               <p key={question.id} className={styles.title}>{question.title}</p>
               <div className={styles.answers}>
                  {question.answers.map((answer) => (
                     <AnswerStats
                        data={answer}
                        totalPasses={question.answers.reduce(
                           (acc, answer) => acc + answer.count,
                           0,
                        )}
                        key={answer.id}
                     />
                  ))}
               </div>
            </div>
         ))}
      </div>
   )
}
