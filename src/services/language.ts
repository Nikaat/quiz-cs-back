import { ILanguage } from "@/types/collections";
import { LanguageModel } from "@/models/language";
import { Request } from "express";
import { requestPayload } from "@/lib/utils";

export const languageServices = {
  create: async (req: Request): Promise<ILanguage | null> => {
    const payload = requestPayload<Pick<ILanguage, "key">>(req)
    const thisLanguage = new LanguageModel(payload)
    await thisLanguage.save({ validateBeforeSave: true })
    return thisLanguage.toObject()
  },
  update: async (req: Request) => {
    const payload = requestPayload<Pick<ILanguage, "key">>(req)
    return await LanguageModel.findByIdAndUpdate(
      req.params.id,
      payload,
      { new: true, runValidators: true }
    )
  },
  delete: async (req: Request) => {
    return await LanguageModel.findByIdAndDelete(
      req.params.id
    )
  },
  getAll: async (): Promise<ILanguage[]> => {
    return await LanguageModel.find()
  },
  getSingle: async (req: Request): Promise<ILanguage | null> => {
    return await LanguageModel.findById(req.params.id)
  }
}