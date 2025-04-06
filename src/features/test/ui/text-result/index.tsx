import { getResultText } from "../../lib/get-result-text"
import styles from "./styles.module.css"

type Props = {
   percentResult: number
}

export const TextResult = ({ percentResult }: Props) => {
   const text = getResultText(percentResult)

   return <p className={styles.resultText}>🥳 {text}</p>
}
