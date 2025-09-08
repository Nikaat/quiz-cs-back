import { Schema, model } from "mongoose"
import { MODEL_NAMES } from "@/types/enums/models"
import { ITranslation } from "@/types/collections"

const translationSchema = new Schema<ITranslation>({
  project: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.PROJECT },
  language: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.LANGUAGE },
  translations: { type: Map, of: String, default: {} }
})

export const Translation = model<ITranslation>(MODEL_NAMES.TRANSLATION, translationSchema)