import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
import { mixin } from "theme/mixin";

const Wrapper = styled.div`
  width: 100%;
`;
const Status = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  ${mixin.StatusColor}
`;
const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: last baseline;
  padding-block-end: 14px;
  border-bottom: 1px solid ${(p) => p.theme.lineColor.inputFocus};
  margin-block-end: 24px;

  .contents {
    font-weight: 500;
    font-size: 1.6rem;
  }
  .settlement {
    font-weight: 700;
    font-size: 2rem;
  }
  ${mediaQuery("mobile")} {
    flex-direction: column;
    gap: 10px;
    .contents {
      font-size: 1.4rem;
    }
  }
`;

const MiddleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-block-end: 40px;
  dl {
    display: flex;
    justify-content: space-between;
    dt {
      font-size: 1.3rem;
      color: ${(p) => p.theme.textColor.textColor60};
    }
    dd {
      font-size: 1.4rem;
      color: ${(p) => p.theme.textColor.textColor80};
      &.red {
        color: ${(p) => p.theme.palette.error};
      }
    }
  }
`;
const GrayBox = styled.div`
  background-color: ${(p) => p.theme.bgColor.bg1};
  padding: 18px 20px;
  .text {
    font-weight: 300;
    font-size: 1.4rem;
    line-height: 2.1rem;
    vertical-align: middle;
    color: ${(p) => p.theme.textColor.textColor70};
  }
  .vol {
    font-size: 1.2rem;
    line-height: 2.1rem;
    vertical-align: middle;
    color: ${(p) => p.theme.textColor.textColor60};
    padding-inline-end: 8px;
  }
`;
export const S = {
  Wrapper,
  TopBox,
  GrayBox,
  Status,
  MiddleBox,
};
