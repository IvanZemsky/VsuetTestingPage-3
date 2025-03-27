import { useState } from "react"
import styles from "./styles.module.css"
import { Logo, BurgerBtn, ThemeBtn, Wrapper } from "@/shared/ui"
import { Link } from "react-router"
import clsx from "clsx"

export const Header = () => {
   const currentYear = new Date().getFullYear()

   const [open, setOpen] = useState(false)

   const handleOpenMenuToggle = () => {
      setOpen(!open)
   }

   return (
      <header className={styles.header}>
         <Wrapper>
            <div className={styles.content}>
               <Logo />

               <div className={clsx(styles.menu, { [styles.opened]: open })}>
                  <nav className={styles.links}>
                     <a
                        href="https://vsuet.ru/dod"
                        className={styles.link}
                        target="_blank"
                     >
                        Приём {currentYear} <span>📖</span>
                     </a>
                     <a
                        href="https://vsuet.ru/abitur"
                        className={styles.link}
                        target="_blank"
                     >
                        Абитуриенту <span>👨‍💼</span>
                     </a>
                     <Link to="/" className={styles.link}>
                        На главную <span>🏠</span>
                     </Link>
                  </nav>

                  <ThemeBtn className={styles.themeBtn} />
               </div>

               <BurgerBtn
                  className={clsx(styles.burgerBtn, { [styles.opened]: open })}
                  setOpenedStyle={handleOpenMenuToggle}
               />
            </div>
         </Wrapper>
      </header>
   )
}
