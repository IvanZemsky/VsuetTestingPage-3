import styles from "./styles.module.css"
import { SunIcon } from "../icons/sun"
import { MoonIcon } from "../icons/moon"
import { useContext } from "react"
import { ThemeContext } from "@/shared/model/theme-context"
import clsx from "clsx"

type Props = {
   className?: string
}

export const ThemeBtn = ({ className }: Props) => {
   const { theme, setTheme } = useContext(ThemeContext)

   const themeDisplay = theme === "light" ? "Светлая" : "Тёмная"

   const handleClick = () => {
      setTheme(theme === "light" ? "dark" : "light")
   }

   return (
      <button className={clsx(styles.themeBtn, className)} onClick={handleClick}>
         {theme === "light" ? <MoonIcon /> : <SunIcon />}
         <span>{themeDisplay} тема</span>
      </button>
   )
}
