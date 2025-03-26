import { testsService } from "@/entities/test"
import { Question } from "@/features/test/"
import { useQuery } from "@/shared/lib"
import styles from "./styles.module.css"
import { useParams } from "react-router"

const Test = () => {
   const { testId } = useParams<{ testId: string }>()

   const { data, isLoading, isError } = useQuery({
      queryFn: () => testsService.fetchQuestionByTestId(testId!),
      enabled: !!testId,
   })

   if (isLoading) {
      return <p>Загрузка...</p>
   }

   if (!testId || isError || !data) {
      return <p>Произошла ошибка</p>
   }

   return (
      <div className={styles.content}>
         <Question testId={testId} questions={data} />
      </div>
   )
}

export default Test
