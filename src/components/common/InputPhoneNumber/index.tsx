import { PropsWithChildren } from "react";
import { useController } from "react-hook-form";
import { VALIDATION } from "shared/validation";
import { TControl } from "../InputText";
import { S } from "../InputText/index.styled";

interface InputPhoneNumber extends TControl<any>, PropsWithChildren {}

const InputPhoneNumber = ({
  control,
  name,
  rules,
  placeholder,
  errorMessage,
  children,
}: InputPhoneNumber) => {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({ name, rules, control });

  return (
    <S.Container>
      <S.Wrapper className={errorMessage ? "error" : ""}>
        <S.InputText
          ref={ref}
          type="text"
          value={VALIDATION.PHONE_LENGTH(value, 11)}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        {children}
      </S.Wrapper>

      {/* {errorMessage && <S.HelperMsg>{errorMessage}</S.HelperMsg>} */}
    </S.Container>
  );
};

export default InputPhoneNumber;
