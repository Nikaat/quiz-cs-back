import { Collection } from "@/types";
import { TRANSLATE_MESSAGES } from "./translate";

export const getMessagesByCollection = (collection: Collection) => {
  const messagesMap = {
    translate: TRANSLATE_MESSAGES
  }
  return messagesMap[collection]
}