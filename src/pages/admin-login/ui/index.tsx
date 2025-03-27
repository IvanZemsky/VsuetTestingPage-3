import { useSessionQuery, userService } from "@/entities/user"
import { Button, Loading, TextInput } from "@/shared/ui"
import { FormEvent, useEffect } from "react"
import { useNavigate } from "react-router"
import styles from "./styles.module.css"
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const AdminLogin = () => {
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
      if (signInMutation.data || authQuery.data) {
         navigate("/admin")
      }
   }, [signInMutation.data, authQuery.data, navigate])

   if (authQuery.isLoading) {
      return <Loading />
   }

   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const form = event.target as HTMLFormElement
      const login = (form.elements.namedItem("login") as HTMLInputElement)?.value
      const password = (form.elements.namedItem("password") as HTMLInputElement)?.value

      console.log(login, password)
      if (login && password) {
         signInMutation.mutate({
            login,
            password,
         })
      } else {
         console.error("Login or password is missing")
      }
   }

   return (
      <div className={styles.content}>
         <form className={styles.form} onSubmit={handleSubmit}>
            <TextInput placeholder="Логин" name="login" id="login" />
            <TextInput
               placeholder="Пароль"
               name="password"
               type="password"
               id="password"
            />
            <Button type="submit" disabled={signInMutation.isPending}>
               Войти
            </Button>
         </form>
      </div>
   )
}
