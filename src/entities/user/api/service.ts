import { API, API_ENDPOINTS } from "@/shared/api"
import { GetSessionInfoDto, SignInDto } from "./dto"
import { setPath } from "@/shared/lib"

const { SignIn, SignOut, Auth, GetSessionInfo } = API_ENDPOINTS

export const userService = {
   async signIn(dto: SignInDto) {
      const response = await API.post<SignInDto>(setPath(Auth, SignIn), {
         body: JSON.stringify(dto),
      })
      return response
   },

   async signOut() {
      const response = await API.post(setPath(Auth, SignOut))
      return response
   },

   async getSessionInfo() {
      const response = await API.get<GetSessionInfoDto>(setPath(Auth, GetSessionInfo))
      return response
   },
}
