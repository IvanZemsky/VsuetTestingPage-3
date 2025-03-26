export function getSearchParamsString(
   query: Record<string, string | number | null | undefined | boolean>,
) {
   const queryParams: Record<keyof typeof query, string> = {}

   for (const param in query) {
      queryParams[param] = String(query[param])
   }

   return new URLSearchParams(queryParams)
}
