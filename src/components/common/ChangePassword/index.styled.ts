import { ModalIconTypes } from "hook/useModal";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";

const ModalFrame = styled.div`
  background-color: #ffffff;
  width: 400px;
  padding: 32px 30px 36px 30px;

  ${mediaQuery("mobile")} {
    padding: 24px 16px 20px 16px;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  align-items: flex-start;
  margin-bottom: 24px;
  h1 {
    font-size: 1.8rem;
    color: ${(p) => p.theme.textColor.textColor80};
    line-height: 1.4;
    strong {
      font-size: inherit;
      color: inherit;
      line-height: inherit;
      font-weight: 600;
    }
  }
  h2 {
    font-size: 1.3rem;
    color: ${(p) => p.theme.textColor.textColor40};
    line-height: 1.5;
    ${mediaQuery("maxTablet")} {
      font-size: 1.4rem;
    }
  }
  ${mediaQuery("maxTablet")} {
    h1 {
      font-size: 2rem;
    }
  }
`;

const ModalButtonBox = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 12px;
  button,
  span,
  a {
    width: 100%;
  }
`;

const Icon = styled.div<{ icons?: ModalIconTypes }>`
  width: var(--size);
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  cursor: pointer;
`;

export const S = {
  ModalFrame,
  ContentWrapper,
  ModalTitle,
  ModalButtonBox,
  Icon,
};
