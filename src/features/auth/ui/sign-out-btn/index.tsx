import { userService } from "@/entities/user"
import { queryClient } from "@/shared/model"
import { Button } from "@/shared/ui"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"
import styles from "./styles.module.css"

export const SignOutBtn = () => {
   const navigate = useNavigate()
   const signOutMutation = useMutation({
      mutationFn: userService.signOut,
      onSuccess: async () => {
         await queryClient.invalidateQueries({ queryKey: ["session"] })
         navigate("/admin/sign-in")
      },
   })

   const handleClick = () => {
      signOutMutation.mutate()
   }

   return (
      <Button onClick={handleClick} className={styles.btn}>
         Выйти
      </Button>
   )
}
