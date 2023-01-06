import { ImageInfoContainer, Name } from "./image-info.styles";

const ImageInfo = ({ name, link }) => {
  return (
    <ImageInfoContainer>
      <span>Photo by:</span>
      <Name href={link} target="_blank">
        {name}
      </Name>
    </ImageInfoContainer>
  );
};

export default ImageInfo;
