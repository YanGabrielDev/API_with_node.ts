import {Request, Response} from 'express'

export class ArtistsController{
  public artists = (req: Request, res: Response) => {
    res.json({message: "Layne Staley"})
  }
}