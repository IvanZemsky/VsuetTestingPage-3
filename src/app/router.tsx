import { Home, Test, Result } from "@/pages"
import { Layout } from "./layout"
import { createBrowserRouter } from "react-router"

export const router = createBrowserRouter([
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "tests/:testId",
            element: <Test />,
         },
         {
            path: "tests/:testId/result",
            element: <Result />,
         },
      ],
   },
])
