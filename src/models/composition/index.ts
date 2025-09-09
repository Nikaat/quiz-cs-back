import { model, Schema } from "mongoose";
import { OfferSchema } from "@/common/schemas/offer";
import { HeaderSchema } from "@/common/schemas/header";
import { SectionReferenceSchema } from "@/common/schemas/sectionRefrence";
import { IComposition } from "@/types/collections";
import { MODEL_NAMES } from "@/types/enums/models";

const CompositionSchema = new Schema<IComposition>(
  {
    type: { type: String, required: true },
    project: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.PROJECT, required: true },
    language: { type: Schema.Types.ObjectId, ref: MODEL_NAMES.LANGUAGE, required: true },
    header: HeaderSchema,
    offer: { type: OfferSchema, required: true },
    sections: { type: [SectionReferenceSchema], required: true },
  },
  { _id: false }
);

export const CompositionModel = model(MODEL_NAMES.COMPOSITION, CompositionSchema)