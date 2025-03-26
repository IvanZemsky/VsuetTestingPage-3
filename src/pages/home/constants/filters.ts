import { CheckProps } from "@/shared/ui/check"

export const subjectsFilter: CheckProps[] = [
   { label: "Химия", value: "химия", id: "chemistry" },
   { label: "Физика", value: "физика", id: "physics" },
   { label: "Биология", value: "биология", id: "biology" },
   { label: "Математика", value: "математика", id: "math" },
   { label: "Информатика", value: "информатика", id: "imformatics" },
   { label: "Обществознание", value: "обществознание", id: "social-studies" },
   { label: "История", value: "история", id: "history" },
   { label: "География", value: "география", id: "geography" },
   { label: "Русский язык", value: "русский", id: "russian" },
   { label: "Английский язык", value: "английский", id: "english" },
]

export const qualificationFilter: CheckProps[] = [
   { label: "Бакалавриат", value: "бакалавриат", id: "bachelor" },
   { label: "Специалитет", value: "специалитет", id: "specialist" },
   { label: "Магистратура", value: "магистратура", id: "master" },
   { label: "СПО", value: "спо", id: "middle_professional" },
]


