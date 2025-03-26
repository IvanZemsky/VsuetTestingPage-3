import { PropsWithChildren, useRef } from "react"
import { TestContext } from "."

export const TestContextProvider = ({ children }: PropsWithChildren) => {
   const resultFromLS = localStorage.getItem("results")
   if (!resultFromLS) {
      localStorage.setItem("results", JSON.stringify({}))
   }

   const score = useRef(0)
   const maxScore = useRef(0)

   const increaseScore = (value: number) => {
      score.current += value
   }

   return (
      <TestContext.Provider value={{ score, maxScore, increaseScore }}>
         {children}
      </TestContext.Provider>
   )
}
