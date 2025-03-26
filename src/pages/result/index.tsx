import { TestId, testsService } from "@/entities/test"
import { ResultCounter } from "@/features/test"
import { getResultText } from "@/features/test/lib/get-result-text"
import styles from "./styles.module.css"
import { useParams } from "react-router"
import { useQuery } from "@/shared/lib"

const Result = () => {
   const { testId } = useParams<{ testId: TestId }>()

   const fetchTestQuery = useQuery({
      queryFn: () => testsService.fetchTestById(testId!),
      enabled: !!testId,
   })

   const localStorageScore: Record<TestId, { score: number; maxScore: number }> =
      JSON.parse(localStorage.getItem("results") || "{}")

   if (!testId || fetchTestQuery.isError) {
      return <p>Произошла ошибка</p>
   }

   if (fetchTestQuery.isLoading || !fetchTestQuery.data) {
      return <p>Загрузка...</p>
   }

   const result = localStorageScore[testId]

   if (!result) {
      return <p>Вы еще не прошли этот тест</p>
   }

   const test = fetchTestQuery.data

   const percentResult = Math.round((result.score * 100) / result.maxScore)
   const resultTest = getResultText(percentResult)

   return (
      <div className={styles.content}>
         <div className={styles.resultInfo}>
            <ResultCounter percentResult={percentResult} />
            <p className={styles.resultText}>🥳 {resultTest}</p>
            <div className={styles.links}>
               <a
                  className={styles.link}
                  target="_blank"
                  href={`https://vsuet.ru/abitur/specialties/${test?.specializationCode
                     .split(".")
                     .join("-")}`}
               >
                  🎓 Узнать больше
               </a>
               <a
                  className={styles.link}
                  href="https://t.me/vsuet_official"
                  target="_blank"
               >
                  ✉️ Наш Telegram
               </a>
            </div>
            <p className={styles.title}>Результат теста: {test.name}</p>
         </div>
      </div>
   )
}

export default Result
