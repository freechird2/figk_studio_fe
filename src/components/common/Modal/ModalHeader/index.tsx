import close from "assets/icon/close.svg";
import { useModal } from "hook/useModal";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
interface ModalHeaderProps {
  title: string;
}

const StyledModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.8rem;
    font-weight: 600;
  }
  button {
    --iconSize: 16px;
    width: 24px;
    aspect-ratio: 1/1;
    background-image: url(${close});
    background-size: var(--iconSize);
    background-repeat: no-repeat;
    background-position: center;
    transform: translate3d(calc(50% - calc(var(--iconSize) / 2)), 0, 0);
  }

  ${mediaQuery("mobile")} {
    h1 {
      font-size: 1.6rem;
    }
    button {
      --iconSize: 12px;
      width: 20px;
      background-size: var(--iconSize);
      transform: translate3d(calc(50% - calc(var(--iconSize) / 2)), 0, 0);
    }
  }
`;

const ModalHeader = ({ title }: ModalHeaderProps) => {
  const { closeModal } = useModal();
  return (
    <StyledModalHeader>
      <h1>{title}</h1>
      <button type="button" onClick={closeModal} />
    </StyledModalHeader>
  );
};

export default ModalHeader;
