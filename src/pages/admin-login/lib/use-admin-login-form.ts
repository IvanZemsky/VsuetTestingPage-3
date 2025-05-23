import { userService, useSessionQuery } from "@/entities/user"
import { useQueryClient, useMutation } from "@tanstack/react-query"
import { useEffect, FormEvent } from "react"
import { useNavigate } from "react-router"

export function useAdminLoginForm() {
   const navigate = useNavigate()
   const authQuery = useSessionQuery()
   const queryClient = useQueryClient()

   const signInMutation = useMutation({
      mutationFn: userService.signIn,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["session"] })
         navigate("/admin")
      },
   })

   useEffect(() => {
      if (authQuery.isSuccess) {
         navigate("/admin")
         return
      }
   }, [authQuery, navigate])

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const form = event.target as HTMLFormElement
      const login = (form.elements.namedItem("login") as HTMLInputElement)?.value
      const password = (form.elements.namedItem("password") as HTMLInputElement)?.value

      if (login && password) {
         signInMutation.mutate({
            login,
            password,
         })
      } else {
         console.error("Login or password is missing")
      }
   }

   return {
      handleSubmit,
      signInMutation,
      authQuery,
   }
}
