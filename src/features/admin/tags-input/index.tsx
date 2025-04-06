import { SpecializationTag } from "@/entities/test"
import styles from "./styles.module.css"
import { Button, TextInput } from "@/shared/ui"
import { CrossIcon } from "@/shared/ui/icons"
import { ChangeEvent, useEffect, useState } from "react"

type Props = {
   initialTags: SpecializationTag[]
   onChange: (newTags: SpecializationTag[]) => void
}

export const TagsInput = ({ initialTags, onChange }: Props) => {
   const [tags, setTags] = useState<SpecializationTag[]>(initialTags)

   const MAX_TAGS = 3

   const handleAddTagClick = () => {
      const id = tags.length ? Math.max(...tags.map((tag) => tag.id)) + 1 : 1
      setTags((prev) => [...prev, { id, name: "", symbol: "" }])
   }

   const handleRemoveTagClick = (tagId: number) => () => {
      setTags((prev) => prev.filter((tag) => tag.id !== tagId))
   }

   const handleSymbolChange =
      (tagId: number) => (event: ChangeEvent<HTMLInputElement>) => {
         setTags((prev) =>
            prev.map((tag) =>
               tag.id === tagId ? { ...tag, symbol: event.target.value } : tag,
            ),
         )
      }

   const handleNameChange = (tagId: number) => (event: ChangeEvent<HTMLInputElement>) => {
      setTags((prev) =>
         prev.map((tag) =>
            tag.id === tagId ? { ...tag, name: event.target.value } : tag,
         ),
      )
   }

   useEffect(() => {
      onChange(tags)
   }, [tags])

   console.log(tags)

   return (
      <>
         <h2 className={styles.title}>
            Теги
            <Button onClick={handleAddTagClick} disabled={tags.length >= MAX_TAGS}>
               Добавить
            </Button>
         </h2>
         <div className={styles.tags}>
            {tags.map((tag) => (
               <div className={styles.tag} key={tag.id}>
                  <Button
                     onClick={handleRemoveTagClick(tag.id)}
                     icon={<CrossIcon />}
                     className={styles.removeTagBtn}
                  />
                  <TextInput
                     defaultValue={tag.symbol}
                     max={1}
                     maxLength={1}
                     className={styles.symbolInput}
                     onChange={handleSymbolChange(tag.id)}
                  />
                  <TextInput
                     defaultValue={tag.name}
                     placeholder="Название тега"
                     onChange={handleNameChange(tag.id)}
                  />
               </div>
            ))}
         </div>
      </>
   )
}
