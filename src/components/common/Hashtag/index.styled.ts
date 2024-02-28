import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

export const StyledHashtag = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  li {
    color: #fff;
    font-size: 1.3rem;
    color: ${(p) => p.theme.textColor.textColor20};
    &:before {
      content: "#";
      display: inline;
    }
    /* &:hover {
      @media (hover: hover) {
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    } */
  }
  ${mediaQuery("mobile")} {
    li {
      font-size: 1.4rem;
    }
  }
`;
