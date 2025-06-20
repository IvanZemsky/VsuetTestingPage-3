import { useSessionQuery } from "@/entities/user"
import { TestsSearchList } from "@/features/test/ui/tests-search-list"
import { Loading } from "@/shared/ui"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router"
import styles from "./styles.module.css"

export const Admin = () => {
   const navigate = useNavigate()
   const authQuery = useSessionQuery()

   useEffect(() => {
      if (!authQuery.isSuccess) {
         navigate("/admin/sign-in")
      }
   }, [authQuery, navigate])

   if (authQuery.isPending) {
      return <Loading />
   }

   return (
      authQuery.isSuccess && (
         <TestsSearchList
            link={"/admin/tests/{id}/edit"}
            cardType="admin"
            additionalElements={
               <Link to={"/admin/tests/new"} className={styles.link}>
                  Создать
               </Link>
            }
         />
      )
   )
}
