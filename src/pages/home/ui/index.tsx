import styles from "./styles.module.css"
import { Intro } from "./intro"
import { TestsSearchList } from "@/features/test/ui/tests-search-list"

export const Home = () => {
   return (
      <section className={styles.content}>
         <Intro />
         <TestsSearchList link="/tests/{id}" />
      </section>
   )
}
