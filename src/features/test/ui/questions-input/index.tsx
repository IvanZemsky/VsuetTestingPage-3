import { Button, TextInput } from "@/shared/ui"
import { CrossIcon } from "@/shared/ui/icons"
import styles from "./styles.module.css"
import { ChangeEvent, useEffect, useState } from "react"
import { UpdateQuestionDto } from "@/entities/test"

type Props = {
   initialQuestions: UpdateQuestionDto[]
   onChange: (newQuestions: UpdateQuestionDto[]) => void
}

export const QuestionsInput = ({ initialQuestions, onChange }: Props) => {
   const [questions, setQuestions] = useState<UpdateQuestionDto[]>(initialQuestions)

   useEffect(() => {
      onChange(questions)
   }, [questions])

   const handleAddQuestionClick = () => {
      const id = String(Date.now())
      setQuestions((prev) => [...prev, { id, title: "", answers: [], isNew: true }])
   }

   const handleRemoveQuestionClick = (questionId: string) => () => {
      setQuestions((prev) => prev.filter((question) => question.id !== questionId))
   }

   const handleRemoveAnswerClick = (questionId: string, answerId: string) => () => {
      setQuestions((prev) =>
         prev.map((question) => {
            if (question.id === questionId) {
               return {
                  ...question,
                  answers: question.answers.filter((answer) => answer.id !== answerId),
               }
            }
            return question
         }),
      )
   }

   const handleAddAnswerClick = (questionId: string) => () => {
      const id = String(Date.now())
      setQuestions((prev) =>
         prev.map((question) => {
            if (question.id === questionId) {
               return {
                  ...question,
                  answers: [...question.answers, { id, text: "", score: 0 }],
               }
            }
            return question
         }),
      )
   }

   const handleQuestionTitleChange =
      (questionId: string) => (event: ChangeEvent<HTMLInputElement>) => {
         setQuestions((prev) => {
            return prev.map((question) => ({
               ...question,
               title: question.id === questionId ? event.target.value : question.title,
            }))
         })
      }

   const handleAnswerTextChange =
      (questionId: string, answerId: string) =>
      (event: ChangeEvent<HTMLInputElement>) => {
         setQuestions((prev) => {
            return prev.map((question) => ({
               ...question,
               answers:
                  question.id === questionId
                     ? question.answers.map((answer) => ({
                          ...answer,
                          text: answer.id === answerId ? event.target.value : answer.text,
                       }))
                     : question.answers,
            }))
         })
      }

   const handleAnswerScoreChange =
      (questionId: string, answerId: string) =>
      (event: ChangeEvent<HTMLInputElement>) => {
         setQuestions((prev) => {
            return prev.map((question) => ({
               ...question,
               answers:
                  question.id === questionId
                     ? question.answers.map((answer) => ({
                          ...answer,
                          score:
                             answer.id === answerId
                                ? Number(event.target.value)
                                : answer.score,
                       }))
                     : question.answers,
            }))
         })
      }
   return (
      <>
         <h2 className={styles.title}>Вопросы</h2>
         <div className={styles.questions}>
            {questions?.map((question) => (
               <div className={styles.question} key={question.id}>
                  <div className={styles.questionInput}>
                     <TextInput
                        defaultValue={question.title}
                        placeholder="Текст вопроса"
                        className={styles.questionInput}
                        onChange={handleQuestionTitleChange(question.id)}
                     />
                     <Button
                        onClick={handleRemoveQuestionClick(question.id)}
                        icon={<CrossIcon />}
                        className={styles.removeQuestionBtn}
                     />
                  </div>
                  <div className={styles.answers}>
                     {question.answers.map((answer) => (
                        <div className={styles.answersInput} key={answer.id}>
                           <TextInput
                              defaultValue={answer.text}
                              placeholder="Ответ"
                              className={styles.answerInput}
                              onChange={handleAnswerTextChange(question.id, answer.id)}
                           />
                           <TextInput
                              defaultValue={answer.score}
                              placeholder="Баллы"
                              className={styles.answerScoreInput}
                              onChange={handleAnswerScoreChange(question.id, answer.id)}
                              max={1}
                              maxLength={1}
                           />
                           <Button
                              onClick={handleRemoveAnswerClick(question.id, answer.id)}
                              icon={<CrossIcon />}
                              className={styles.removeAnswerBtn}
                           />
                        </div>
                     ))}
                     <Button onClick={handleAddAnswerClick(question.id)}>
                        Добавить ответ
                     </Button>
                  </div>
               </div>
            ))}
            <Button onClick={handleAddQuestionClick}>Добавить вопрос</Button>
         </div>
      </>
   )
}
