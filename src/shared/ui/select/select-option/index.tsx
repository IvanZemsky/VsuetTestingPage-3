import { ChangeEvent, ComponentProps } from "react"
import styles from "./styles.module.css"
import { Button } from "../.."
import clsx from "clsx"
import { useSelectContext } from "../context"

export type CheckProps = ComponentProps<"input"> & {
   text: string
   fillContainer?: boolean
}

export const SelectOption = (props: CheckProps) => {
   const {
      fillContainer = false,
      checked = false,
      text,
      className,
      onDoubleClick,
      ...attributes
   } = props

   const { onChange, name, value, setLabel } = useSelectContext()

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setLabel?.(text)
      onChange?.(event)
   }

   return (
      <div
         className={clsx(
            styles.wrap,
            { [styles.fillContainer]: fillContainer },
            className,
         )}
         onDoubleClick={onDoubleClick}
      >
         <input
            type="radio"
            checked={value === props.value}
            onChange={handleChange}
            name={name}
            value={value}
            {...attributes}
         />
         <label htmlFor={attributes.id}>
            <Button
               type="button"
               color="secondary"
               className={clsx(styles.optionBtn, { [styles.checked]: checked })}
            >
               {text}
            </Button>
         </label>
      </div>
   )
}
