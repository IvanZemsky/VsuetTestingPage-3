import { useContext, createContext, RefObject } from "react"

type TestContext = {
   score: RefObject<number>
   maxScore: RefObject<number>
   increaseScore: (value: number) => void
}

export const TestContext = createContext<TestContext>({
   score: { current: 0 },
   maxScore: { current: 0 },
   increaseScore: () => {},
})

export function useTestContext() {
   const testContext = useContext(TestContext)

   if (!testContext) {
      throw new Error("useTestContext must be used within a TestContextProvider")
   }

   return testContext
}
