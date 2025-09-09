import { Schema, model } from "mongoose"
import { ITemplate } from "@/types/collections"
import { MODEL_NAMES } from "@/types/enums/models"
import { AuthenticationTemplateSchema, ConstantsTemplateSchema, ErrorTemplateSchema } from "./schemas"

const TemplateSchema = new Schema<ITemplate>({
  authentication: AuthenticationTemplateSchema,
  confirmPay: AuthenticationTemplateSchema,
  notFound: ErrorTemplateSchema,
  serverError: ErrorTemplateSchema,
  constants: ConstantsTemplateSchema
}, {
  timestamps: true
})

export const Template = model<ITemplate>(MODEL_NAMES.TEMPLATE, TemplateSchema)