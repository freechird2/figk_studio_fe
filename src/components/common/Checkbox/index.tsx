import React from "react";
import { S } from "./index.styled";

interface CheckboxProps {
  id: string;
  label: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checkboxStyle?: "line" | "solid";
}

const Checkbox = ({
  checkboxStyle = "line",
  checked,
  onChange,
  label,
  id,
}: CheckboxProps) => {
  return (
    <S.Container>
      <input
        id={id}
        className={checkboxStyle}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </S.Container>
  );
};

export default Checkbox;
