import { setPath } from "../lib"
import { getSearchParamsString } from "../lib/utils/getSearchParamsString"
import { ApiClientOptions, ApiQueryOptions, IApiClient, QueryParams } from "./types"

export class ApiClient implements IApiClient {
   baseUrl: string
   interceptors?: RequestInit

   constructor({ baseUrl, interceptors }: ApiClientOptions) {
      this.baseUrl = baseUrl
      this.interceptors = interceptors
   }

   private getRequestString(url: string, query?: QueryParams) {
      let requestString = url

      if (query) {
         requestString += "?"
         requestString += getSearchParamsString(query)
      }

      return requestString
   }

   async get<T>(path: string, options: ApiQueryOptions = {}) {
      const { query, ...nativeOptions } = options

      if (this.interceptors) {
         const combinedOptions: RequestInit = {
            ...nativeOptions,
            ...this.interceptors,
         }
         Object.assign(nativeOptions, combinedOptions)
      }

      const requestInit: RequestInit = {
         ...nativeOptions,
         method: "GET",
      }

      const requestString = this.getRequestString(setPath(this.baseUrl, path), query)

      const response = await fetch(requestString, requestInit)

      if (!response.ok) {
         const errorBody = await response.text()
         const errorMessage = `HTTP error ${response.status}: ${errorBody}`
         const error = new Error(errorMessage)
         throw error
      }

      const data: T = await response.json()
      return data
   }

   async post<T>(path: string, options: ApiQueryOptions = {}) {
      const { query, ...nativeOptions } = options

      if (this.interceptors) {
         const combinedOptions: RequestInit = {
            ...nativeOptions,
            ...this.interceptors,
         }
         Object.assign(nativeOptions, combinedOptions)
      }

      const requestInit: RequestInit = {
         ...nativeOptions,
         method: "POST",
      }

      const requestString = this.getRequestString(setPath(this.baseUrl, path), query)

      const response = await fetch(requestString, requestInit)

      if (!response.ok) {
         const errorBody = await response.text()
         const errorMessage = `HTTP error ${response.status}: ${errorBody}`
         const error = new Error(errorMessage)
         throw error
      }

      const data: T = await response.json()
      return data
   }

   async patch<T>(path: string, options: ApiQueryOptions = {}) {
      const { query, ...nativeOptions } = options

      if (this.interceptors) {
         const combinedOptions: RequestInit = {
            ...nativeOptions,
            ...this.interceptors,
         }
         Object.assign(nativeOptions, combinedOptions)
      }

      const requestInit: RequestInit = {
         ...nativeOptions,
         method: "PATCH",
      }

      const requestString = this.getRequestString(setPath(this.baseUrl, path), query)

      const response = await fetch(requestString, requestInit)

      if (!response.ok) {
         const errorBody = await response.text()
         const errorMessage = `HTTP error ${response.status}: ${errorBody}`
         const error = new Error(errorMessage)
         throw error
      }

      const data: T = await response.json()
      return data
   }
}
