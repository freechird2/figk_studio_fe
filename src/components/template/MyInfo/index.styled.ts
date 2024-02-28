import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const Container = styled.div`
  --lineGap: 1.6rem;
  --mobileLineGap: 1.8rem;
  border-bottom: 1px dashed ${(p) => p.theme.lineColor.line3};
  padding-bottom: var(--lineGap);
  margin-bottom: var(--lineGap);
  ${mediaQuery("maxTablet")} {
    padding-bottom: var(--mobileLineGap);
    margin-bottom: var(--mobileLineGap);
  }
`;

const Name = styled.h1<{ currentGroup: string }>`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  &:after {
    content: ${(p) => `"${p.currentGroup}조"`};
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: uppercase;
    height: 20px;
    line-height: 20px;
    color: ${(p) => p.theme.palette.point1};
    background-color: #ffede6;
    padding: 0px 9px;
    border-radius: 999px;
    border: 1px solid rgba(255, 77, 0, 0.1);
  }
`;

const Desc = styled.p`
  color: ${(p) => p.theme.textColor.textColor30};
  font-size: 1.2rem;
  line-height: 1.5;
`;
export const S = {
  Container,
  Name,
  Desc,
};
