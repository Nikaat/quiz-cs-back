import { Schema, model } from "mongoose"
import { ILanguage } from "@/types/collections"
import { MODEL_NAMES } from "@/types/enums/models"

const languageSchema = new Schema<ILanguage>(
  {
    key: { type: String, required: true, },
  },
  {
    timestamps: true
  })

export const Language = model<ILanguage>(MODEL_NAMES.LANGUAGE, languageSchema)