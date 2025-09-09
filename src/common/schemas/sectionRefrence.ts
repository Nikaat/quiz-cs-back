import { Schema } from "mongoose";

export const SectionReferenceSchema = new Schema<Checkout.SectionReference>(
  {
    sectionType: {
      type: String,
      enum: [
        "banner", "bmiComparison", "button", "comments", "plans", "payment", "faq",
        "groupImage", "guarantee", "customHTML", "whatYouGet", "successRate",
        "warning", "proceedToProgram", "confirm"
      ],
      required: true
    },
    key: { type: String, required: true },
    path: { type: String, required: true },
  },
  { _id: false }
);
