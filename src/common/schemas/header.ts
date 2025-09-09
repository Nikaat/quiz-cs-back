import { Schema } from "mongoose";

const HeaderMenuItemSchema = new Schema<Shared.MenuItem>(
  {
    key: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, enum: ["link"], required: true },
    path: { type: String, required: true },
  },
  { _id: false }
);

const ButtonItemSchema = new Schema<Shared.ButtonItem>(
  {
    key: { type: String, required: true },
    title: { type: String, required: true },
    type: { type: String, enum: ["navigator", "reset"], required: true },
    path: { type: String, default: "" },
  },
  { _id: false }
);

export const HeaderSchema = new Schema<Shared.Header>(
  {
    headerStyle: { type: String, enum: ["default"], required: true },
    menuItems: { type: [HeaderMenuItemSchema], default: [] },
    buttonItems: { type: [ButtonItemSchema], default: [] },
  },
  { _id: false }
);