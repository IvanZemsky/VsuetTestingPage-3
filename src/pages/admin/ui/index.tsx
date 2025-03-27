import { useSessionQuery } from "@/entities/user"
import { Loading } from "@/shared/ui"
import { useEffect } from "react"
import { useNavigate } from "react-router"

export const Admin = () => {
   const navigate = useNavigate()
   const authQuery = useSessionQuery()

   useEffect(() => {
      if (!authQuery.data) {
         navigate("/admin-login")
      }
   }, [authQuery.data, navigate])

   if (authQuery.isLoading) {
      return <Loading />
   }

   return <div>{JSON.stringify(authQuery.data)}</div>
}
