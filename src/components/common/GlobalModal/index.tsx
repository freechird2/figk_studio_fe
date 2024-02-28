import { AnimatePresence } from "framer-motion";
import { useModal } from "hook/useModal";
import useWidth from "hook/useWidth";
import { variants } from "shared/variants";
import { BottomSheet } from "../BottomSheet";
import { S } from "./index.styled";

const GlobalModal = () => {
  const { media } = useWidth();
  const { modalDataState, closeModal } = useModal();

  return (
    <AnimatePresence>
      {modalDataState.isOpen && (
        <>
          {/* bottomSheet */}
          {modalDataState.bottomSheet && media.mobile ? (
            <BottomSheet.Container role="dialog">
              <BottomSheet.Dimmer
                variants={variants.fadeInOut}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={closeModal}
              />
              <BottomSheet.Content
                variants={variants.fadeUpDown}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {modalDataState.content}
              </BottomSheet.Content>
            </BottomSheet.Container>
          ) : (
            <S.Container
              role="dialog"
              variants={variants.fadeInOut}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <S.Dimmer onClick={closeModal} />
              <S.Content>{modalDataState.content}</S.Content>
            </S.Container>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default GlobalModal;
