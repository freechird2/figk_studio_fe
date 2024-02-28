import { PropsWithChildren } from "react";
import styled from "styled-components";

type FlexTypes = {
  display?: "flex" | "inline-flex" | "block" | "inline";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  wrap?: "nowrap" | "wrap" | "wrap-reverse";
  alignitems?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline";
  justifycontent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  aligncontent?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline";
  alignself?:
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "first baseline";
  basis?: string;
  /**
   * flex-grow는 아이템이 flex-basis의 값보다 커질 수 있는지를 결정하는 속성
   *
   * flex-grow에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 원래의 크기보다 커지며 빈 공간을 메우게 됩니다.
   */
  grow?: number;
  /**
   * flex-shrink는 flex-grow와 쌍을 이루는 속성으로, 아이템이 flex-basis의 값보다 작아질 수 있는지를 결정합니다.
   *
   * flex-shrink에는 숫자값이 들어가는데, 몇이든 일단 0보다 큰 값이 세팅이 되면 해당 아이템이 유연한(Flexible) 박스로 변하고 flex-basis보다 작아집니다.
   */
  shrink?: number;

  order?: number;
  zindex?: number;
  gap?: string | number;
  padding?: string;
  padding_block_end?: string;
  margin?: string;
  className?: string;
  position?: "relative" | "absolute" | "static" | "fixed";
};
const StyledFlex = styled.div<FlexTypes>`
  width: 100%;
  position: ${(p) => p.position};
  display: ${(p) => p.display};
  flex-direction: ${(p) => p.direction};
  flex-wrap: ${(p) => p.wrap};
  flex: ${(p) => `${p.grow} ${p.shrink} ${p.basis}`};
  align-self: ${(p) => p.alignself};
  align-items: ${(p) => p.alignitems};
  align-content: ${(p) => p.aligncontent};
  justify-content: ${(p) => p.justifycontent};
  gap: ${(p) => p.gap};
  order: ${(p) => p.order};
  flex-basis: ${(p) => p.basis};
  flex-grow: ${(p) => p.grow};
  flex-shrink: ${(p) => p.shrink};
  z-index: ${(p) => p.zindex};
  padding: ${(p) => p.padding};
  padding-block-end: ${(p) => p.padding_block_end};
  margin: ${(p) => p.margin};
`;

interface FlexProps extends PropsWithChildren, FlexTypes {}

const Flex = ({
  position = "static",
  display = "flex",
  direction = "row",
  wrap = "nowrap",
  alignitems = "stretch",
  justifycontent = "flex-start",
  aligncontent,
  basis,
  grow,
  shrink,
  alignself,
  order,
  zindex,
  gap,
  padding,
  padding_block_end,
  margin,
  className,
  children,
}: FlexProps) => {
  return (
    <StyledFlex
      className={className}
      position={position}
      display={display}
      direction={direction}
      wrap={wrap}
      alignitems={alignitems}
      justifycontent={justifycontent}
      aligncontent={aligncontent}
      basis={basis}
      grow={grow}
      shrink={shrink}
      alignself={alignself}
      order={order}
      zindex={zindex}
      gap={typeof gap === "string" ? gap : gap + "px"}
      padding={padding}
      padding_block_end={padding_block_end}
      margin={margin}
    >
      {children}
    </StyledFlex>
  );
};

export default Flex;
