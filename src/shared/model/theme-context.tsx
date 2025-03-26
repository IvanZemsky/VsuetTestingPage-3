import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

type ThemeContextType = {
   theme: Theme
   setTheme: (theme: ThemeContextType["theme"]) => void
}

export const ThemeContext = createContext<ThemeContextType>({
   theme: "light",
   setTheme: () => {},
})

export const useThemeContext = () => {
   const context = useContext(ThemeContext)

   if (!context) {
      throw new Error("useThemeContext must be used within a ThemeContextProvider")
   }

   return context
}


export const ThemeContextProvider = ({ children }: PropsWithChildren) => {
   const defaultTheme = (localStorage.getItem("theme") || "light") as Theme

   const [theme, setTheme] = useState<ThemeContextType["theme"]>(defaultTheme)

   useEffect(() => {
      localStorage.setItem("theme", theme)
   }, [theme])

   return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
         {children}
      </ThemeContext.Provider>
   )
}
