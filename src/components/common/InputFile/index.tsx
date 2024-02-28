import { useRef } from "react";
import { useController } from "react-hook-form";
import Flex from "../Flex";
import { TControl } from "../InputText";
import { S } from "../InputText/index.styled";
import { File } from "./index.styled";

interface InputFileProps extends TControl<any> {
  maxLength?: number;
}
const InputFile = ({
  control,
  name,
  rules,
  placeholder,
  errorMessage,
  children,
}: InputFileProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const {
    field: { value, onChange },
  } = useController({ name, rules, control });

  const fileUploadHandler = () => {
    if (fileRef.current) {
      //   fileRef.current.click();
      //   fileRef.current.focus();
    }
  };
  return (
    <Flex className="pointer" position="relative">
      <S.Wrapper
        className={errorMessage ? "error" : ""}
        onClick={() => {
          fileUploadHandler();
        }}
      >
        <File.InputFile
          ref={fileRef}
          type="file"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          spellCheck={false}
        />
        <File.CopyInputFile className={value.length > 0 ? "" : "placeholder"}>
          {value.length > 0 ? value : placeholder}
        </File.CopyInputFile>
      </S.Wrapper>
      {errorMessage && <S.HelperMsg>{errorMessage}</S.HelperMsg>}
    </Flex>
  );
};

export default InputFile;
