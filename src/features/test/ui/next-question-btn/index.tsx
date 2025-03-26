import styles from "./styles.module.css"
import { RightArrowIcon } from "@/shared/ui/icons"

type Props = {
   onClick: () => void
   disabled: boolean
}

export const NextQuestionBtn = ({ onClick, disabled }: Props) => {
   return (
      <button
         type="button"
         className={styles.nextQuestionBtn}
         onClick={onClick}
         disabled={disabled}
      >
         <RightArrowIcon />
      </button>
   )
}

export default NextQuestionBtn
