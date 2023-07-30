"use client";

import { useState } from "react";
import Image from "@/models/ImageModel";

const ImageGalleryViewModel = () => {
  const [images, setImages] = useState([]);

  const handleUpload = (title, url) => {
    const newImage = new Image(Date.now(), title, url);
    setImages([...images, newImage]);
  };

  return { images, handleUpload };
};

export default ImageGalleryViewModel;
