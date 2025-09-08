import { asyncHandlerFn } from "@/types";
import { NextFunction, Request, Response } from "express";

export const asyncHandler = (fn: asyncHandlerFn) =>
  (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)