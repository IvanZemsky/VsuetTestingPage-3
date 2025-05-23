import { TestId, testsService } from "@/entities/test"
import { useState } from "react"
import styles from "./styles.module.css"
import { Button } from "@/shared/ui"
import { queryClient } from "@/shared/model"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router"

type Props = {
   testId: TestId
}
export const RemoveTestBlock = ({ testId }: Props) => {
   const navigate = useNavigate()

   const [isModal, setIsModal] = useState(false)

   const deleteTestMutation = useMutation({
      mutationFn: testsService.deleteTest,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: ["tests"] })
         navigate("/admin")
      },
   })

   const handleModalOpenClick = () => {
      setIsModal(true)
   }

   const handleModalCloseClick = () => {
      setIsModal(false)
   }

   const handleDeleteTest = () => {
      deleteTestMutation.mutate(testId)
   }

   return (
      <div className={styles.content}>
         {isModal && (
            <div className={styles.modal}>
               <div className={styles.modalContent}>
                  <p className={styles.modalTitle}>
                     Вы уверены, что хотите удалить тест?
                  </p>
                  <div className={styles.modalButtons}>
                     <Button onClick={handleModalCloseClick}>Нет</Button>
                     <Button className={styles.deleteBtn} onClick={handleDeleteTest}>
                        Да
                     </Button>
                  </div>
               </div>
            </div>
         )}
         <Button onClick={handleModalOpenClick} className={styles.deleteBtn}>
            Удалить тест
         </Button>
      </div>
   )
}
