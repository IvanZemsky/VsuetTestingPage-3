import { useSessionQuery } from "@/entities/user"
import { TestsSearchList } from "@/features/test"
import { Loading } from "@/shared/ui"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router"

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
      <TestsSearchList
         link={"/admin/tests/{id}/edit"}
         additionalElements={<Link to={"/admin/tests/new"}>Создать</Link>}
      />
   )
}
