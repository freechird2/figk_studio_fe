import styled from "styled-components";

const StyleSpinner = styled.div`
  --size: 14px;
  --color: #488ce6;
  --spinnerWidth: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  &:after {
    content: "";
    display: inline-flex;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    background: radial-gradient(farthest-side, var(--color) 94%, #0000)
        top/var(--spinnerWidth) var(--spinnerWidth) no-repeat,
      conic-gradient(#0000 30%, var(--color));
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(100% - var(--spinnerWidth)),
      #000 0
    );
    animation: spinner-c7wet2 1s infinite linear;
  }

  @keyframes spinner-c7wet2 {
    100% {
      transform: rotate(1turn);
    }
  }
`;

const Spinner = () => {
  return <StyleSpinner />;
};

export default Spinner;
