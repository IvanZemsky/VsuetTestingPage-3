import { Home, Test, Result, Admin, AdminLogin, EditTest, CreateTest } from "@/pages"
import { MainLayout } from "./layouts/main-layout"
import { createBrowserRouter } from "react-router"
import { AdminLayout } from "./layouts/admin-layout"

export const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout />,
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
   {
      path: "/admin/sign-in",
      element: <AdminLogin />,
   },
   {
      path: "/admin",
      element: <AdminLayout />,
      children: [
         {
            index: true,
            element: <Admin />,
         },
         {
            path: "tests/:testId/edit",
            element: <EditTest />,
         },
         {
            path: "tests/new",
            element: <CreateTest />,
         },
      ],
   },
])
