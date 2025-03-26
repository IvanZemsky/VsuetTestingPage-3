import { ComponentProps, RefObject } from "react"
import styles from "./styles.module.css"
import clsx from "clsx"

type Props = { ref?: RefObject<HTMLInputElement | null> } & ComponentProps<"input">

export const TextInput = (props: Props) => {
   const { ref, className, ...attributes } = props

   return <input ref={ref} className={clsx(styles.input, className)} {...attributes} />
}
