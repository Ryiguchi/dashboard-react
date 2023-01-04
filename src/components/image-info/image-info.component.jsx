import { ImageInfoContainer, Name } from "./image-info.styles";

const ImageInfo = ({ name, link }) => {
  return (
    <ImageInfoContainer>
      <span>Photo by:</span>
      <br></br>
      <Name href={link} target="_blank">
        {name}
      </Name>
    </ImageInfoContainer>
  );
};

export default ImageInfo;
