import { ComponentProps, RefObject } from "react"
import styles from "./styles.module.css"
import clsx from "clsx"

type Props = { ref?: RefObject<HTMLTextAreaElement | null> } & ComponentProps<"textarea">

export const Textarea = (props: Props) => {
   const { ref, className, ...attributes } = props

   return <textarea ref={ref} className={clsx(styles.input, className)} {...attributes} />
}
