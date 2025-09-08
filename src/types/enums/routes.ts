import { DataCollection } from ".."

export const ROUTES = {
  GET_ALL: "",
  ADD: "/create",
  EDIT: "/update",
  GET_SINGLE: "/:id",
  REMOVE: "/delete/:id",
}

export const BASE_ROUTES: Record<DataCollection, string> = {
  translation: "/translation",
  project: "/project",
  language: "/language"
}