import { useSessionQuery } from "@/entities/user"
import { Loading } from "@/shared/ui"
import { useEffect } from "react"
import { useNavigate } from "react-router"

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

   return <div>{JSON.stringify(authQuery.data)}</div>
}
