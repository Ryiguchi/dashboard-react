import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import GalleryImage from "../../components/gallery-image/gallery-image.component";
import Button from "../../components/button/button.component";

import { getPics, handleErrors } from "../../utilities/unsplash.utils";

import {
  PreloadContainer,
  PreloadMessage,
  Spinner,
  GalleryContainer,
  HeaderContainer,
  Title,
} from "./image-gallery.styles";

let message = "Loading images...";

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  let imgCount = 0;

  useEffect(() => {
    (async function () {
      try {
        const { data } = await getPics;
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const goToDashboardHandler = () => {
    navigate("/");
  };

  const countLoadedImages = () => {
    imgCount++;
    if (imgCount === images.length - 1) setIsLoading(false);
  };

  return (
    <>
      <PreloadContainer state={!isLoading ? "hidden" : "visible"}>
        <PreloadMessage>{message}</PreloadMessage>
        <Spinner />
      </PreloadContainer>

      <GalleryContainer state={isLoading ? "hidden" : "visible"}>
        <HeaderContainer>
          <Title>Picture Gallery from Unsplash</Title>
          <Button callBack={goToDashboardHandler}>Back to Dashboard</Button>
        </HeaderContainer>

        {images.map((img) => (
          <GalleryImage
            callback={countLoadedImages}
            imgData={img}
            key={img.id}
          ></GalleryImage>
        ))}
      </GalleryContainer>
    </>
  );
};

export default ImageGallery;
