import { Button, Loading, } from "@/shared/ui"
import { useParams } from "react-router"
import styles from "./styles.module.css"
import { useEditTestForm } from "../lib/use-edit-test-form"
import { QuestionsInput, TagsInput, TestFormFields } from "@/features/test"

export const EditTest = () => {
   const { testId } = useParams<{ testId: string }>()

   const {
      fetchTestQuery,
      fetchQuestionsQuery,
      initialTags,
      initialQuestions,
      handleTagsChange,
      handleQuestionsChange,
      handleSubmit,
   } = useEditTestForm(testId)

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
      <form className={styles.content} onSubmit={handleSubmit}>
         <h1>Редактирование теста "{testData.name}"</h1>
         <TestFormFields testData={testData} />
         {testData && <TagsInput initialTags={initialTags} onChange={handleTagsChange} />}
         {fetchQuestionsQuery.data && (
            <QuestionsInput
               initialQuestions={initialQuestions}
               onChange={handleQuestionsChange}
            />
         )}
         <Button type="submit" className={styles.submitBtn}>
            Сохранить
         </Button>
      </form>
   )
}
