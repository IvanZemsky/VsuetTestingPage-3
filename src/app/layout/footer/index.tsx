import styles from "./styles.module.css"
import { VKIcon } from "@/shared/ui/icons/vk"
import { TelegramIcon } from "@/shared/ui/icons/telegram"
import { Wrapper } from "@/shared/ui"

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <Wrapper>
            <div className={styles.content}>
               <div className={styles.info}>
                  <p>{"8 (800) 100-00-24"}</p>
                  <p>post@vsuet.ru</p>
               </div>
               <div className={styles.socials}>
                  <a href="https://vk.com/vsuet_official" target="_blank">
                     <VKIcon />
                  </a>
                  <a href="https://t.me/vsuet_official" target="_blank">
                     <TelegramIcon />
                  </a>
               </div>
            </div>
         </Wrapper>
      </footer>
   )
}
