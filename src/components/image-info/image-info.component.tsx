import { ImageInfoContainer, Name } from "./image-info.styles";

type ImageInfoProps = {
  name: string;
  link: string;
};

const ImageInfo = ({ name, link }: ImageInfoProps) => {
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
