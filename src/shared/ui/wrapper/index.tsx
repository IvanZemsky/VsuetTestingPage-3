import { ComponentProps } from "react"
import styles from "./styles.module.css"
import clsx from "clsx"

export const Wrapper = ({
   children,
   className,
   ...attributes
}: ComponentProps<"div">) => {
   return (
      <div className={clsx(styles.wrapper, className)} {...attributes}>
         {children}
      </div>
   )
}
