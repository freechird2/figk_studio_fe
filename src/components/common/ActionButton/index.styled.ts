import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

//사이즈별 스타일
const buttonSizeModule = css`
  --form: 48px;
  --bigCta: 42px;
  --cta: 36px;
  --sub: 32px;
  --small: 26px;
  --notice: 32px;

  --mobileForm: 56px;
  --mobileBigCta: 56px;
  --mobileCta: 36px;
  --mobileSub: 36px;
  --mobileSmall: 40px;
  --mobileNotice: 46px;
  &.form {
    font-size: 1.4rem;
    height: var(--form);
    ${mediaQuery("mobile")} {
      font-size: 1.5rem;
      height: var(--mobileForm);
    }
  }
  &.bigCta {
    font-size: 1.4rem;
    height: var(--bigCta);
    /* padding: 0 30px; */
    ${mediaQuery("mobile")} {
      font-size: 1.5rem;
      height: var(--mobileBigCta);
    }
  }
  &.cta {
    font-size: 1.4rem;
    height: var(--cta);
    ${mediaQuery("mobile")} {
      font-size: 1.5rem;
      height: var(--mobileCta);
    }
  }
  &.sub {
    font-size: 1.3rem;
    height: var(--sub);
    ${mediaQuery("mobile")} {
      font-size: 1.4rem;
      height: var(--mobileSub);
    }
  }
  &.small {
    font-size: 1.2rem;
    height: var(--small);
    padding: 0 12px;
    ${mediaQuery("mobile")} {
      font-size: 1.3rem;
      height: var(--mobileSmall);
    }
  }

  &.notice {
    font-size: 1.3rem;
    height: var(--notice);
    padding: 0 24px;
    ${mediaQuery("mobile")} {
      font-size: 1.4rem;
      height: var(--mobileNotice);
    }
  }
`;
//모드별 스타일
export const buttonModeModuel = css`
  &.initial {
    border: 0;
    background-color: transparent;
    color: transparent;
  }
  &.solid {
    border: 1px solid ${(p) => p.theme.palette.black10};
    background-color: ${(p) => p.theme.palette.black10};
    color: #fff;
    @media (hover: hover) {
      &:hover {
        background-color: ${(p) => p.theme.palette.black20};
      }
    }
  }
  &.line {
    border: 1px solid ${(p) => p.theme.palette.black20};
    background-color: transparent;
    color: ${(p) => p.theme.textColor.textColor70};
    @media (hover: hover) {
      &:hover {
        background-color: var(--line-hover-bg);
        color: ${(p) => p.theme.textColor.textColor90};
      }
    }
  }
  &.popupLine {
    border: 1px solid ${(p) => p.theme.palette.black20};
    background-color: #fff;
    @media (hover: hover) {
      &:hover {
        background-color: var(--line-hover-bg);
      }
    }
  }
  &.inputLine {
    border: 1px solid ${(p) => p.theme.palette.gray70};
    background-color: transparent;
    color: ${(p) => p.theme.textColor.textColor70};
    @media (hover: hover) {
      &:hover {
        background-color: var(--line-hover-bg);
        color: ${(p) => p.theme.textColor.textColor90};
      }
    }
  }
  &.disabled {
    color: #fff;
    border: 1px solid ${(p) => p.theme.palette.disabled};
    background-color: ${(p) => p.theme.palette.disabled};
    cursor: not-allowed;
  }
  /* &.voted {
    border: 1px solid ${(p) => p.theme.palette.point1};
    background-color: transparent;
    color: ${(p) => p.theme.palette.point1};
    @media (hover: hover) {
      &:hover {
        background-color: rgba(255, 77, 0, 0.04);
        color: ${(p) => p.theme.palette.point1};
      }
    }
  } */
`;

const StyledCallToAction = css`
  --form: 48px;
  --bigCta: 42px;
  --cta: 36px;
  --sub: 32px;
  --small: 26px;

  --mobileSub: 46px;

  --mobileForm: 56px;
  --mobileBigCta: 42px;
  --mobileCta: 36px;
  --mobileSmall: 26px;

  --line-hover-bg: rgba(255, 255, 255, 0.7);

  padding: 0 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  white-space: nowrap;
  font-weight: 500;
  transition: 0.2s ease;
  cursor: pointer;
  user-select: none;
  //사이즈별 스타일
  ${buttonSizeModule}
  //모드별 스타일
  ${buttonModeModuel}
`;

const Button = styled.button<{ width: "100%" | "auto" }>`
  width: ${(p) => p.width};
  ${StyledCallToAction}
`;
const Anchor = styled(Link)`
  ${StyledCallToAction}
`;

export const Action = {
  Button,
  Anchor,
};
