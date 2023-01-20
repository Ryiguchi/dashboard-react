import styled from "styled-components";

export const ImageContainer = styled.div`
  border: 2px solid aqua;
  background-color: #ccc;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: calc(100% - 30px);

  object-fit: cover;
`;

export const Name = styled.span`
  display: flex;
  align-items: center;

  color: #333;
  font-size: 14px;
  padding: 0 10px;
  height: 15px;
`;
