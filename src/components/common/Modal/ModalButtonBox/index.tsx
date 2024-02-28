import { PropsWithChildren } from "react";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const StyledButtonBox = styled.div`
  --gap: 12px;
  display: flex;
  justify-content: center;
  gap: var(--gap);
  padding-top: 10px;
  ${mediaQuery("mobile")} {
    padding-top: 5px;
    > button {
      flex: 1;
    }
  }
`;

const ModalButtonBox = ({ children }: PropsWithChildren) => {
  return <StyledButtonBox>{children}</StyledButtonBox>;
};

export default ModalButtonBox;
