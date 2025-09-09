import { IBase, ILanguage } from "@/types/collections";
import { crudController } from "./crudController";
import { languageServices } from "@/services/language";

export const languageController = crudController<ILanguage, IBase>(languageServices, "language")