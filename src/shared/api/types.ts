export type ApiClientOptions = {
   baseUrl: string
}

/**
 * Query-параметры запроса
 */
export type QueryParams = Record<string, string | number | null | undefined | boolean>

export type ApiHTTPMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

/**
 * Настройки для конкретного экземпляра запроса
 */
export type ApiQueryOptions = RequestInit & {
   query?: QueryParams
}

export interface IApiClient {
   get: <T>(path: string, options?: ApiQueryOptions) => Promise<T>
   patch: <T>(path: string, options?: ApiQueryOptions) => Promise<T>
   baseUrl: string
}
