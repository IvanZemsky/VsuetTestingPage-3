import styles from "./styles.module.css"
import { Intro } from "./intro"
import { HomeTestsList } from "./list"
import { Button, TextInput } from "@/shared/ui"
import { SearchIcon } from "@/shared/ui/icons"

const Home = () => {
   return (
      <section className={styles.content}>
         <Intro />

         <div className={styles.testsWrap}>
            <div className={styles.search}>
               <TextInput placeholder="Поиск" />
               <Button icon={<SearchIcon />} />
            </div>
            <HomeTestsList />
         </div>
      </section>
   )
}

export default Home
