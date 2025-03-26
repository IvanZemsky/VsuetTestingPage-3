import { joinString } from "../utils/join-string"

export function setPath(...strings: string[]) {
   return joinString("/", ...strings)
}
