import express from "express"
import { ArtistsController } from "../controllers/artistsController"
const artistsController = new ArtistsController()
const router = express.Router()

router.get("/", artistsController.artists)

export default router