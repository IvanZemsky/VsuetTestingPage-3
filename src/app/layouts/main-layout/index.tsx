import { Outlet } from "react-router"
import { Header } from "./header"
import { Footer } from "./footer"
import { Suspense, useContext } from "react"
import styles from "./styles.module.css"
import { Loading, Wrapper } from "@/shared/ui"
import clsx from "clsx"
import { ThemeContext } from "@/shared/model/theme-context"
import { TestContextProvider } from "@/entities/test"

export const MainLayout = () => {
   const { theme } = useContext(ThemeContext)

   return (
      <div className={clsx("app", theme)}>
         <Header />
         <main>
            <Suspense fallback={<Loading />}>
               <Wrapper className={styles.wrapper}>
                  <TestContextProvider>
                     <Outlet />
                  </TestContextProvider>
               </Wrapper>
            </Suspense>
         </main>
         <Footer />
      </div>
   )
}
