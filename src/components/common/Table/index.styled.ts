import styled from "styled-components";
import { StatusColorType, mixin } from "theme/mixin";

export const StyledTr = styled.tr`
  th {
    &:not(:last-of-type) {
      border-right: 2px solid ${(p) => p.theme.bgColor.bg1};
    }
  }
`;

export const StyledTh = styled.th`
  padding-block: 12px;
  background-color: ${(p) => p.theme.palette.light50};
  font-weight: 500;
  font-size: 1.2rem;
  color: ${(p) => p.theme.textColor.textColor40};
`;

export interface StyledTdProps extends StatusColorType {
  align?: "left" | "right" | "center";
}

export interface StyledTdProps extends StatusColorType {
  align?: "left" | "right" | "center";
}

export const StyledTd = styled.td<StyledTdProps>`
  --lineColor: #e9e9e9;
  padding-block: 18px;
  font-size: 1.3rem;
  text-align: ${(p) => p.align};
  padding-inline: 10px;
  border-bottom: 1px solid var(--lineColor);
  span {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    font-weight: inherit;
    text-align: inherit;
    ${mixin.StatusColor}

    &.left {
      justify-content: flex-start;
    }
    &.center {
      justify-content: center;
    }
    &.right {
      justify-content: flex-end;
    }
  }
`;
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: separate;
  /* border-spacing: 2px; */
  table-layout: fixed;
`;
export const StyledTHead = styled.thead``;

export const StyledTBody = styled.tbody``;
