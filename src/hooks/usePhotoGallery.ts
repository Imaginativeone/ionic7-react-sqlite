import { useState } from 'react';
import { Photo } from '../types/Photo';

export const usePhotoGallery = () => {

  const [photos, setPhotos] = useState<Photo[]>([]);

  const takePhoto = async () => {
    console.log("Camera button was clicked - Photo Taken");
  };
  const deletePhoto = async (fileName: string) => {};

  return {
    photos,
    takePhoto,
    deletePhoto
  }
};
