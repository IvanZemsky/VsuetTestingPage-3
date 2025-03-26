import clsx from "clsx"
import styles from "./styles.module.css"

type Props = {
   setOpenedStyle: () => void
   className?: string
}

export const BurgerBtn = ({ setOpenedStyle, className }: Props) => {
   return (
      <button className={clsx(styles.burger, className)} onClick={setOpenedStyle}>
         <span></span>
         <span></span>
         <span></span>
      </button>
   )
}
