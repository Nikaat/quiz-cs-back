import { DataCollection } from "@/types";
import { PROJECT_MESSAGES } from "./project";
import { LANGUAGE_MESSAGES } from "./language";
import { TRANSLATION_MESSAGES } from "./translation";

export const getMessagesByCollection = (collection: DataCollection) => {
  const messagesMap: Record<DataCollection, typeof TRANSLATION_MESSAGES> = {
    translation: TRANSLATION_MESSAGES,
    language: LANGUAGE_MESSAGES,
    project: PROJECT_MESSAGES
  }
  return messagesMap[collection]
}