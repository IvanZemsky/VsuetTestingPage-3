import { ThemeBtn, Wrapper } from "@/shared/ui"
import styles from "./styles.module.css"
import { SignOutBtn } from "@/features/auth"
import { useSessionQuery } from "@/entities/user"

export const Header = () => {
   const { isSuccess } = useSessionQuery()

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               {isSuccess && (
                  <>
                     <ThemeBtn className={styles.themeBtn} />
                     <SignOutBtn />
                  </>
               )}
            </div>
         </Wrapper>
      </header>
   )
}
