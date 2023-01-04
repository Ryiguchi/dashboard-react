import styled from "styled-components";

export const WeatherContainer = styled.div`
  padding: 0 0 0 20px;
  display: flex;
  border-radius: 10px;
  background-color: rgb(255, 255, 255, 0.5);
  width: 250px;
  height: 100px;
  color: #343434;
`;

export const TempIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px 0;
`;

export const Temp = styled.span`
  font-size: 30px;
`;

export const Location = styled.span`
  font-size: 20px;
`;

export const ErrorMessage = styled.div`
  font-size: 16px;
  font-weight: 600;
  align-self: center;
  color: rgb(200, 0, 0);
`;
