import styled from "styled-components";

export const ArticleContainer = styled.div`
  grid-row: 3;
  grid-column: 1 / 3;
  align-self: flex-end;
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.5);
  color: #343434;
  padding: 10px;
  width: 450px;
  height: 200px;
`;

export const Title = styled.a`
  color: #343434;
  font-weight: 700;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
`;

export const TextContainer = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

export const ErrorMessage = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: rgb(200, 0, 0);
  margin-top: 50px;
`;
