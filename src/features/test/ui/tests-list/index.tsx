import { Test } from "@/entities/test"
import styles from "./styles.module.css"
import { TestCard } from "../test-card"
import clsx from "clsx"

type Props = {
   tests: Test[]
   className?: string
}
export const TestsList = ({ tests, className }: Props) => {
   if (!tests.length) {
      return <p>Ничего не найдено</p>
   }

   return (
      <div className={clsx(styles.content, className)}>
         {tests.map((test) => (
            <TestCard data={test} key={test.id} />
         ))}
      </div>
   )
}
