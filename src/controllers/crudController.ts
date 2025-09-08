import { Request, Response } from "express"
import { ERRORS } from "@/types/enums/errors"
import { getMessagesByCollection } from "@/types/enums/messages"
import { BaseItem, Collection, CRUDItem, CRUDModel } from "@/types"
import { errorResponse, requestPayload, successResponse } from "@/lib/utils"

type Functions<T, K> = {
  [K in keyof CRUDModel<T, K>]: (
    fn: Exclude<CRUDModel<T, K>[K], undefined>,
    req: Request,
    res: Response
  ) => Promise<Response>
}

export function crudController<T, K>(model: CRUDModel<T, K>, collection: Collection) {
  const messages = getMessagesByCollection(collection)
  const functionsKey = ["getAll", "getSingle", "create", "update", "remove"] as const

  const functions: Functions<T, K> = {
    getAll: async (getAll, req, res) => {
      const payload = requestPayload(req)
      const list = await getAll(payload)
      return res.status(200).json(successResponse(list, messages.GET_ALL))
    },
    getSingle: async (getSingle, req, res) => {
      const payload = requestPayload(req)
      const item = await getSingle(payload)
      if (!item) return res.status(404).json(errorResponse(`${collection} ${ERRORS.NOT_FOUND}`))
      return res.status(200).json(successResponse(item, messages.GET_ONE))
    },
    create: async (create, req, res) => {
      const item = await create(requestPayload(req))
      if (!item) return res.status(400).json(errorResponse(ERRORS.BAD_REQUEST))
      return res.status(201).json(successResponse(item, messages.CREATE))
    },
    update: async (update, req, res) => {
      const payload = requestPayload(req)
      const item = await update(payload)
      if (!item) return res.status(400).json(errorResponse(ERRORS.BAD_REQUEST))
      return res.status(200).json(successResponse(item, messages.UPDATE))
    },
    remove: async (remove, req, res) => {
      const payload = requestPayload(req)
      const item = await remove(payload)
      if (!item) return res.status(404).json(errorResponse(`${collection} ${ERRORS.NOT_FOUND}`))
      return res.status(200).json(successResponse(item, messages.REMOVE))
    },
  }

  const thisController = {} as Record<typeof functionsKey[number], (req: Request, res: Response) => Promise<Response>>

  functionsKey.forEach(key => {
    const fn = model[key]
    if (!!fn) {
      const thisModel = fn as (...arg: any) => Promise<BaseItem<T>[] | null | undefined> & Promise<CRUDItem<T>>
      thisController[key] = (req: Request, res: Response) => functions[key]!(thisModel, req, res)
    }
  })

  return thisController
}
