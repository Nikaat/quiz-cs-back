import { Schema } from "mongoose";

const DiscountSchema = new Schema<Checkout.Discount>(
  {
    duration: { type: Number, required: true },
    title: { type: String, required: true },
  },
  { _id: false }
);

const SpecialOfferSchema = new Schema<Checkout.SpecialOffer>(
  {
    specialOfferStyle: { type: String, enum: ["default"], required: true },
    title: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
  },
  { _id: false }
);

export const OfferSchema = new Schema<Checkout.Offer>(
  {
    special: { type: SpecialOfferSchema, required: true },
    discount: { type: DiscountSchema, required: true },
  },
  { _id: false }
);

