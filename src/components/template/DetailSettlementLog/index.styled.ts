import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const StyledContainer = styled.div`
  padding: 24px 30px;
  border-radius: 8px;
  background-color: #fff;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 40px;
    &:before {
      content: attr(data-title);
      font-weight: 600;
      font-size: 1.5rem;
      color: ${(p) => p.theme.palette.blue_gray};
    }
    &:after {
      content: attr(data-total);
      font-size: 1.2rem;
      color: ${(p) => p.theme.textColor.textColor50};
    }
  }
  ${mediaQuery("tablet")} {
    padding-inline: 20px;
  }
`;
const StyledContainerItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  &:not(:last-of-type) {
    margin-bottom: 18px;
  }
  .head {
    font-size: 1.3rem;
    font-weight: 600;
    color: ${(p) => p.theme.textColor.textColor80};
    padding-right: 4px;
  }
  .textTitle {
    display: flex;
    align-items: center;
    overflow: hidden;
    flex: 1;
    color: ${(p) => p.theme.textColor.textColor40};
    &::before {
      content: "(";
    }
    &::after {
      content: ")";
    }
  }
  p {
    font-size: 1.3rem;
    color: inherit;
  }
  .amount {
    padding-left: 30px;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${(p) => p.theme.palette.black20};
  }
`;
const StyledContainerList = styled.ul`
  width: 100%;
  &:not(:last-of-type) {
    padding-bottom: 24px;
    margin-bottom: 24px;
    border-bottom: 1px dashed ${(p) => p.theme.lineColor.line2};
  }
`;
export const S = {
  StyledContainer,
  StyledContainerList,
  StyledContainerItem,
};
