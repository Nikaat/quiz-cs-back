import { NextFunction, Request, Response } from "express";

export interface AppError extends Error {
  status?: number;
}

export interface Config {
  port: number
  nodeEnv: string
  baseOfRoute: string
  allowedOrigins: string[]
}

export type asyncHandlerFn = (req: Request, res: Response, next: NextFunction) => Promise<any>

export type ModelFunctions = "getAll" | "getSingle" | "create" | "update" | "remove"

export type DataCollection = "project" | "language" | "translation" | "template" | "config"

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export interface ApiResponse<T> {
  status: "success" | "error"
  message: string
  result?: {
    data: T
  }
}

export type BaseItem<T> = {
  _id: string
  createdAt: string
  updatedAt: string
} & T
export type CRUDItem<T> = BaseItem<T> | null | undefined

export type CRUDModel<T, K> = {
  create?: (payload: any) => Promise<CRUDItem<T>>
  remove?: (payload: any) => Promise<CRUDItem<T>>
  update?: (payload: any) => Promise<CRUDItem<T>>
  getSingle?: (payload: any) => Promise<CRUDItem<T>>
  getAll: (payload: any) => Promise<BaseItem<T>[] | undefined | null>
}
