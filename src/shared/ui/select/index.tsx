import { ChangeEvent, ComponentProps, useEffect, useState } from "react"
import styles from "./styles.module.css"
import { SelectContext } from "./context"
import { SelectOption } from "./select-option"
import { Dropdown } from "../dropdown"
import { useDropdown } from "../../lib/hooks/use-dropdown"
import clsx from "clsx"

type Props = ComponentProps<"input"> & {
   title: string
}

export const Select = (props: Props) => {
   const { title, className, name, children, value, onChange } = props

   const [label, setLabel] = useState("")

   const { isOpen, toggleOpen, selectRef, setIsOpen } = useDropdown()

   const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      setIsOpen(false)
   }

   useEffect(() => {
      if (value === undefined) {
         setLabel("")
      }
   }, [value])

   return (
      <Dropdown
         title={label || title}
         className={clsx(styles.wrap, className)}
         open={isOpen}
         toggleOpen={toggleOpen}
         ref={selectRef}
      >
         <SelectContext.Provider value={{ onChange: handleCheck, value, name, setLabel }}>
            <div className={styles.options}>{children}</div>
         </SelectContext.Provider>
      </Dropdown>
   )
}

Select.Option = SelectOption
