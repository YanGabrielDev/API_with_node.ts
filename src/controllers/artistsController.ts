import { Request, Response } from "express";

export class ArtistsController {
  /**
   * Retorna os artistas
   */
  public artists = (req: Request, res: Response) => {
    res.json({ message: "Layne Staley" });
  };

  /**
   * Retorna as musicas
   */
  public musics = (req: Request, res: Response) => {
    res.json({ message: "god am" });
  };
}
