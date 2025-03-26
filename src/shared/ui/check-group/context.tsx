import { ChangeEventHandler, createContext, useContext } from "react"

export const CheckGroupContext = createContext<{
   name?: string
   onChange?: ChangeEventHandler<HTMLInputElement>
   value: string[]
}>({})

export function useCheckGroupContext() {
   const context = useContext(CheckGroupContext)

   if (!context) {
      throw new Error(
         "All sub components of CheckGroupItem must be wrapped in CheckGroupContext",
      )
   }

   return context
}
