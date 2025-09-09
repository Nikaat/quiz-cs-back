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

export type DataCollection = "project" | "language" | "translation" | "template" | "config" | "composition"

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export interface ApiResponse<T> {
  status: "success" | "error"
  message: string
  result?: {
    data: T
  }
}

export type CRUDItem<T> = T | null | undefined

export type CRUDModel<T, K> = {
  create?: (req: Request) => Promise<CRUDItem<T>>
  delete?: (req: Request) => Promise<CRUDItem<T>>
  update?: (req: Request) => Promise<CRUDItem<T>>
  getSingle?: (req: Request) => Promise<CRUDItem<T>>
  getAll: (req: Request) => Promise<T[] | undefined | null>
}
