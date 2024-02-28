import { useModal } from "hook/useModal";
import { PropsWithChildren } from "react";
import styled, { css } from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
import { StyledModalContents } from "../ModalContents";
type ContainerWidthType = 400 | 540;
const Container = styled.div<{
  width: ContainerWidthType;
  bottomsheet: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: ${(p) =>
    `min(${p.width}px, calc(100vw - ${p.theme.layout.mobilePadding} * 2))`};
  background-color: #fff;
  padding: 32px 30px;
  ${mediaQuery("mobile")} {
    padding: 20px;
    gap: 40px;
    > div {
      padding-inline: 0;
    }
  }

  /* bottomsheet일때 */
  ${(p) =>
    p.bottomsheet &&
    css`
      ${StyledModalContents} {
        margin-right: 0px !important;
        padding-right: 0px !important;
        &::-webkit-scrollbar {
          display: none !important;
        }
      }
      ${mediaQuery("mobile")} {
        width: 100%;
        padding: 20px 16px;
        > div {
          /* padding-inline: 16px; */
        }
      }
    `}
`;

interface ModalContentContainerProps extends PropsWithChildren {
  width?: ContainerWidthType;
}

const ModalContainer = ({
  width = 540,
  children,
}: ModalContentContainerProps) => {
  const { modalDataState } = useModal();
  return (
    <Container width={width} bottomsheet={modalDataState.bottomSheet ?? false}>
      {children}
    </Container>
  );
};

export default ModalContainer;
