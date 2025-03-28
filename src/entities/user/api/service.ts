import { API, API_ENDPOINTS } from "@/shared/api"
import { GetSessionInfoDto, SignInDto } from "./dto"
import { setPath } from "@/shared/lib"

const { SignIn, SignOut, Auth, GetSessionInfo } = API_ENDPOINTS

export const userService = {
   async signIn(dto: SignInDto) {
      try {
         const response = await API.post<SignInDto>(setPath(Auth, SignIn), dto)

         console.log("userService.signIn: Response", response)
         return response.data
      } catch (error) {
         console.error("userService.signIn: Error", error)
         throw error // Re-throw the error to be caught by useMutation
      }
   },

   async signOut() {
      try {
         const response = await API.post(setPath(Auth, SignOut))
         console.log("userService.signOut: Response", response)
         return response.data
      } catch (error) {
         console.error("userService.signOut: Error", error)
         throw error
      }
   },

   async getSessionInfo() {
      try {
         const response = await API.get<GetSessionInfoDto>(setPath(Auth, GetSessionInfo))
         console.log("userService.getSessionInfo: Response", response)
         return response.data
      } catch (error) {
         console.error("userService.getSessionInfo: Error", error)
         throw error
      }
   },
}
