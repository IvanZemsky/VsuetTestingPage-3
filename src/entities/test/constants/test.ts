import { Test } from "../model/types"

export const TEST: Test = {
   id: 1,
   name: "Информационные системы и программирование",
   description:
      "Наш университет предлагает пройти простой тест на Ваши навыки, увлечения и интересы и узнать, подходит ли Вам обучение по специальности #09.02.07",
   img: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
   maxResult: 50,
   entranceTests: [],
   specializationCode: "09.02.07",
   tags: [
      { name: "IT", emoji: "💻" },
      { name: "Системное мышление", emoji: "⚙️" },
      { name: "Проектирование", emoji: "🔬" },
   ],
   department: "СПО",
   passes: 0,
}
