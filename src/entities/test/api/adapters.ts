export const testAdapters = {
   main<D extends { _id: string }, T extends { id: string } & Omit<D, "_id">>(dto: D): T {
      const { _id, ...data } = dto
      return {
         id: _id,
         ...data,
      } as T
   },
}
