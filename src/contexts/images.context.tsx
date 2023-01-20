import { useState, createContext } from "react";

import { Image } from "../types";

type ImageContextType = {
  images: Image[];
  setImages: React.Dispatch<React.SetStateAction<Image[]>>;
};

export const ImageContext = createContext<ImageContextType>({
  images: [],
  setImages: () => {},
});

type ImageProviderType = {
  children: React.ReactNode;
};

export const ImageProvider = ({ children }: ImageProviderType) => {
  const [images, setImages] = useState<Image[]>([]);

  const value = {
    images,
    setImages,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
