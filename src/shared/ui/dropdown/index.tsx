import clsx from "clsx"
import { Button } from "../button"
import { ArrowBottomIcon } from "../icons"
import styles from "./styles.module.css"
import { ComponentProps, RefObject } from "react"

type Props = {
   title: string
   open: boolean
   ref: RefObject<HTMLDivElement | null>
   toggleOpen: () => void
} & ComponentProps<"div">

export const Dropdown = ({
   open,
   title,
   toggleOpen,
   ref,
   className,
   children,
}: Props) => {
   return (
      <div
         className={clsx(styles.wrap, className, {
            [styles.opened]: open,
         })}
         ref={ref}
      >
         <Button color="secondary" onClick={toggleOpen} icon={<ArrowBottomIcon />}>
            {title}
         </Button>

         <div className={styles.content}>{open && children}</div>
      </div>
   )
}
