import styled from "styled-components";

export const Background = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  width: 100vw;
  height: 100vh;
  /* background: url("https://unsplash.com/photos/Y9vVr-aDq0Y/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjcyNzc2NzA2&force=true"); */
  background: url(${(props) => props.image});
  background-size: cover;
  padding: 20px;
  transition: all 0.3s;
`;
