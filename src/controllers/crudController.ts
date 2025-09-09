import { Request, Response } from "express"
import { ERRORS } from "@/types/enums/errors"
import { getMessagesByCollection } from "@/types/enums/messages"
import { BaseItem, DataCollection, CRUDItem, CRUDModel } from "@/types"
import { errorResponse, requestPayload, successResponse } from "@/lib/utils"

type Functions<T, K> = {
  [K in keyof CRUDModel<T, K>]: (
    fn: Exclude<CRUDModel<T, K>[K], undefined>,
    req: Request,
    res: Response
  ) => Promise<Response>
}

export function crudController<T, K>(model: CRUDModel<T, K>, collection: DataCollection) {
  const messages = getMessagesByCollection(collection)
  const functionsKey = ["getAll", "getSingle", "create", "update", "delete"] as const

  const functions: Functions<T, K> = {
    getAll: async (getAllFn, req, res) => {
      const payload = requestPayload(req)
      const list = await getAllFn(payload)
      return res.status(200).json(successResponse(list, messages.GET_ALL))
    },
    getSingle: async (getSingleFn, req, res) => {
      const payload = requestPayload(req)
      const item = await getSingleFn(payload)
      if (!item) return res.status(404).json(errorResponse(`${collection} ${ERRORS.NOT_FOUND}`))
      return res.status(200).json(successResponse(item, messages.GET_ONE))
    },
    create: async (createFn, req, res) => {
      const item = await createFn(requestPayload(req))
      if (!item) return res.status(400).json(errorResponse(ERRORS.BAD_REQUEST))
      return res.status(201).json(successResponse(item, messages.CREATE))
    },
    update: async (updateFn, req, res) => {
      const payload = requestPayload(req)
      const item = await updateFn(payload)
      if (!item) return res.status(400).json(errorResponse(ERRORS.BAD_REQUEST))
      return res.status(200).json(successResponse(item, messages.UPDATE))
    },
    delete: async (deleteFn, req, res) => {
      const payload = requestPayload(req)
      const item = await deleteFn(payload)
      if (!item) return res.status(404).json(errorResponse(`${collection} ${ERRORS.NOT_FOUND}`))
      return res.status(200).json(successResponse(item, messages.DELETE))
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
