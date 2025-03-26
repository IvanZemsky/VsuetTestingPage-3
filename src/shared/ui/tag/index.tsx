import styles from "./styles.module.css"

export const Tag = ({ emoji, title }) => {
   return (
      <div className={styles.tag}>
         <span className={styles.emoji}>{emoji}</span>
         <p className={styles.title}>{title}</p>
      </div>
   )
}
