import { testsService, SpecializationTag, Question } from "@/entities/test"
import { useQuery } from "@tanstack/react-query"
import { useRef, useMemo, useEffect } from "react"

export function useEditTestForm(testId?: string) {
   const fetchTestQuery = useQuery({
      queryFn: () => testsService.fetchTestById(testId!),
      queryKey: [testId],
      enabled: !!testId,
   })

   const testData = fetchTestQuery.data

   const fetchQuestionsQuery = useQuery({
      queryFn: () => testsService.fetchQuestionByTestId(testId!),
      queryKey: ["questions", testId],
      enabled: !!testId,
   })

   const tagsRef = useRef<SpecializationTag[]>([])
   const questionsRef = useRef<Question[]>([])

   const initialTags = useMemo(() => testData?.tags || [], [testData])
   const initialQuestions = useMemo(
      () => fetchQuestionsQuery.data || [],
      [fetchQuestionsQuery.data],
   )

   useEffect(() => {
      tagsRef.current = initialTags
   }, [initialTags])

   useEffect(() => {
      questionsRef.current = initialQuestions
   }, [initialQuestions])

   const handleTagsChange = (newTags: SpecializationTag[]) => {
      tagsRef.current = newTags
   }

   const handleQuestionsChange = (newQuestions: Question[]) => {
      questionsRef.current = newQuestions
   }

   return {
      initialQuestions,
      initialTags,
      tagsRef,
      questionsRef,
      handleTagsChange,
      handleQuestionsChange,
      fetchTestQuery,
      fetchQuestionsQuery,
   }
}
