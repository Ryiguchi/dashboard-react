import { ImageContainer, Image, Name } from "./gallery-image.styles";

const GalleryImage = ({ callback, imgData }) => {
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
