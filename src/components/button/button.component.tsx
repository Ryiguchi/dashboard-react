import { FC, MouseEvent } from "react";
import { StyledButton } from "./button.styles";

type ButtonProps = {
  callBack?: (event: MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const Button: FC<ButtonProps> = ({ children, callBack }) => {
  return <StyledButton onClick={callBack}>{children}</StyledButton>;
};

export default Button;
