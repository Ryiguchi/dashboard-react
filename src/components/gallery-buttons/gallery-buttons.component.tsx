import { useNavigate } from "../../../node_modules/react-router/dist/index";

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
      <a
        target="_blank"
        rel="noreferrer"
        href="https://ryiguchi.github.io/preloader/"
      >
        <Button>VJS Gallery</Button>
      </a>
    </ButtonsContainer>
  );
};

export default GalleryButtons;
