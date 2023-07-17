import { Request, Response, NextFunction } from "express";

/**
 * Checa se chamada possui a chave de autenticacao
 */
export const apiKeyMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["apikey"];

  if (apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: "unauthorized access" });
  }

  next();
};
