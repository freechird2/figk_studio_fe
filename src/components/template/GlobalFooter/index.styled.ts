import { Link } from "react-router-dom";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const Footer = styled.div`
  border-top: 1px solid ${(p) => p.theme.lineColor.line3};
`;
const Container = styled.div`
  width: ${(p) =>
    `min(${p.theme.layout.containerWidth}, calc(100% - calc(${p.theme.layout.mobilePadding} * 2)))`};
  margin: 0 auto;
  padding: 40px;

  ${mediaQuery("maxTablet")} {
    padding: ${(p) => `30px ${p.theme.layout.mobilePadding}`};
  }
`;

const FooterLink = styled(Link)`
  font-size: 1.3rem;
  font-weight: 500;
  color: ${(p) => p.theme.textColor.textColor60};
  ${mediaQuery("maxTablet")} {
    font-size: 1.2rem;
  }
`;
const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  span,
  address {
    font-size: 1.3rem;
  }
  address {
    &:before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 8px;
      background-color: ${(p) => p.theme.palette.gray30};
      margin: 0 12px;
    }
  }

  ${mediaQuery("maxTablet")} {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
    span,
    address {
      font-size: 1.2rem;
    }
    address {
      &:before {
        content: none;
      }
    }
  }
`;

const Copyright = styled.p`
  font-size: 1.3rem;
  color: ${(p) => p.theme.textColor.textColor30};
  text-align: center;
  ${mediaQuery("maxTablet")} {
    font-size: 1.2rem;
  }
`;

export const S = {
  Footer,
  Container,
  FooterLink,
  FooterInfo,
  Copyright,
};
