import { StyledButton } from "./button.styles";

const Button = ({ text, callBack }) => {
  return <StyledButton onClick={callBack}>{text}</StyledButton>;
};

export default Button;
