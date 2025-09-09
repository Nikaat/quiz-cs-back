import { Schema } from "mongoose";
import { OfferSchema } from "@/common/schemas/offer";
import { HeaderSchema } from "@/common/schemas/header";
import { SectionReferenceSchema } from "@/common/schemas/sectionRefrence";
import { IComposition } from "@/types/collections";

export const CompositionConfigSchema = new Schema<IComposition>(
  {
    type: { type: String, required: true },
    project: { type: String, required: true },
    language: { type: String, required: true },
    header: HeaderSchema,
    offer: { type: OfferSchema, required: true },
    sections: { type: [SectionReferenceSchema], required: true },
  },
  { _id: false }
);