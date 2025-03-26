import { lazy } from "react"

export const Home = lazy(() => import("./home/ui"))
export const Test = lazy(() => import("./test/ui"))
export const Result = lazy(() => import("./result"))
