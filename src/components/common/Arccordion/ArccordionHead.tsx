import { ComponentPropsWithoutRef, PropsWithChildren, useState } from "react";
import { StyledHead } from "./index.styled";
import N from "assets/img/N.png";
import styled from "styled-components";
interface Props extends PropsWithChildren, ComponentPropsWithoutRef<"div"> {
  head_title?: React.ReactNode;
  is_new_title?: boolean;
}

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 8px;
  p {
    flex: initial !important;
  }
`;

const New = styled.div`
  width: 7px;
  height: 26px;
  background-image: url(${N});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 7px 6px;
`;
export const Head = ({
  is_new_title,
  head_title,
  className,
  children,
  ...rest
}: Props) => {
  const [active, setActive] = useState<boolean>(false);
  return (
    <StyledHead
      className={`${active ? "isToggle" : ""} ${className}`}
      onClick={() => setActive(!active)}
      {...rest}
    >
      <div className={`wrapper ${active ? "active" : ""}`}>
        {head_title && (
          <p className={`arccordion_title ${active ? "" : "ellipsis"}`}>
            {is_new_title && <strong>N</strong>}
            {head_title}
          </p>
        )}

        {children}
        <div className={`arrowIcon ${active ? "active" : ""}`} />
      </div>
    </StyledHead>
  );
};
