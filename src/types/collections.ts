import { Date, Document, Types } from "mongoose"

export type IBase = {
  createdAt: Date
  updatedAt: Date
} & Omit<Document, "errors">

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
  confirmPay: Omit<Authentication.Config, "project" | "language"> & {
    project: Types.ObjectId
    language: Types.ObjectId
  }
  authentication: Omit<Authentication.Config, "project" | "language"> & {
    project: Types.ObjectId
    language: Types.ObjectId
  }
}

export interface IConfig extends IBase, Config.Config { }

export interface IComposition extends IBase, Omit<Checkout.Config, "language" | "project"> {
  project: Types.ObjectId
  language: Types.ObjectId
}