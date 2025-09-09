import { Schema, model } from "mongoose"
import { ILanguage } from "@/types/collections"
import { MODEL_NAMES } from "@/types/enums/models"

const LanguageSchema = new Schema<ILanguage>(
  {
    key: { type: String, required: true, },
  },
  {
    timestamps: true
  })

export const Language = model<ILanguage>(MODEL_NAMES.LANGUAGE, LanguageSchema)