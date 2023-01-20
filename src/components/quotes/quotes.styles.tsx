import styled from "styled-components";

export const QuoteContainer = styled.div`
  grid-column: 3;
  grid-row: 3;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.5);
  color: #343434;
  padding: 10px;
  min-width: 250px;
  min-height: 200px;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const QuoteText = styled.p`
  font-weight: 600;
  margin-bottom: 10px;
`;

export const Author = styled.span`
  font-style: italic;
`;

export const ErrorMessage = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: rgb(200, 0, 0);
  margin-top: 50px;
`;
