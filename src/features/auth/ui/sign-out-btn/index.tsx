import { userService } from "@/entities/user"
import { Button } from "@/shared/ui"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router"

export const SignOutBtn = () => {
   const navigate = useNavigate()
   const queryClient = useQueryClient()

   const signOutMutation = useMutation({
      mutationFn: userService.signOut,
      onSuccess: async () => {
         queryClient.invalidateQueries({ queryKey: ["session"] })
         navigate("/")
      },
   })

   const handleClick = () => {
      signOutMutation.mutate()
   }

   return (
      <Button onClick={handleClick} disabled={signOutMutation.isPending}>
         Выйти
      </Button>
   )
}
