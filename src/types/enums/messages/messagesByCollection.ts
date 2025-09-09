import { DataCollection } from "@/types";
import { CONFIG_MESSAGES } from "./config";
import { PROJECT_MESSAGES } from "./project";
import { LANGUAGE_MESSAGES } from "./language";
import { TEMPLATE_MESSAGES } from "./template";
import { TRANSLATION_MESSAGES } from "./translation";
import { COMPOSITION_MESSAGES } from "./composition";

export const getMessagesByCollection = (collection: DataCollection) => {
  const messagesMap: Record<DataCollection, typeof TRANSLATION_MESSAGES> = {
    config: CONFIG_MESSAGES,
    project: PROJECT_MESSAGES,
    template: TEMPLATE_MESSAGES,
    language: LANGUAGE_MESSAGES,
    translation: TRANSLATION_MESSAGES,
    composition: COMPOSITION_MESSAGES,
  }
  return messagesMap[collection]
}