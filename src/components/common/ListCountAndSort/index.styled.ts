import sort from "assets/icon/sort.svg";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  ${mediaQuery("maxTablet")} {
    padding-bottom: 8px;
  }
`;
const TotalCount = styled.span`
  font-weight: 500;
  font-size: 1.2rem;
  color: ${(p) => p.theme.textColor.textColor30};
`;

const Sort = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  gap: 5px;
  color: ${(p) => p.theme.textColor.textColor50};
  &:after {
    content: "";
    display: block;
    width: 10px;
    height: 7px;
    background-image: url(${sort});
    background-size: 100%;
    transform: rotate(180deg);
  }
  &.latest:after {
    transform: rotate(0deg);
  }
`;

export const S = {
  Container,
  TotalCount,
  Sort,
};
