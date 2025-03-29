import { Button, Loading, Textarea, TextInput } from "@/shared/ui"
import styles from "./styles.module.css"
import { useQuery } from "@tanstack/react-query"
import { SpecializationTag, testsService } from "@/entities/test"
import { useParams } from "react-router"
import { useEffect, useState } from "react"

export const EditTest = () => {
   const { testId } = useParams<{ testId: string }>()

   const { data, isPending, isError } = useQuery({
      queryFn: () => testsService.fetchTestById(testId!),
      queryKey: [testId],
      enabled: !!testId,
   })

   const [tags, setTags] = useState<SpecializationTag[]>([])

   useEffect(() => {
      if (data) {
         setTags(data.tags || [])
      }
   }, [data])

   if (!testId) {
      return <p>Произошла ошибка: нет id теста</p>
   }

   if (isError) {
      return <p>Произошла ошибка</p>
   }

   if (!data && !isPending) {
      return <p>Тест не найден</p>
   }

   if (isPending) {
      return <Loading />
   }

   const handleAddTagClick = () => {
      const id = Math.max(...tags.map((tag) => tag.id)) + 1
      console.log(id)
      setTags((prev) => [...prev, { id, name: "", symbol: "" }])
      console.log(tags)
   }

   return (
      <div className={styles.content}>
         <h1>Редактирование теста "{data.name}"</h1>
         <TextInput placeholder="Название теста" defaultValue={data.name} />
         <Textarea placeholder="Описание теста" defaultValue={data.description} />
         <TextInput placeholder="Ссылка на картинку" defaultValue={data.img} />
         <TextInput
            placeholder="Код специализации"
            defaultValue={data.specializationCode}
         />
         <Button onClick={handleAddTagClick}>Добавить тег</Button>
         <div className={styles.tags}>
            {tags.map((tag) => (
               <div className={styles.tag} key={tag.id}>
                  <TextInput defaultValue={tag.symbol} max={1} maxLength={1} />
                  <TextInput defaultValue={tag.name} placeholder="Название тега"/>
               </div>
            ))}
         </div>
      </div>
   )
}
