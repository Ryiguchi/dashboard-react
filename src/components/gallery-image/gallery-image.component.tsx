import { ImageContainer, Image, Name } from "./gallery-image.styles";

import { Image as ImageType } from "../../types";

type GalleryImageProps = {
  imgData: ImageType;
  callback: () => void;
};

const GalleryImage = ({ callback, imgData }: GalleryImageProps) => {
  const { urls, user, alt_description } = imgData;
  const { regular: imgUrl } = urls;
  const { name } = user;
  return (
    <ImageContainer>
      <Image onLoad={callback} src={imgUrl} alt={alt_description}></Image>
      <Name>{`Photo by: ${name}`}</Name>
    </ImageContainer>
  );
};

export default GalleryImage;
