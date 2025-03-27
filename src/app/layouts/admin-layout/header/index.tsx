import { Wrapper } from "@/shared/ui"
import styles from "./styles.module.css"
import { SignOutBtn } from "@/features/auth"

export const Header = () => {
   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <SignOutBtn />
            </div>
         </Wrapper>
      </header>
   )
}
