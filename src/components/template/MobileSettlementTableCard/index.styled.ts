import styled from "styled-components";
import { mixin } from "theme/mixin";

const Status = styled.span`
  font-weight: 500;
  font-size: 1.4rem;
  ${mixin.StatusColor}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-block: 20px;
  border-bottom: 1px solid ${(p) => p.theme.lineColor.line2};
  &:first-of-type {
    border-top: 1px solid ${(p) => p.theme.lineColor.line2};
  }

  .date {
    font-size: 1.3rem;
    color: ${(p) => p.theme.textColor.textColor40};
  }
  .contents {
    font-size: 1.4rem;
    color: ${(p) => p.theme.textColor.textColor40};
  }
  .settlement {
    font-size: 1.6rem;
    font-weight: 600;
    color: ${(p) => p.theme.textColor.textColor70};
  }
`;
export const MobileSettlementTable = {
  Container,
  Status,
};
