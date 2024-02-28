import { PropsWithChildren } from "react";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const StyledLabel = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${(p) => p.theme.textColor.textColor50};
  &.required:after {
    content: "*";
    color: ${(p) => p.theme.palette.error};
  }
  span {
    font-weight: 500;
    color: ${(p) => p.theme.textColor.textColor20};
    padding-left: 6px;
  }
  ${mediaQuery("maxTablet")} {
    font-size: 1.3rem;
  }
`;

interface InputLabelProps extends PropsWithChildren {
  required?: boolean;
}
const InputLabel = ({ required, children }: InputLabelProps) => {
  return (
    <StyledLabel className={required ? "required" : ""}>{children}</StyledLabel>
  );
};

export default InputLabel;
