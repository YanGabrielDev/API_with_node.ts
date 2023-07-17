import express, {Request, Response, NextFunction} from 'express'
import bodyParser from "body-parser"
import artistsRoute from "./routes/artistsRoute"
import { apiKeyMiddleware } from './middleware/apiKeyMiddleware'

const app = express()

// Middleware
app.use(bodyParser.json())
app.use(apiKeyMiddleware)
app.use("/artists", artistsRoute)

// Treating erros in middleware
app.use((req: Request,res: Response, next: NextFunction) => {
  // console.error(err.stack);
  res.status(500).json({message: "Internal Server Error"})
})

export default app