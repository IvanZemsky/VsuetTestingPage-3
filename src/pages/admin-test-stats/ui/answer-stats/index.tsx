import { Answer } from "@/entities/test"
import styles from "./styles.module.css"
import { ProgressLine } from "@/shared/ui"

type Props = {
   data: Answer
   totalPasses: number
}
export const AnswerStats = ({ data, totalPasses }: Props) => {
   return (
      <div className={styles.answer}>
         <p key={data.id}>{data.text}</p>
         <ProgressLine actual={data.count} total={totalPasses} />
      </div>
   )
}
