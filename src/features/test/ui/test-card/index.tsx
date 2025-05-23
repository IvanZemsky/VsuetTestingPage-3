import { Test } from "@/entities/test"
import styles from "./styles.module.css"
import { EyeIcon } from "@/shared/ui/icons"
import { Link } from "react-router"
import clsx from "clsx"

type Props = {
   data: Test
   link: string
   type?: "admin" | "default"
}
export const TestCard = ({ data, link, type = "default" }: Props) => {
   const { name, description, img, tags, specializationCode, passes } = data

   return (
      <div className={clsx(styles.wrap, styles[type])}>
         <Link to={`/admin/tests/${data.id}/stats`} className={styles.statsLink}>
            Статистика
         </Link>
         <Link to={link} className={styles.content}>
            <div className={styles.imgWrap}>
               <img src={img} alt={`Cover of test "${name}"`} />
            </div>
            <div className={styles.info}>
               <p className={styles.name}>{name}</p>
               <div className={styles.mainInfoWrap}>
                  <p className={styles.desc}>{description}</p>

                  <div className={styles.detailedPanel}>
                     <div className={styles.specializationCode}>
                        #{specializationCode}
                     </div>
                     <div className={styles.passes}>
                        <EyeIcon />
                        <p>{passes}</p>
                     </div>
                  </div>

                  <div className={styles.tags}>
                     {tags.map((tag) => (
                        <p className={styles.tag} key={tag.id}>
                           {tag.symbol}
                        </p>
                     ))}
                  </div>
               </div>
            </div>
         </Link>
      </div>
   )
}
