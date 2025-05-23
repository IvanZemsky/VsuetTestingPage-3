import { testsService } from "@/entities/test"
import { useQuery } from "@tanstack/react-query"
import styles from "./styles.module.css"
import { useParams } from "react-router"
import { Loading } from "@/shared/ui"
import { QuestionList } from "./question-list"

export const AdminTestStats = () => {
   const { testId } = useParams<{ testId: string }>()

   const fetchTestQuery = useQuery({
      queryFn: () => testsService.fetchTestById(testId!),
      queryKey: [testId],
      enabled: !!testId,
      refetchOnWindowFocus: false,
   })

   const testData = fetchTestQuery.data

   if (!testId) {
      return <p>Произошла ошибка: нет id теста</p>
   }

   if (fetchTestQuery.isError) {
      return <p>Произошла ошибка</p>
   }

   if (!testData && !fetchTestQuery.isPending) {
      return <p>Тест не найден</p>
   }

   if (fetchTestQuery.isPending) {
      return <Loading />
   }

   if (!testData) {
      return <p>Тест не найден</p>
   }

   return (
      <div className={styles.content}>
         <h1 className={styles.title}>Статистика теста "{testData.name}"</h1>
         <p className={styles.passes}>Общее число прохождений: {testData.passes}</p>
         <div className={styles.questionList}>
            <QuestionList testId={testId} />
         </div>
      </div>
   )
}
