import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #fff;
  border: 1px solid ${(p) => p.theme.lineColor.inputLine1};
  padding: 10px 14px;
  color: ${(p) => p.theme.textColor.textColor70};
  &:focus-within {
    outline: 1px solid ${(p) => p.theme.lineColor.inputFocus};
  }
  &.error {
    outline: 1px solid ${(p) => p.theme.palette.error} !important;
  }
  span {
    font-size: 1.2rem;
    color: ${(p) => p.theme.textColor.textColor10};
  }
`;
const Textarea = styled.textarea`
  padding: 0;
  font-family: "Pretendard";
  appearance: none;
  outline: none;
  width: 100%;
  background-color: transparent;
  border: none;
  resize: none;
  font-size: 1.3rem;
  line-height: 1.5;
  word-break: break-all;
  &::placeholder {
    color: ${(p) => p.theme.textColor.textColor10};
  }
  ${mediaQuery("maxTablet")} {
    font-size: 1.6rem;
  }
`;
export const S = {
  Container,
  Textarea,
};
