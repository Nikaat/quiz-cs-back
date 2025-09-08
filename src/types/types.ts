export interface AppError extends Error {
  status?: number;
}

export interface Config {
  port: number
  nodeEnv: string
  baseOfRoute: string
  allowedOrigins: string[]
}

