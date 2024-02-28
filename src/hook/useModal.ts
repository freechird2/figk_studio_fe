import { IconType } from "components/common/GlobalNotice/NoticeIcon";
import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { modalState, noticeState, NoticeType } from "recoil/atom/modal";
import { ModalType } from "./../recoil/atom/modal";
export type ModalTypes = string | "confirm" | "alert";
export type ModalIconTypes = "" | "mail" | "caution";
interface OpenModalType {
  content: JSX.Element | string;
  bottomSheet?: boolean;
}

interface OpenNoticeType extends OpenModalType {
  icon: IconType;
  type?: ModalTypes;
  title?: string;
  content: JSX.Element | string;
  cancelText?: string;
  confirmText?: string;
  onClickConfirm?: () => void;
  onClickCancel?: () => void;
}

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);
  const [noticeDataState, setNoticeDataState] = useRecoilState(noticeState);
  const closeModal = useCallback(() => {
    document.body.style.overflow = "auto";
    setModalDataState((prev) => {
      return { ...prev, isOpen: false };
    });
  }, [setModalDataState]);

  const closeNotice = useCallback(
    () =>
      setNoticeDataState((prev) => {
        return { ...prev, isOpen: false };
      }),
    [setNoticeDataState]
  );

  const openModal = useCallback(
    ({ content, bottomSheet = false }: OpenModalType) => {
      document.body.style.overflow = "hidden";
      setModalDataState({
        isOpen: true,
        content: content,
        bottomSheet: bottomSheet,
      });
    },

    [setModalDataState]
  );

  const openNotice = useCallback(
    ({
      icon,
      type,
      title,
      content,
      cancelText,
      confirmText,
      onClickConfirm,
      onClickCancel,
    }: OpenNoticeType) => {
      type === "confirm" &&
        setNoticeDataState({
          icon: icon,
          type: type,
          isOpen: true,
          title: title,
          content: content,
          cancelText: cancelText,
          confirmText: confirmText,
          onClickConfirm: onClickConfirm,
          onClickCancel: onClickCancel,
        });
      type === "alert" &&
        setNoticeDataState({
          icon: icon,
          type: type,
          isOpen: true,
          title: title,
          content: content,
          confirmText: confirmText,
          onClickConfirm: onClickConfirm,
        });
    },

    [setNoticeDataState]
  );

  const Modal = ({ content, bottomSheet }: ModalType) => {
    const ModalData: ModalType = {
      content: content,
      bottomSheet: bottomSheet,
    };
    return openModal(ModalData);
  };

  const Notice = ({
    icon,
    type,
    title,
    content,
    cancelText,
    confirmText,
    onClickConfirm,
    onClickCancel,
  }: NoticeType) => {
    const NoticeData: NoticeType = {
      icon: icon,
      type: type,
      title: title,
      content: content,
      cancelText: cancelText,
      confirmText: confirmText,
      onClickConfirm: onClickConfirm,
      onClickCancel: onClickCancel,
    };
    return openNotice(NoticeData);
  };

  const getNoticeData = () => {
    return noticeDataState;
  };

  return {
    modalDataState,
    noticeDataState,
    closeModal,
    closeNotice,
    Modal,
    Notice,
    getNoticeData,
  };
};
