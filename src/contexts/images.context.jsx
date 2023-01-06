import { useState, useEffect, createContext } from "react";

export const ImageContext = createContext({
  images: [],
  setImages: () => {},
  isLoading: true,
  setIsLoading: () => {},
});

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const value = {
    images,
    setImages,
    isLoading,
    setIsLoading,
  };

  return (
    <ImageContext.Provider value={value}>{children}</ImageContext.Provider>
  );
};
