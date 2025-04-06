import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider } from "react-router"
import { router } from "./router"
import { queryClient, ThemeContextProvider } from "@/shared/model"
import "@/shared/ui/styles/vars.css"
import "@/shared/ui/styles/fonts.css"
import "./styles/reset.css"
import { QueryClientProvider } from "@tanstack/react-query"

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <ThemeContextProvider>
         <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
         </QueryClientProvider>
      </ThemeContextProvider>
   </StrictMode>,
)
