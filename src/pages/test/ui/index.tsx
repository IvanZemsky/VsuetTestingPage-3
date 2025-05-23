import { testsService } from "@/entities/test"
import { Question } from "@/features/test/"
import styles from "./styles.module.css"
import { useParams } from "react-router"
import { useQuery } from "@tanstack/react-query"
import { Loading } from "@/shared/ui"

const Test = () => {
   const { testId } = useParams<{ testId: string }>()

   const { data, isLoading, isError } = useQuery({
      queryFn: () => testsService.fetchQuestionByTestId(testId!),
      queryKey: ["questions", testId],
      enabled: !!testId,
   })

   if (isLoading) {
      return <Loading />
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
