import { Button } from "@/shared/ui"
import styles from "./styles.module.css"
import { QuestionsInput, TagsInput, TestFormFields } from "@/features/test"
import { useCreateTestForm } from "../lib/use-create-test-form"

export const CreateTest = () => {
   const {
      initialTags,
      initialQuestions,
      handleTagsChange,
      handleQuestionsChange,
      handleSubmit,
   } = useCreateTestForm()

   return (
      <form className={styles.content} onSubmit={handleSubmit}>
         <h1>Создание нового теста</h1>
         <TestFormFields />

         <TagsInput initialTags={initialTags} onChange={handleTagsChange} />

         <QuestionsInput
            initialQuestions={initialQuestions}
            onChange={handleQuestionsChange}
         />

         <Button type="submit" className={styles.submitBtn}>
            Сохранить
         </Button>
      </form>
   )
}
