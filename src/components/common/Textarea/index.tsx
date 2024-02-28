import { useController } from "react-hook-form";
import { TControl } from "../InputText";
import { S } from "./index.styled";

interface TextareaProps extends TControl<any> {
  maxLength?: number;
}

const Textarea = ({
  control,
  name,
  rules,
  placeholder,
  errorMessage,
  children,
  maxLength = 150,
}: TextareaProps) => {
  const {
    field: { value, onChange, onBlur, ref },
  } = useController({ name, rules, control });

  return (
    <S.Container className={errorMessage ? "error" : ""}>
      <S.Textarea
        ref={ref}
        value={value}
        onChange={onChange}
        name=""
        id=""
        cols={10}
        rows={4}
        maxLength={maxLength}
        spellCheck={false}
        placeholder={placeholder}
      />
      <span>
        {value.length}/{maxLength}
      </span>
    </S.Container>
  );
};

export default Textarea;
