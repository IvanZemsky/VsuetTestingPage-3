import { Button, Loading, TextInput } from "@/shared/ui"
import styles from "./styles.module.css"
import { useAdminLoginForm } from "../lin/use-admin-login-form"

export const AdminLogin = () => {
   const { authQuery, handleSubmit, signInMutation } = useAdminLoginForm()

   if (authQuery.isLoading) {
      return <Loading />
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
