import { Schema, model } from "mongoose";
import { MODEL_NAMES } from "@/types/enums/models";
import { IProject } from "@/types/collections";

const ProjectSchema = new Schema<IProject>(
  {
    key: { type: String, required: true },
    types: [{ type: String, required: true }],
    languages: [{ type: Schema.Types.ObjectId, ref: MODEL_NAMES.LANGUAGE }]
  },
  {
    timestamps: true
  }
);

export const Project = model<IProject>(MODEL_NAMES.PROJECT, ProjectSchema);