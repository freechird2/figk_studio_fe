import link from 'assets/icon/link.svg'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'
const Vol = styled.span`
    display: inline-flex;
    align-items: center;
    color: ${(p) => p.theme.textColor.textColor60};
    font-family: 'WorkSans';

    &:after {
        content: '';
        display: inline-block;
        width: 3px;
        height: 3px;
        background-color: ${(p) => p.theme.palette.gray30};
        margin-inline: 0.8rem;
    }
`
const Status = styled.span`
    ${mixin.StatusColor}
`

const StatusBox = styled.div`
    display: flex;
    margin-bottom: 40px;
    span {
        font-size: 1.2rem;
        font-weight: 500;
    }
`

const Contents = styled.div`
    padding-block-end: 10rem;
    h1 {
        font-weight: 600;
        font-size: 2.8rem;
        line-height: 1.5;
        color: ${(p) => p.theme.textColor.textColor80};
        padding-block-end: 0.8rem;
    }
    h2 {
        font-size: 1.4rem;
        line-height: 1.5;
        color: ${(p) => p.theme.textColor.textColor40};
        padding-block-end: 3rem;
    }
    .date {
        font-size: 1.2rem;
        color: ${(p) => p.theme.palette.date};
        padding-block-end: 8rem;
    }
    .text {
        font-size: 1.5rem;
        line-height: 1.8;
        color: ${(p) => p.theme.textColor.textColor70};
        padding-block-end: 4rem;
        word-break: break-all;
        white-space: pre-line;
    }
    .hashtagBox {
        padding-block-end: 1.2rem;
    }

    ${mediaQuery('mobile')} {
        h1 {
            font-size: 2rem;
            padding-block-end: 1.8rem;
        }
        h2 {
        }
        .text {
            font-size: 1.6rem;
        }
    }
`
const Link = styled.a`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    gap: 0.6rem;
    color: ${(p) => p.theme.palette.link};
    &:before {
        content: '';
        display: block;
        width: 18px;
        aspect-ratio: 1/1;
        background-image: url(${link});
    }
    @media (hover: hover) {
        &:hover {
            text-decoration: underline;
        }
    }
`

const Delete = styled.button`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 1.2rem;
    font-weight: 500;
    margin-block-start: 6rem;
    color: ${(p) => p.theme.textColor.textColor50};
    svg {
        fill: ${(p) => p.theme.textColor.textColor60};
    }
    @media (hover: hover) {
        &:hover {
            color: ${(p) => p.theme.textColor.textColor80};
            svg {
                fill: ${(p) => p.theme.textColor.textColor90};
            }
        }
    }
`

const Container = styled.div``

export const S = {
    Container,
    Contents,
    StatusBox,
    Status,
    Vol,
    Link,
    Delete,
}
