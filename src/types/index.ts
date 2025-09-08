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

export type Collection = "translate"

export type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"

export interface ApiResponse<T> {
  status: "success" | "error"
  message: string
  result?: {
    data: T
  }
}