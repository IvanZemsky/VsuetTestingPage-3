import Logo from "@/shared/assets/img/logo.png"
import styles from "./styles.module.css"

export const Intro = () => {
   return (
      <div className={styles.intro}>
         <div className={styles.introDesc}>
            <h1>Добро пожаловать! 👋</h1>
            <p className={styles.introDescText}>
               Наш университет предлагает выбрать и пройти простой тест на навыки,
               увлечения и интересы и узнать, подходит ли Вам обучение в нашем
               университете по интересующей Вас специальности.
            </p>
            <p className={styles.introDescText}>
               Более подробно о каждом направлении можно ознакомиться на сайте
               университета:{" "}
               <a href="https://vsuet.ru/abitur/specialties" target="_blank">
                  https://vsuet.ru/abitur/specialties
               </a>
            </p>
         </div>
         <img src={Logo} alt="logo" />
      </div>
   )
}
