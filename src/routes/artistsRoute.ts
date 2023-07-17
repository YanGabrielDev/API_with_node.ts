import {Router} from "express"
import { ArtistsController } from "../controllers/artistsController"
const artistsController = new ArtistsController()
const  router = Router()

router.get("/", artistsController.artists)
router.get("/oi", artistsController.musics)

export default router