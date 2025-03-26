import { useState, useEffect } from "react"
import styles from "./styles.module.css"

type Props = {
   percentResult: number
}

export const ResultCounter = ({ percentResult }: Props) => {
   const [resultNumber, setResultNumber] = useState(0)

   useEffect(() => {
      const interval = setInterval(() => {
         setResultNumber((prev) => {
            if (prev >= percentResult) {
               clearInterval(interval)
               return prev
            } else {
               return prev + 1
            }
         })
      }, 20)

      return () => clearInterval(interval)
   }, [percentResult, resultNumber])

   return (
      <div className={styles.result}>
         <p className={styles.resultNumber}>
            <span>{resultNumber}</span>%
         </p>
      </div>
   )
}
