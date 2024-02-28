import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

export const StyledModalContents = styled.div`
  --maxVhRatio: 64;

  --scrollWidth: 4px;
  --scrollPosition: 26px;
  --scrollBorderRadius: 10px;
  /* 모바일 */
  --mobileMaxVhRatio: 60;
  --mobileScrollPosition: 16px;

  max-height: ${`calc(1dvh * var(--maxVhRatio))`};
  overflow: hidden overlay;
  margin-right: -20px;
  padding-right: 12px;

  &::-webkit-scrollbar {
    width: var(--scrollWidth); /* 스크롤바의 너비 */
  }

  &::-webkit-scrollbar-thumb {
    width: var(--scrollWidth);
    height: var(--scrollWidth); /* 스크롤바의 길이 */
    background-color: ${(p) => p.theme.palette.gray90}; /* 스크롤바의 색상 */
    border-radius: var(--scrollBorderRadius);
  }

  &::-webkit-scrollbar-track {
    background-color: ${(p) => p.theme.palette.light50};
    border-radius: var(--scrollBorderRadius);
  }

  ${mediaQuery("mobile")} {
    max-height: ${`calc(1dvh * var(--mobileMaxVhRatio))`};
  }
`;

interface ModalContentsProps extends PropsWithChildren {}

const ModalContents = ({ children }: ModalContentsProps) => {
  return <StyledModalContents>{children}</StyledModalContents>;
};

export default ModalContents;
