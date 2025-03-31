import { lazy } from "react"

export const Home = lazy(() => import("./home"))
export const Test = lazy(() => import("./test/ui"))
export const Result = lazy(() => import("./result"))
export const Admin = lazy(() => import("./admin"))
export const AdminLogin = lazy(() => import("./admin-login"))
export const EditTest = lazy(() => import("./admin-edit-test"))
export const CreateTest = lazy(() => import("./admin-new-test"))
