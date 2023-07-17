import {Request, Response, NextFunction} from 'express'
export const apiKeyMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.headers["apiKey"];

  if(apiKey !== process.env.API_KEY){
     return res.status(401).json({message: "unauthorized access"})
  }

  next()
}