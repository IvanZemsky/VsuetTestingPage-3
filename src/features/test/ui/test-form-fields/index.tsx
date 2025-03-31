import { Test } from "@/entities/test"
import { TextInput, Textarea } from "@/shared/ui"

type Props = { testData?: Test }

export const TestFormFields = ({ testData }: Props) => {
   return (
      <>
         <TextInput
            placeholder="Название теста"
            defaultValue={testData?.name}
            name="name"
         />
         <Textarea
            placeholder="Описание теста"
            defaultValue={testData?.description}
            name="description"
         />
         <TextInput
            placeholder="Ссылка на картинку"
            defaultValue={testData?.img}
            name="img"
         />
         <TextInput
            placeholder="Код специализации"
            defaultValue={testData?.specializationCode}
            name="specialization-code"
         />
      </>
   )
}
