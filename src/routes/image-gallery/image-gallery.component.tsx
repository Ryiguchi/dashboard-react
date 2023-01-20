import { useState, useEffect } from "react";
import { useNavigate } from "../../../node_modules/react-router/dist/index";

import GalleryImage from "../../components/gallery-image/gallery-image.component";
import Button from "../../components/button/button.component";

import { Image } from "../../types";

import { getPics } from "../../utilities/unsplash.utils";

import {
  PreloadContainer,
  PreloadMessage,
  Spinner,
  GalleryContainer,
  HeaderContainer,
  Title,
} from "./image-gallery.styles";

let message = "Loading images...";

export enum IS_LOADING_OPTIONS {
  hidden = "hidden",
  visible = "visible",
}

const ImageGallery = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  let imgCount = 0;

  useEffect(() => {
    (async function () {
      try {
        const { data } = await getPics();
        setImages(data);
      } catch (error: any) {
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
      <PreloadContainer
        state={
          !isLoading ? IS_LOADING_OPTIONS.hidden : IS_LOADING_OPTIONS.visible
        }
      >
        <PreloadMessage>{message}</PreloadMessage>
        <Spinner />
      </PreloadContainer>

      <GalleryContainer
        state={
          isLoading ? IS_LOADING_OPTIONS.hidden : IS_LOADING_OPTIONS.visible
        }
      >
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
