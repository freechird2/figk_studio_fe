import React, { ComponentPropsWithRef } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  background-color: #fff;
  border: 1px solid ${(p) => p.theme.lineColor.inputLine1};
  height: ${(p) => p.theme.layout.inputHeight2};
  padding: 0 14px;
  gap: 14px;
  input {
    all: unset;
    flex: 1;
    font-size: 1.3rem;
    color: ${(p) => p.theme.textColor.textColor70};
    &::placeholder {
      color: ${(p) => p.theme.textColor.textColor10};
    }
  }
  button {
    background-color: ${(p) => p.theme.textColor};
    color: #fff;
    width: 40px;
    height: 22px;
    line-height: 22px;
    border-radius: 999px;
    font-weight: 500;
    font-size: 1.2rem;
    &.activate {
      background-color: ${(p) => p.theme.palette.gray90};
    }
  }
`;

interface AccountCertificationProps extends ComponentPropsWithRef<"input"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const AccountCertification = ({
  value,
  onChange,
  ...rest
}: AccountCertificationProps) => {
  return (
    <Container>
      <input
        type="text"
        value={value}
        onChange={onChange}
        spellCheck={false}
        {...rest}
      />

      <button
        type="button"
        className={value.length >= 11 && value.length <= 14 ? "activate" : ""}
      >
        인증
      </button>
    </Container>
  );
};

export default AccountCertification;
