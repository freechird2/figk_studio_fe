import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { DefaultTheme, StyledComponent } from "styled-components";
import {
  StyledTBody,
  StyledTHead,
  StyledTable,
  StyledTd,
  StyledTdProps,
  StyledTh,
  StyledTr,
} from "./index.styled";

const Table = ({ ...rest }: ComponentPropsWithoutRef<"table">) => {
  return <StyledTable {...rest} />;
};

const THead = ({ ...rest }: ComponentPropsWithoutRef<"thead">) => {
  return <StyledTHead {...rest} />;
};

const TBody = ({ ...rest }: ComponentPropsWithoutRef<"tbody">) => {
  return <StyledTBody {...rest} />;
};

interface TrProps extends ComponentPropsWithoutRef<"tr"> {
  onClick?: (e?: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => void;
}
const Tr = ({ onClick, ...rest }: TrProps) => {
  return (
    <StyledTr
      {...rest}
      onClick={(e) => {
        onClick && onClick(e);
      }}
      className={onClick ? "pointer" : ""}
    />
  );
};

const Th = ({ ...rest }: ComponentPropsWithoutRef<"th">) => {
  return <StyledTh {...rest} />;
};

interface TdProps
  extends StyledTdProps,
    ComponentPropsWithoutRef<
      StyledComponent<"td", DefaultTheme, StyledTdProps, never>
    >,
    PropsWithChildren {}
const Td = ({
  color = "gray90",
  align = "center",
  children,
  ...rest
}: TdProps) => {
  return (
    <StyledTd align={align} color={color} {...rest}>
      <span className={`ellipsis ${align} `}>{children}</span>
    </StyledTd>
  );
};

export { TBody, THead, Table, Td, Th, Tr };
