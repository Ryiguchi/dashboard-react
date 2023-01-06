import { StyledButton } from "./button.styles";

const Button = ({ children, callBack }) => {
  return <StyledButton onClick={callBack}>{children}</StyledButton>;
};

export default Button;
