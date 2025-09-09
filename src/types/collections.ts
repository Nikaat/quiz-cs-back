import { Date, Document, Types } from "mongoose"

type IBase = {
  createdAt: Date
  updatedAt: Date
} & Document

export interface ILanguage extends IBase {
  key: string
}

export interface IProject extends IBase {
  key: string
  types: string[]
  languages: Types.ObjectId[]
}

export interface ITranslation extends IBase {
  project: Types.ObjectId
  language: Types.ObjectId
  translations: Record<string, string>
}

export interface ITemplate extends IBase {
  notFound: Errors.Content
  constants: Constants.Config
  serverError: Errors.Content
  confirmPay: Authentication.Config
  authentication: Authentication.Config
}