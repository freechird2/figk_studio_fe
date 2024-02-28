import { ComponentPropsWithRef, forwardRef } from "react";
import { DefaultTheme, StyledComponent } from "styled-components";
import { Action } from "./index.styled";
// interface ActionButtonTagTypes {
//   tagType?: "button" | "Link";
// }
export interface ActionButtonModeypes {
  mode?:
    | "solid"
    | "line"
    | "popupLine"
    | "disabled"
    | "voted"
    | "inputLine"
    | "initial";
}
interface ActionButtonProps
  extends ActionButtonModeypes,
    ComponentPropsWithRef<
      StyledComponent<
        "button",
        DefaultTheme,
        {
          width: "auto" | "100%";
        },
        never
      >
    > {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  size?: "form" | "bigCta" | "cta" | "sub" | "small" | "notice";
  width?: "100%" | "auto";
}

const ActionButton = forwardRef(
  ({
    children,
    type = "button",
    size = "cta",
    mode = "solid",
    width = "100%",
    ...rest
  }: ActionButtonProps) => {
    return (
      <Action.Button
        className={`${mode} ${size}`}
        width={width}
        type={type}
        {...rest}
      >
        {children}
      </Action.Button>
    );
  }
);

export default ActionButton;
