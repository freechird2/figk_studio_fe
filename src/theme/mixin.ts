import { css } from "styled-components";
import { mediaQuery } from "./mediaQuery";
import theme from "theme";
//텍스트 카드 공통 스타일
const CardContainer = css`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  background-color: #fff;
`;

const FilterItemContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.lineColor.inputLine1};
  height: ${(p) => p.theme.layout.inputHeight1};
  padding: 0px 14px;
  background-color: #fff;
  gap: 12px;
  font-size: 1.3rem;
  color: ${(p) => p.theme.textColor.textColor70};
  ${mediaQuery("mobile")} {
    font-size: 1.5rem;
    height: ${(p) => p.theme.layout.filterMobileHeight};
  }
`;

const CommonTextItemBox = css`
  width: 100%;
  padding: 26px 30px;
  background-color: #fff;
  border: 1px solid ${(p) => p.theme.lineColor.line2};
  ${mediaQuery("mobile")} {
    padding: 20px;
  }
`;
type colorType = keyof typeof theme.palette;
export interface StatusColorType {
  color?: colorType;
  fontweight?:
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900";
}

export const StatusColor = css<StatusColorType>`
  color: ${(p) => p.theme.palette[p.color ?? "gray90"]};
  font-weight: ${(p) => p.fontweight};
`;

export const SkeletonShimmer = css`
  &::before {
    content: "";
    display: block;
    position: absolute;
    inset: 0 auto 0 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    transform: skewX(-20deg);
    box-shadow: 0 0 30px 30px rgba(255, 255, 255, 0.3);
    animation: loading 1.5s ease-in-out infinite both;
  }

  @keyframes loading {
    0% {
      transform: translate3d(-100%, 0, 0);
    }

    100% {
      transform: translate3d(100%, 0, 0);
    }
  }
`;

export const mixin = {
  CardContainer,
  FilterItemContainer,
  CommonTextItemBox,
  StatusColor,
};
