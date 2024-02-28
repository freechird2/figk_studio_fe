import arrow from "assets/icon/select_arrow.png";
import { motion } from "framer-motion";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
import { mixin } from "theme/mixin";
const Container = styled.div`
  position: relative;
  user-select: none;
  min-width: 130px;
`;

const Selected = styled.div`
  ${mixin.FilterItemContainer}

  white-space: nowrap;
  &:after {
    content: "";
    display: inline-block;
    width: 8px;
    height: 4px;
    background-image: url(${arrow});
    transform: rotate(180deg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: 8px 4px;
    transform-origin: center;
  }
  &.focus {
    border: 1px solid ${(p) => p.theme.lineColor.line4};
    &:after {
      transform: rotate(0deg);
    }
  }
  &.placeholder {
    color: ${(p) => p.theme.palette.placeholder};
  }
`;
// select overflow 이슈로 max-height , overflow 추가 by taewan
const Options = styled(motion.div)`
  position: absolute;
  top: calc(100% + 6px);
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.lineColor.inputLine1};
  padding: 8px 4px;
  background-color: #fff;
  min-width: 100%;
  z-index: 100;
  max-height: ${(p) => `calc(${p.theme.layout.inputHeight1} * 4.5)`};
  overflow: auto;
  box-shadow: 0 4px 8px 0 rgba(82, 86, 92, 0.1);
  ul {
    li {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      padding: 0 10px;
      height: ${(p) => p.theme.layout.inputHeight1};
      color: ${(p) => p.theme.textColor.textColor60};
      &:hover {
        color: ${(p) => p.theme.textColor.textColor80};
        background-color: ${(p) => p.theme.bgColor.bg1};
      }
    }
  }
  ${mediaQuery("mobile")} {
    max-height: ${(p) => `calc(${p.theme.layout.inputHeight2} * 4.5)`};
    ul {
      li {
        font-size: 1.5rem;
        height: ${(p) => p.theme.layout.inputHeight2};
      }
    }
  }
`;
export const S = {
  Container,
  Selected,
  Options,
};
