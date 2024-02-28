import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

export const InputFile = styled.input`
  position: absolute;
  opacity: 0;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: red;
  cursor: pointer;
`;

const CopyInputFile = styled.span`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 1.3rem;
  font-weight: 300;
  color: ${(p) => p.theme.textColor.textColor70};
  &.placeholder {
    color: ${(p) => p.theme.textColor.textColor10};
  }
  ${mediaQuery("maxTablet")} {
    font-size: 1.6rem;
  }
`;

export const File = {
  InputFile,
  CopyInputFile,
};
