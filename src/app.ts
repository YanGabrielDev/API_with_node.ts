import express, {Request, Response, NextFunction} from 'express'
import bodyParser from "body-parser"
import artistsRoute from "./routes/artistsRoute"
import { apiKeyMiddleware } from './middleware/apiKeyMiddleware'
import {config} from 'dotenv'
import cors from 'cors'

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(cors())
app.use("/artists", apiKeyMiddleware,artistsRoute)
config()

// Treating erros in middleware
app.use((req: Request,res: Response, next: NextFunction) => {
  // console.error(err.stack);
  res.status(500).json({message: "Internal Server Error"})
})

export default app