import styled from "styled-components";

export const PreloadContainer = styled.div`
  display: ${(props) => (props.state === "hidden" ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

export const PreloadMessage = styled.p`
  font-size: 1.6rem;
  color: aqua;
  text-transform: uppercase;
`;

export const Spinner = styled.div`
  height: 30px;
  width: 30px;
  border-top: 3px solid aqua;
  border-right: 3px solid transparent;
  border-radius: 50%;
  animation: rotation 0.8s linear infinite;

  @keyframes rotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const GalleryContainer = styled.div`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: #000;
  display: ${(props) => (props.state === "hidden" ? "none" : "grid")};
  grid-template-columns: repeat(3, auto);
  gap: 10px;
  padding: 0 20px 20px 20px;
`;

export const HeaderContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: aqua;
  text-align: center;
  padding: 10px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-left: 50vw;
  transform: translateX(-50%);
`;
