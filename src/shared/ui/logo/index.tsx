import styles from "./styles.module.css"

export const Logo = () => {
   return (
      <a href="https://vsuet.ru/" target="_blank" className={styles.logo}>
         <div className={styles.text}>
            <span className={styles.abbr}>ВГУИТ</span>
            <br />
            <span className={styles.year}>1930</span>
         </div>
         <span className={styles.mainText}>
            Воронежский государственный университет инженерных технологий
         </span>
      </a>
   )
}
