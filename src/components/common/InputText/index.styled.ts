import IConDelete from "assets/icon/delete.png";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const InputText = styled.input`
  all: unset;
  display: block;
  flex: 1;
  font-size: 1.3rem;
  color: ${(p) => p.theme.textColor.textColor70};
  &::placeholder {
    color: ${(p) => p.theme.textColor.textColor10};
  }
  ${mediaQuery("maxTablet")} {
    font-size: 1.6rem;
  }
`;
const Delete = styled.span`
  width: 24px;
  aspect-ratio: 1/1;
  background-image: url(${IConDelete});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: #fff;
  border: 1px solid ${(p) => p.theme.lineColor.inputLine1};
  height: ${(p) => p.theme.layout.inputHeight2};
  padding: 0 14px;
  gap: 14px;

  ${mediaQuery("maxTablet")} {
    height: ${(p) => p.theme.layout.mobileInputHeight1};
  }
  &:focus-within {
    outline: 1px solid ${(p) => p.theme.lineColor.inputFocus};
  }
  &.error {
    outline: 1px solid ${(p) => p.theme.palette.error} !important;
  }
`;

const HelperMsg = styled.p`
  padding: 0 14px 8px;
  color: ${(p) => p.theme.palette.error};
  font-size: 1.2rem;
  margin-top: 12px;
  ${mediaQuery("maxTablet")} {
    font-size: 1.4rem;
  }
`;

export const S = {
  Container,
  Wrapper,
  InputText,
  Delete,
  HelperMsg,
};
