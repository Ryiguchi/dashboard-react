import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";

import { ButtonsContainer } from "./gallery-buttons.styles";

const GalleryButtons = () => {
  const navigate = useNavigate();

  const goToGalleryHandler = () => {
    navigate("/gallery");
  };
  return (
    <ButtonsContainer>
      <Button callBack={goToGalleryHandler}>React Gallery</Button>
      <a target="_blank" href="https://ryiguchi.github.io/preloader/">
        <Button>VJS Gallery</Button>
      </a>
    </ButtonsContainer>
  );
};

export default GalleryButtons;
