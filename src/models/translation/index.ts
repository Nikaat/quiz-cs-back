import { Schema, model } from "mongoose"
import { MODEL_NAMES } from "@/types/enums/models"
import { ITranslation } from "@/types/collections"

const TranslationSchema = new Schema<ITranslation>({
  project: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.PROJECT },
  language: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.LANGUAGE },
  translations: { type: Map, of: String, default: {} }
})

export const TranslationModel = model<ITranslation>(MODEL_NAMES.TRANSLATION, TranslationSchema)