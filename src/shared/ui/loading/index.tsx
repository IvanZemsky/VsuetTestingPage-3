import { useEffect, useState } from "react"
import style from "./styles.module.css"

const clocks = ["🕛", "🕐", "🕑", "🕒", "🕓", "🕔", "🕕", "🕖", "🕗", "🕘", "🕙", "🕚"]

export const Loading = () => {
   const [clock, setClock] = useState(clocks[0])

   useEffect(() => {
      let i = 0
      const timout = setInterval(() => {
         setClock(clocks[i])
         if (i === clocks.length - 1) {
            i = 0
         } else {
            i++
         }
      }, 275)

      return () => clearInterval(timout)
   }, [])

   return <div className={style.loading}>{clock}</div>
}
