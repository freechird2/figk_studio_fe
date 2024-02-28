import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  .titleBox {
    flex: 1;
  }
  .sideBox {
  }
  ${mediaQuery("mobile")} {
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
  }
`;
export const S = {
  Container,
};
