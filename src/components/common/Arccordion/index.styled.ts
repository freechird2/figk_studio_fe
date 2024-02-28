import arrow from "assets/icon/arccordion_arrow.svg";
import N from "assets/img/N.png";
import styled, { css } from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
import { SkeletonShimmer } from "theme/mixin";
import { Head } from "./ArccordionHead";

const Body = styled.div`
  display: none;
  padding-block: 20px;
  .arccordion_date {
    font-size: 1.2rem;

    color: ${(p) => p.theme.palette.date};
    ${mediaQuery("mobile")} {
      font-size: 1.3rem;
    }
  }
`;

export const StyledHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  cursor: pointer;
  &.isToggle {
    & + ${Body} {
      display: block;
    }

    .wrapper {
      align-items: flex-start;
    }
    .arccordion_title {
      padding-top: 2.5px;
    }
    .new {
      transform: translateY(1.5px);
    }
  }

  .arrowIcon {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-image: url(${arrow});
    background-size: 10px 5px;
    background-position: center;
    background-color: ${(p) => p.theme.palette.light20};
    &.active {
      transform: rotate(180deg);
      transform-origin: center;
    }
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 24px;
    & > .arccordion_title {
      ${mediaQuery("mobile")} {
        -webkit-line-clamp: 1;
      }

      &.new:after {
        background: url(${N}) no-repeat;
        content: "";
        display: inline-block;
        height: 7px;
        width: 8px;
        margin: 0 3px 0 8px;
      }
    }

    ${mediaQuery("mobile")} {
      /* flex-direction: column; */
      /* align-items: flex-start; */
    }
  }
  .arccordion_title {
    display: inline-block;
    flex: 1;
    font-size: 1.4rem;
    line-height: 1.5;
    /* padding-top: 2px; */
    font-weight: 400;
    color: ${(p) => p.theme.textColor.textColor80};

    strong {
      display: inline-block;
      color: ${(p) => p.theme.palette.error};
      font-weight: 500;
      font-size: 12px;
      margin-right: 4px;
      transform: translateY(-1px);
    }

    ${mediaQuery("mobile")} {
      font-size: 1.6rem;
    }
  }

  .non_active_date {
    flex: 0 0 70px;
    font-size: 1.2rem;
    color: #b9bcc1;
    white-space: nowrap;
    ${mediaQuery("mobile")} {
      font-size: 1.3rem;
    }
  }

  &.skeleton > .wrapper {
    justify-content: space-between;
  }
  &.skeleton > .wrapper > span {
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 300;
    padding-top: 2px;
    font-weight: 400;
    background: ${(p) => p.theme.bgColor.bg2};
    color: transparent;
    position: relative;
    overflow: hidden;
    ${SkeletonShimmer}
  }
  &.skeleton > .wrapper > div {
    background-color: ${(p) => p.theme.bgColor.bg2} !important;
    color: transparent;
    position: relative;
    overflow: hidden;
    ${SkeletonShimmer}
  }
`;

const Contents = styled.div`
  /* min-height: 26px; */
`;

const Container = styled.div`
  background-color: #fff;
  border: 1px solid ${(p) => p.theme.lineColor.line1};
  padding: 14px 28px;

  ${mediaQuery("mobile")} {
    padding-block: 14px 14px;
    padding-inline: ${(p) => p.theme.layout.mobilePadding};
  }
`;
const TitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  h1 {
    max-width: calc(100% - 20px);
    flex: 0 0 auto;
    /* width: 100%; */
    font-size: 1.4rem;
    line-height: 1.5;
    font-weight: 500;
    color: ${(p) => p.theme.textColor.textColor80};
  }
  .new {
    flex-grow: 0;
    flex-shrink: 0;
    width: 7px;
    margin-left: 6px;
  }

  ${mediaQuery("mobile")} {
    width: 100%;
  }
`;

export const Arccordion = {
  Head,
  Body,
  Container,
  Contents,
  TitleWrapper,
};
