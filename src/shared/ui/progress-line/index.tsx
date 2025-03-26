import styles from "./styles.module.css"

type Props = {
   questionNumber: number
   questionAmount: number
}

export const ProgressLine = ({ questionNumber, questionAmount }: Props) => {
   return (
      <div className={styles.progressWrap}>
         <label className={styles.progressInfo} htmlFor="test-progress">
            <span>{questionNumber}</span>
            <span>/</span>
            <span>{questionAmount} </span>
         </label>
         <div
            className={styles.progressLine}
            style={{
               width: `${(questionNumber / questionAmount) * 100}%`,
            }}
         ></div>
      </div>
   )
}
