import { SpecializationTag, Question, CreateTestDto, testsService } from "@/entities/test"
import { UpdateQuestionDto } from "@/entities/test"
import { queryClient } from "@/shared/model"
import { useMutation } from "@tanstack/react-query"
import { useRef, FormEvent } from "react"
import { useNavigate } from "react-router"

export function useCreateTestForm() {
   const navigate = useNavigate()

   const tagsRef = useRef<SpecializationTag[]>([])
   const questionsRef = useRef<Question[]>([])

   const createTestMutation = useMutation({
      mutationFn: testsService.createTest,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["tests"] })
         queryClient.invalidateQueries({ queryKey: ["questions"] })
         navigate("/admin")
      },
   })

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

      const dto: CreateTestDto = {
         name,
         description,
         specializationCode,
         img,
         tags: tagsRef.current,
         questions: questionsRef.current,
      }

      createTestMutation.mutate(dto)
   }

   return {
      initialQuestions: questionsRef.current,
      initialTags: tagsRef.current,
      handleTagsChange,
      handleQuestionsChange,
      handleSubmit,
   }
}
