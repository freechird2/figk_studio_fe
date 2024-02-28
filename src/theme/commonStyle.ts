import styled, { createGlobalStyle, css } from "styled-components";
import { mediaQuery } from "./mediaQuery";

export const CommonStyle = createGlobalStyle`



.font_work{
    font-family: 'WorkSans';
}
.font_pretendard{
    font-family: 'Pretendard';
}
.fw100{

    font-weight: 100;
}
.fw200{
    font-weight: 200;
}
.fw300{
    font-weight: 300;
}
.fw400{
    font-weight: 400;
}
.fw500{
    font-weight: 500;
}
.fw600{
    font-weight: 600;
}
.fw700{
    font-weight: 700;
}
.fw800{
    font-weight: 800;
}
.fw900{
    font-weight: 900;
}

.ellipsis{
    overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
}

.ellipsis2{
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.pointer{
cursor: pointer;
}
.underline {
    &:hover {
        text-decoration: underline;
    }
}

.scrollHidden::-webkit-scrollbar{
    display: none;
}


`;

const MainButtonBox = styled.div`
  --buttonwidth: 130px;
  --gap: 12px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: calc(var(--buttonwidth) * 2 + var(--gap));
  gap: var(--gap);
  > button {
    flex: 1;
    max-width: var(--buttonwidth);
  }
  ${mediaQuery("mobile")} {
    width: 100%;
    > button {
      max-width: initial;
    }
  }
`;

type VoteResultStatusTypes = {
  결과: string;
  투표수: number;
};
const VoteResultStatus = styled.span<VoteResultStatusTypes>`
  display: flex;
  align-items: center;
  padding: 0.8rem 1.2rem;
  border-radius: 999px;
  &:before {
    content: ${(p) => `"${p.결과}"`};
    font-size: 1.2rem;
    line-height: 1;
    font-weight: 500;
  }
  &:after {
    content: ${(p) => `"(${p.투표수}표)"`};
    font-size: 1.2rem;
    line-height: 1;
    font-weight: 500;
  }
  ${(p) =>
    p.결과 === "당선" &&
    css`
      background-color: rgba(106, 195, 64, 0.07);
      &:before,
      &:after {
        color: ${(p) => p.theme.palette.positive};
      }
    `}
  ${(p) =>
    p.결과 === "낙선" &&
    css`
      background-color: rgba(255, 60, 60, 0.07);
      &:before,
      &:after {
        color: ${(p) => p.theme.palette.error};
      }
    `}
`;

export const Common = {
  MainButtonBox,
  VoteResultStatus,
};
