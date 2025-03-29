import { API, API_ENDPOINTS } from "@/shared/api"
import { GetSessionInfoDto, SignInDto } from "./dto"
import { setPath } from "@/shared/lib"

const { SignIn, SignOut, Auth, GetSessionInfo } = API_ENDPOINTS

export const userService = {
   async signIn(dto: SignInDto) {
      const response = await API.post<SignInDto>(setPath(Auth, SignIn), dto)
      return response.data
   },

   async signOut() {
      const response = await API.post(setPath(Auth, SignOut))
      return response.data
   },

   async getSessionInfo() {
      const response = await API.get<GetSessionInfoDto>(setPath(Auth, GetSessionInfo))
      return response.data
   },
}
