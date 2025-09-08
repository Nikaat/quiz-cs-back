import { Date, Document, Types } from "mongoose"

export interface ILanguage extends Document {
  key: string
  createdAt: Date
  updatedAt: Date
}

export interface IProject extends Document {
  title: string
  types: string[]
  languages: Types.ObjectId[]
  createdAt: Date
  updatedAt: Date
}

export interface ITranslation extends Document {
  project: Types.ObjectId
  language: Types.ObjectId
  translations: Record<string, string>
  createdAt: Date
  updatedAt: Date
}
