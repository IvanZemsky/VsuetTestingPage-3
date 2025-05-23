import {
   testsService,
   SpecializationTag,
   Question,
   TestId,
   UpdateTestDto,
} from "@/entities/test"
import { UpdateQuestionDto } from "@/entities/test"
import { queryClient } from "@/shared/model"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRef, useMemo, useEffect, FormEvent } from "react"
import { useNavigate } from "react-router"

export function useEditTestForm(testId?: string) {
   const navigate = useNavigate()

   const fetchTestQuery = useQuery({
      queryFn: () => testsService.fetchTestById(testId!),
      queryKey: ["tests", testId],
      enabled: !!testId,
      refetchOnWindowFocus: false,
   })

   const testData = fetchTestQuery.data

   const fetchQuestionsQuery = useQuery({
      queryFn: () => testsService.fetchQuestionByTestId(testId!),
      queryKey: ["questions", testId],
      enabled: !!testId,
      refetchOnWindowFocus: false,
   })

   const updateTestMutation = useMutation({
      mutationFn: async (payload: { testId: TestId; dto: UpdateTestDto }) => {
         const { testId, dto } = payload
         return testsService.updateTest(testId, dto)
      },
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["tests"] })
         queryClient.invalidateQueries({ queryKey: ["questions"] })
         navigate("/admin")
      }
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

   const handleQuestionsChange = (newQuestions: UpdateQuestionDto[]) => {
      questionsRef.current = newQuestions
   }

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const form = event.target as HTMLFormElement
      const name = (form.elements.namedItem("name") as HTMLInputElement)?.value
      const description = (form.elements.namedItem("description") as HTMLInputElement)
         ?.value
      const specializationCode = (
         form.elements.namedItem("specialization-code") as HTMLInputElement
      )?.value
      const img = (form.elements.namedItem("img") as HTMLInputElement)?.value

      if (testId) {
         const dto: UpdateTestDto = {
            id: testId,
            name,
            description,
            specializationCode,
            img,
            tags: tagsRef.current,
            questions: questionsRef.current,
         }

         updateTestMutation.mutate({
            testId: testId!,
            dto,
         })
      }
   }

   return {
      initialQuestions,
      initialTags,
      handleTagsChange,
      handleQuestionsChange,
      fetchTestQuery,
      fetchQuestionsQuery,
      handleSubmit,
   }
}
