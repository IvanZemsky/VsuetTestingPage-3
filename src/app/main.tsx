import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { router } from "./router"
import { ThemeContextProvider } from "@/shared/model"
import "./styles/reset.css"

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <ThemeContextProvider>
         <RouterProvider router={router} />
      </ThemeContextProvider>
   </StrictMode>,
)
