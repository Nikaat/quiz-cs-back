import { Collection } from ".."

export const ROUTES = {
  GET_ALL: "",
  ADD: "/create",
  EDIT: "/update",
  GET_SINGLE: "/:id",
  REMOVE: "/delete/:id",
}

export const BASE_ROUTES: Record<Collection, string> = {
  translate: "/translate"
}