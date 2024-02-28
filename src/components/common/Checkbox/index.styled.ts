import checked from "assets/icon/input_checked.png";
import checked_active from "assets/icon/input_checked_active.png";
import checked_active_line from "assets/icon/input_checked_active_line.png";
import styled from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  label {
    font-size: 1.5rem;
    color: ${(p) => p.theme.textColor.textColor70};
    strong {
      font-weight: 600;
      color: ${(p) => p.theme.textColor.textColor90};
    }
    cursor: pointer;
  }
  input[type="checkbox"] {
    appearance: none;
    width: 22px;
    height: 22px;
    aspect-ratio: 1/1;
    border: 1px solid ${(p) => p.theme.palette.disabled};
    border-radius: 0;
    background-image: url(${checked});
    background-size: 9.78px 6.11px;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    &.solid:checked {
      background-image: url(${checked_active});
      background-color: ${(p) => p.theme.palette.black10};
      border: 1px solid ${(p) => p.theme.palette.black10};
    }
    &.line:checked {
      background-image: url(${checked_active_line});
      background-color: #fff;
      border: 1px solid ${(p) => p.theme.palette.black10};
    }
  }

  ${mediaQuery("maxTablet")} {
    label {
      strong {
        font-size: 1.6rem;
      }
    }
  }
`;
export const S = { Container };
