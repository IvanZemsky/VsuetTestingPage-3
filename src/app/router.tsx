import { Home, Test, Result, Admin, AdminLogin } from "@/pages"
import { MainLayout } from "./layouts/main-layout"
import { createBrowserRouter } from "react-router"
import { AdminLayout } from "./layouts/admin-layout";

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
       path: "/admin",
       element: <AdminLayout />,
       children: [
           {
               index: true,
               element: <Admin />,
           },
           {
               path: "sign-in",
               element: <AdminLogin />,
           },
       ],
   },
]);
