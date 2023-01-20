import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  width: fit-content;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 16px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgb(255, 255, 255, 0.6);
  }
`;
