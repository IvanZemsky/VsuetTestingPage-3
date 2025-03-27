import styles from "./styles.module.css"
import { Intro } from "./intro"
import { HomeTestsList } from "./list"

export const Home = () => {
   return (
      <section className={styles.content}>
         <Intro />
         <HomeTestsList />
      </section>
   )
}
