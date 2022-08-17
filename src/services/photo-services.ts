import { db } from "../db/db";
import { Photo } from "../models/photo";
// promise is just in case something happens in the event it does return the value of promise <>
interface PhotoServices {
    updateLikes(id:string, inc:number ): Promise<Photo>;
    createPhoto(photo:Photo): Promise<string>;
    createComment(id:string, comment:string): Promise<Photo>;
    getAllPhotos(): Promise<Photo[]>;
}
const photosCollections = db.collection<Photo>("photos");

export const getAllPhotos = async (): Promise<Photo[]> => {
    const photos = await photosCollections.find().toArray()

    return photos;
};