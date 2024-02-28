import { ComponentPropsWithRef } from "react";
import { S } from "./index.styled";
import useWidth from "hook/useWidth";

interface Icontainer extends ComponentPropsWithRef<"div"> {
  total: number;
}

const Container = ({ total, children, ...rest }: Icontainer) => {
  return (
    <S.StyledContainer {...rest}>
      <header data-title="정산 상세내역" data-total={`총 ${total}건`} />
      {children}
    </S.StyledContainer>
  );
};

interface Ilist extends ComponentPropsWithRef<"ul"> {}
const List = ({ ...rest }: Ilist) => {
  return <S.StyledContainerList {...rest} />;
};

interface Iitem {
  data: {
    type: string;
    text?: string;
    amount: string;
  };
}
const Item = ({ data }: Iitem) => {
  const { type, text, amount } = data;
  return (
    <S.StyledContainerItem>
      <span className="head">{type}</span>
      {text && (
        <div className="textTitle">
          <p className="ellipsis">{text}</p>
        </div>
      )}
      <span className="amount">{amount}원</span>
    </S.StyledContainerItem>
  );
};

export const DetailSettlementLog = {
  Container,
  List,
  Item,
};
