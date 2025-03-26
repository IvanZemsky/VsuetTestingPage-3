import { ComponentProps, ReactNode } from "react"
import styles from "./styles.module.css"
import clsx from "clsx"

type Props = {
   icon?: ReactNode
   color?: "primary" | "secondary"
} & ComponentProps<"button">

export const Button = ({
   color = "primary",
   icon,
   children,
   className,
   type = "button",
   ...attributes
}: Props) => {
   return (
      <button
         className={clsx(styles.button, className, styles[color])}
         type={type}
         {...attributes}
      >
         {children && <span className={styles.buttonText}>{children}</span>}
         {icon}
      </button>
   )
}
