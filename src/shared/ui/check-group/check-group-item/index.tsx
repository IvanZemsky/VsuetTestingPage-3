import { Check, CheckProps } from "../../check"
import { useCheckGroupContext } from "../context"

export const CheckGroupItem = (props: CheckProps) => {
   const { name, onChange, value } = useCheckGroupContext()

   return (
      <Check
         name={name}
         onChange={onChange}
         checked={value.includes(props.value as string)}
         {...props}
      />
   )
}
