import { model, Schema } from "mongoose";
import { IConfig } from "@/types/collections";
import { MODEL_NAMES } from "@/types/enums/models";
import { BaseSchema, ErrorsSchema, MessagesSchema, MetaSchema } from "./schemas";

const ConfigSchema = new Schema<IConfig>(
  {
    base: { type: BaseSchema, required: true },
    meta: { type: MetaSchema, required: true },
    messages: { type: MessagesSchema, required: true },
    errors: { type: ErrorsSchema, required: true },
  },
  {
    timestamps: true
  }
)

export const Config = model<IConfig>(MODEL_NAMES.CONFIG, ConfigSchema)