import { DataCollection } from "@/types";
import { CONFIG_MESSAGES } from "./config";
import { PROJECT_MESSAGES } from "./project";
import { LANGUAGE_MESSAGES } from "./language";
import { TEMPLATE_MESSAGES } from "./template";
import { TRANSLATION_MESSAGES } from "./translation";

export const getMessagesByCollection = (collection: DataCollection) => {
  const messagesMap: Record<DataCollection, typeof TRANSLATION_MESSAGES> = {
    translation: TRANSLATION_MESSAGES,
    language: LANGUAGE_MESSAGES,
    template: TEMPLATE_MESSAGES,
    project: PROJECT_MESSAGES,
    config: CONFIG_MESSAGES
  }
  return messagesMap[collection]
}