import coin from "assets/icon/coin.svg";
import styled, { css } from "styled-components";
import { mediaQuery } from "theme/mediaQuery";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  padding-bottom: 30px;
  padding-top: 6px;
  ${mediaQuery("mobile")} {
    padding-top: 0px;
    padding-bottom: 20px;
  }
`;
const Row = styled.div`
  display: flex;
  gap: inherit;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
const Box = styled.div<{ form: "part" | "full" }>`
  flex: 1;

  ${(p) =>
    p.form === "part" &&
    css`
      dl {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        dt {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 1.5rem;
          font-weight: 500;
          color: ${(p) => p.theme.palette.blue_gray};
          &:before {
            content: "";
            display: inline-block;
            background-image: url(${coin});
            width: 15px;
            height: 15px;
          }
        }
        dd {
          font-size: 1.5rem;
          font-weight: 600;
          color: ${(p) => p.theme.palette.black20};
        }
      }
      @media screen and (max-width: 860px) {
        dl {
          flex-direction: column;
          dd {
            /* text-align: right; */
            padding-left: 21px;
          }
        }
      }
      @media screen and (max-width: 600px) {
        dl {
          flex-direction: row;
          dd {
            padding-left: 0;
          }
        }
      }
    `}
  ${(p) =>
    p.form === "full" &&
    css`
      display: flex;
      justify-content: center;
      dl {
        display: flex;
        align-items: center;
        gap: 8px;
        &:not(:last-of-type) {
          &:after {
            content: "";
            display: inline-block;
            background-color: ${(p) => p.theme.palette.gray30};
            width: 1px;
            height: 11px;
            margin: 0 20px;
          }
        }
        dt {
          font-size: 1.3rem;
          color: ${(p) => p.theme.palette.blue_gray};
        }
        dd {
          font-size: 1.3rem;
          font-weight: 500;
          color: ${(p) => p.theme.textColor.textColor70};
        }
      }
      ${mediaQuery("tablet")} {
        flex-direction: column;
        gap: 16px;
        dl {
          flex-direction: row;
          justify-content: space-between;
          &:not(:last-of-type):after {
            display: none;
          }
        }
      }
      @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 16px;
        dl {
          flex-direction: row;
          justify-content: space-between;
          &:not(:last-of-type):after {
            display: none;
          }
        }
      }
    `}
  background-color: #f2f5f6;
  padding: 20px 22px;
  border: 1px solid #e6e9eb;
  border-radius: 8px;
`;
export const S = {
  Container,
  Row,
  Box,
};
