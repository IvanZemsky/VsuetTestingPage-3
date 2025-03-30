import { testsService, SpecializationTag, Question } from "@/entities/test"
import { Loading, TextInput, Textarea } from "@/shared/ui"
import { useQuery } from "@tanstack/react-query"
import { useRef, useMemo, useEffect } from "react"
import { useParams } from "react-router"
import { QuestionsInput } from "./questions-input"
import { TagsInput } from "./tags-input"
import styles from "./styles.module.css"
import { useEditTestForm } from "../lib/use-edit-test-form"

export const EditTest = () => {
   const { testId } = useParams<{ testId: string }>()

   const {
      fetchTestQuery,
      fetchQuestionsQuery,
      tagsRef,
      questionsRef,
      initialTags,
      initialQuestions,
      handleTagsChange,
      handleQuestionsChange,
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
      <form className={styles.content}>
         <h1>Редактирование теста "{testData.name}"</h1>
         <TextInput placeholder="Название теста" defaultValue={testData.name} />
         <Textarea placeholder="Описание теста" defaultValue={testData.description} />
         <TextInput placeholder="Ссылка на картинку" defaultValue={testData.img} />
         <TextInput
            placeholder="Код специализации"
            defaultValue={testData.specializationCode}
         />
         {testData && <TagsInput initialTags={initialTags} onChange={handleTagsChange} />}
         {fetchQuestionsQuery.data && (
            <QuestionsInput
               initialQuestions={initialQuestions}
               onChange={handleQuestionsChange}
            />
         )}
      </form>
   )
}
