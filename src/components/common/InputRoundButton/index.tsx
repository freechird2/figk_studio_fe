import whiteChecked from "assets/icon/input_checked_active.png";
import { PropsWithChildren } from "react";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
import { ActionButtonModeypes } from "../ActionButton";
import { buttonModeModuel } from "../ActionButton/index.styled";
interface InputRoundButtonProps
  extends PropsWithChildren,
    ActionButtonModeypes {
  onClick: () => void;
  isSuccess?: boolean;
}
const StyledRoundButton = styled.button`
  ${buttonModeModuel}
  border-radius:999px;
  width: 48px;
  height: 22px;
  align-self: center;
  font-size: 1.2rem;
  font-weight: 500;
  ${mediaQuery("maxTablet")} {
    width: 56px;
    height: 28px;
    font-size: 1.3rem;
  }
`;

const StyledComplete = styled.div`
  /* aspect-ratio: 1/1; */
  display: flex;
  align-items: center;
  &:after {
    --size: 18px;
    display: block;
    content: "";
    width: var(--size);
    height: var(--size);
    background-color: ${(p) => p.theme.palette.positive};
    background-image: url(${whiteChecked});
    background-size: 8px 5px;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 50%;
  }
`;

const InputRoundButton = ({
  mode = "solid",
  onClick,
  children,
  isSuccess,
}: InputRoundButtonProps) => {
  return (
    <>
      {isSuccess ? (
        <StyledComplete />
      ) : (
        <StyledRoundButton className={mode} type="button" onClick={onClick}>
          {children}
        </StyledRoundButton>
      )}
    </>
  );
};

export default InputRoundButton;
