import { Outlet } from "react-router"
import { Header } from "./header"
import { Suspense, useContext } from "react"
import styles from "./styles.module.css"
import { Loading, Wrapper } from "@/shared/ui"
import clsx from "clsx"
import { ThemeContext } from "@/shared/model/theme-context"

export const AdminLayout = () => {
   const { theme } = useContext(ThemeContext)

   return (
      <div className={clsx("app", theme)}>
         <Header />
         <main>
            <Suspense fallback={<Loading />}>
               <Wrapper className={styles.wrapper}>
                  <Outlet />
               </Wrapper>
            </Suspense>
         </main>
      </div>
   )
}
