import styles from "./styles.module.css"
import { Answer } from "@/entities/test"
import { ChangeEventHandler } from "react"

type Props = {
   answer: Answer
   id: string
   value: string
   onChange: ChangeEventHandler<HTMLInputElement>
}

export const AnswerBtn = ({ answer, id, value, onChange }: Props) => {
   return (
      <div className={styles.answer}>
         <input
            className={styles.answerRadio}
            type="radio"
            name="answer"
            id={id}
            value={value}
            onChange={onChange}
         />
         <label className={styles.answerText} htmlFor={String(id)}>
            {answer.text}
         </label>
      </div>
   )
}
