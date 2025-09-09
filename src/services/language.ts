import { ILanguage } from "@/types/collections";
import { LanguageModel } from "@/models/language";

export const languageServices = {
  create: async (payload: Pick<ILanguage, "key">) => {
    const thisLanguage = new LanguageModel(payload)
    await thisLanguage.save({ validateBeforeSave: true })
    return thisLanguage
  },
  update: async (id: string, payload: Pick<ILanguage, "key">) => {
    return await LanguageModel.findByIdAndUpdate(
      id,
      payload,
      { new: true, runValidators: true }
    )
  },
  delete: async (id: string) => {
    return await LanguageModel.findByIdAndDelete(
      id
    )
  },
  getAll: async (): Promise<ILanguage[]> => {
    return await LanguageModel.find()
  },
  getSingle: async (id: string): Promise<ILanguage | null> => {
    return await LanguageModel.findById(id)
  }
}