import {
   ChangeEventHandler,
   createContext,
   Dispatch,
   SetStateAction,
   useContext,
} from "react"

export const SelectContext = createContext<{
   value?: string | number | readonly string[]
   name?: string
   setLabel?: Dispatch<SetStateAction<string>>
   onChange?: ChangeEventHandler<HTMLInputElement>
}>({})

export function useSelectContext() {
   const context = useContext(SelectContext)

   if (!context) {
      throw new Error("All sub components of Select must be wrapped in SwitcherGroup")
   }

   return context
}
