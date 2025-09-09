import { DataCollection } from ".."

export const ROUTES = {
  GET_ALL: "",
  ADD: "/create",
  EDIT: "/update",
  GET_SINGLE: "/:id",
  DELETE: "/delete/:id",
}

export const BASE_ROUTES: Record<DataCollection, string> = {
  config: "/configs",
  project: "/projects",
  language: "/languages",
  template: "/templates",
  composition: "/compositions",
  translation: "/translations",
}