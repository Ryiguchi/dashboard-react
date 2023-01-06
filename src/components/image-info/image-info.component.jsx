import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import { ImageInfoContainer, Name } from "./image-info.styles";

const ImageInfo = ({ name, link }) => {
  const navigate = useNavigate();

  const goToGalleryHandler = () => {
    navigate("/gallery");
  };

  return (
    <ImageInfoContainer>
      <span>Photo by:</span>
      <Name href={link} target="_blank">
        {name}
      </Name>
      <Button callBack={goToGalleryHandler}>Go To Gallery</Button>
    </ImageInfoContainer>
  );
};

export default ImageInfo;
