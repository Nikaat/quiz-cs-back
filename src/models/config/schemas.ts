import { Schema } from "mongoose";

export const IconsSchema = new Schema<Config.Icons>(
  {
    favicon: { type: String, default: "" },
    "512×512": { type: String, default: "" },
    "384×384": { type: String, default: "" },
    "192×192": { type: String, default: "" },
    "152×152": { type: String, default: "" },
    "144×144": { type: String, default: "" },
    "128×128": { type: String, default: "" },
    "96×96": { type: String, default: "" },
    "72×72": { type: String, default: "" },
    "48×48": { type: String, default: "" },
  },
  { _id: false }
);

export const BaseSchema = new Schema<Config.Base>(
  {
    logo: { type: String, default: "" },
    icons: { type: IconsSchema, required: true },
  },
  { _id: false }
);

export const MetaSchema = new Schema<Config.Meta>(
  {
    siteTitle: { type: String, required: true },
    description: { type: String, default: "" },
    quizTitle: { type: String, default: "" },
    checkoutTitle: { type: String, default: "" },
    notFoundTitle: { type: String, default: "" },
    confirmPayTitle: { type: String, default: "" },
    preCheckoutTitle: { type: String, default: "" },
    serverErrorTitle: { type: String, default: "" },
    testimonialsTitle: { type: String, default: "" },
    authenticationTitle: { type: String, default: "" },
    additionalPlansTitle: { type: String, default: "" },
  },
  { _id: false }
);

export const SuccessMessagesSchema = new Schema<Config.SuccessMessages>(
  {
    enter: { type: String, required: true },
    out: { type: String, required: true },
    submit: { type: String, required: true },
  },
  { _id: false }
);

export const MessagesSchema = new Schema<Config.Messages>(
  {
    success: { type: SuccessMessagesSchema, required: true },
  },
  { _id: false }
);

export const InputErrorsSchema = new Schema<Config.InputErrors>(
  {
    default: { type: String, required: true },
    empty: { type: String, required: true },
    required: { type: String, required: true },
    length: { type: String, required: true },
  },
  { _id: false }
);

export const ErrorsSchema = new Schema<Config.Errors>(
  {
    input: { type: InputErrorsSchema, required: true },
    timeout: { type: String, required: true },
    general: { type: String, required: true },
    forbiden: { type: String, required: true },
    connection: { type: String, required: true },
    authorization: { type: String, required: true },
  },
  { _id: false }
);