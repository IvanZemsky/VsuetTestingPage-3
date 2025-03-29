import { Test } from "@/entities/test"
import styles from "./styles.module.css"
import { TestCard } from "../test-card"
import clsx from "clsx"

type Props = {
   tests: Test[]
   className?: string
   /**
    * Строка шаблона "before/{id}/after"
    */
   link: string
}
export const TestsList = ({ tests, link, className }: Props) => {
   if (!tests.length) {
      return <p>Ничего не найдено</p>
   }

   const getLink = (id: string) => link.replace("{id}", id)

   return (
      <div className={clsx(styles.content, className)}>
         {tests.map((test) => (
            <TestCard data={test} link={getLink(test.id)} key={test.id} />
         ))}
      </div>
   )
}
