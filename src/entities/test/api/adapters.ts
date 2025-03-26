import { SpecializationTag, Test } from "../model/types"
import { GetTestDto } from "./dto"

export const testAdapters = {
   main<D extends { _id: string }, T extends { id: string } & Omit<D, "_id">>(dto: D): T {
      const { _id, ...data } = dto
      return {
         id: _id,
         ...data,
      } as T
   },
   test(dto: GetTestDto): Test {
      const { _id, ...data } = dto
      return {
         id: _id,
         ...data,
         tags: data.tags.map(
            (tag) => ({ name: tag.name, symbol: tag.symbol } as SpecializationTag),
         ),
      }
   },
}
