import styles from "./styles.module.css"

type Props = {
   actual: number
   total: number
}

export const ProgressLine = ({ actual, total }: Props) => {
   const percent = (actual / total) * 100

   const width = actual === 0 && total === 0 ? 0 : percent

   return (
      <div className={styles.progressWrap}>
         <label className={styles.progressInfo} htmlFor="test-progress">
            <span>{actual}</span>
            <span>/</span>
            <span>{total} </span>
         </label>
         <div
            className={styles.progressLine}
            style={{
               width: `${width}%`,
            }}
         ></div>
      </div>
   )
}
