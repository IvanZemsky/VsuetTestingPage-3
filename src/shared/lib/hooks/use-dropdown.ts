import { useOutsideClick } from "@/shared/lib/hooks/use-outside-click"
import { useState } from "react"

export function useDropdown() {
   const [isOpen, setIsOpen] = useState(false)

   const selectRef = useOutsideClick<HTMLDivElement>(() => setIsOpen(false))

   const toggleOpen = () => {
      setIsOpen(!isOpen)
   }

   return { isOpen, setIsOpen, selectRef, toggleOpen }
}
