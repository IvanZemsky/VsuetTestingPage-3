import { testsService } from "@/entities/test"
import { TestsList } from "@/features/test"
import { Button, TextInput } from "@/shared/ui"
import { SearchIcon } from "@/shared/ui/icons"
import styles from "./styles.module.css"
import { useRef, useState } from "react"
import { useQuery } from "@tanstack/react-query"

export const HomeTestsList = () => {
   const [search, setSearch] = useState("")
   const searchRef = useRef<HTMLInputElement>(null)

   const { data, isError, isLoading } = useQuery({
      queryFn: () => testsService.fetchTests({ search, page: 0, limit: 0 }),
      queryKey: [search],
   })

   const handleSearchBtnClick = () => {
      if (searchRef.current) {
         setSearch(searchRef.current.value)
      }
   }

   if (isLoading) {
      return <p>Загрузка...</p>
   }

   if (isError || !data) {
      return <p>Произошла ошибка</p>
   }

   return (
      <div className={styles.testsWrap}>
         <div className={styles.search}>
            <TextInput placeholder="Поиск" ref={searchRef} />
            <Button icon={<SearchIcon />} onClick={handleSearchBtnClick} />
         </div>
         <TestsList tests={data} />
      </div>
   )
}
