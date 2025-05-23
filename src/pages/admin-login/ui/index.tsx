import { Button, Loading, TextInput } from "@/shared/ui"
import styles from "./styles.module.css"
import { useAdminLoginForm } from "../lib/use-admin-login-form"
import { ThemeContext } from "@/shared/model/theme-context"
import { useContext } from "react"
import clsx from "clsx"

export const AdminLogin = () => {
   const { theme } = useContext(ThemeContext)

   const { authQuery, handleSubmit, signInMutation } = useAdminLoginForm()

   if (authQuery.isLoading) {
      return <Loading />
   }

   return (
      <div className={clsx(styles.content, theme)}>
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
