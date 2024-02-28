import API from "api";
import { AxiosError } from "axios";
import { watch } from "fs";
import { useModal } from "hook/useModal";
import useTMutation from "hook/useTMutation";
import { ChangePasswordTypes } from "model/auth";
import { GenericResponse } from "model/common";
import { formVariants } from "pages/Form";
import { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { VALIDATION } from "shared/validation";
import { Common } from "theme/commonStyle";
import ActionButton from "../ActionButton";
import Flex from "../Flex";
import CloseIcon from "../GlobalModal/CloseIcon";
import InputText from "../InputText";
import { S } from "./index.styled";

const ChangePassword = () => {
  const { Notice, closeNotice, closeModal } = useModal();
  const {
    watch,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
  } = useForm<ChangePasswordTypes>({
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordValid: "",
    },
  });

  const ChangeSuccessCallback = () => {
    closeNotice();

    Notice({
      icon: "checked",
      type: "alert",
      title: "비밀번호 변경",
      content: "비밀번호가 변경되었습니다.",
      onClickConfirm: () => {
        closeNotice();
        closeModal();
      },
    });
  };

  const { mutate, error } = useTMutation(
    ["@ChangePasswordVerified", "T"],
    (data: FieldValues) => API.Profile.changePassword(data),
    () => ChangeSuccessCallback(),
    {
      onError: (err: AxiosError) => {},
    }
  );

  const onSubmit = (data: FieldValues) => {
    if (data.newPassword !== data.newPasswordValid) {
      Notice({
        icon: "bang",
        type: "alert",
        title: "비밀번호 변경",
        content: "새 비밀번호와 비밀번호 확인이\n일치하지 않습니다.",
        onClickConfirm: () => {
          closeNotice();
        },
      });

      return;
    }

    Notice({
      icon: "bang",
      type: "confirm",
      title: "비밀번호 변경",
      content: "입력하신 비밀번호로\n변경하시겠습니까?",
      confirmText: "변경",
      onClickConfirm: () => {
        mutate(data);
      },
    });
  };

  const onClose = () => closeModal();

  useEffect(() => {
    if (error) {
      const errData = error as AxiosError<GenericResponse>;

      closeNotice();

      Notice({
        icon: "bang",
        type: "alert",
        title: "비밀번호 찾기",
        content:
          errData.response?.data.code === 401
            ? errData.response.data.message
            : "오류가 발생했습니다. 다시 시도해주세요.",
        onClickConfirm: () => {
          closeNotice();
        },
      });
    }
  }, [error]);

  return (
    <S.ModalFrame>
      <S.ContentWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Icon onClick={onClose}>
            <CloseIcon icon="close" />
          </S.Icon>
          <S.ModalTitle>
            <h1>
              <strong>비밀번호 변경</strong>
            </h1>
            <h2>아이디(이메일) 변경은 figk@fig.xyz으로 문의해주세요.</h2>
          </S.ModalTitle>
          <Flex
            direction="column"
            gap={formVariants.gap.label}
            padding_block_end="40px"
          >
            <InputText
              name="password"
              type="password"
              control={control}
              rules={{
                required: "비밀번호를 입력하세요.",
              }}
              placeholder="현재 비밀번호"
              errorMessage={errors.password?.message as string}
            />

            <InputText
              name="newPassword"
              type="password"
              control={control}
              rules={{
                required: "새 비밀번호를 입력하세요.",
                pattern: {
                  value: VALIDATION.PASSWORD,
                  message:
                    "대소문자 영문, 숫자, 특수기호 포함 8자 이상 입력해주세요.",
                },
              }}
              placeholder="새 비밀번호"
              errorMessage={errors.newPassword?.message as string}
            />
            <InputText
              name="newPasswordValid"
              type="password"
              control={control}
              rules={{
                required: "새 비밀번호 확인을 입력하세요.",
                pattern: {
                  value: VALIDATION.PASSWORD,
                  message:
                    "대소문자 영문, 숫자, 특수기호 포함 8자 이상 입력해주세요.",
                },
              }}
              placeholder="새 비밀번호 확인"
              errorMessage={errors.newPasswordValid?.message as string}
            />
          </Flex>
          <Common.MainButtonBox>
            <ActionButton mode="line" size="cta" onClick={onClose}>
              취소
            </ActionButton>
            <ActionButton
              type="submit"
              mode={
                watch().newPassword && watch().newPasswordValid
                  ? "solid"
                  : "disabled"
              }
              size="cta"
            >
              변경
            </ActionButton>
          </Common.MainButtonBox>
        </form>
      </S.ContentWrapper>
    </S.ModalFrame>
  );
};

export default ChangePassword;
