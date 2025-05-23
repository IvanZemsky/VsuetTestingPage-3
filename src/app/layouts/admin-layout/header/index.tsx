import { ThemeBtn, Wrapper } from "@/shared/ui"
import styles from "./styles.module.css"
import { SignOutBtn } from "@/features/auth"
import { useSessionQuery } from "@/entities/user"
import { Link } from "react-router"

export const Header = () => {
   const { isSuccess } = useSessionQuery()

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <ThemeBtn className={styles.themeBtn} />
               {isSuccess && (
                  <div className={styles.links}>
                     <Link to="/">На главную</Link>
                     <SignOutBtn />
                  </div>
               )}
            </div>
         </Wrapper>
      </header>
   )
}
