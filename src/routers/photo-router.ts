import { Router, Request, Response } from "express";
import { photoServices, updateLikes } from "../services/photo-services";

export const photosRouter = Router();

photosRouter.get('/', async (req: Request, res: Response) => {
     const result = await photoServices.getAllPhotos();

     res.status(200).send(result);
});

photosRouter.post('/', async (req: Request, res: Response) => {
     const { photoUrl, description } = req.body

     if (!photoUrl) {

          res.status(400).send("PhotoUrl is required")
          return;
     }
     // adding a object to match the model of the item were expecting to return!!! ({ , })
     const insteredId = await photoServices.createPhoto({ photoUrl, description })

     res.status(201).send({ insteredId });
});
// patch / photo/{PHOTO_ID} with a body of { likes: 1}
photosRouter.patch('/:id', async (req: Request, res: Response) => {
     const { id } = req.params
     const { likes } = req.body
     console.log('likes',likes)
     if(!likes){
          res.status(400).send("Likes are required.")
     }

     const photo = await photoServices.updateLikes(id, likes)
     
     res.status(200).json(photo)
})
