import arrow from 'assets/icon/vote_arrow.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${(p) => p.theme.palette.black10};
    padding: 20px 30px;

    @media screen and (max-width: 600px) {
        width: calc(100% + 32px);
        padding: ${(p) => `20px calc(${p.theme.layout.mobilePadding})`};
        margin: ${(p) => `0 calc(${p.theme.layout.mobilePadding} * -1)`};
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 24px;
    }
`

const VotingStatus = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
        align-items: flex-start;
    }
`

export const Vol = styled.span`
    display: inline-flex;
    align-items: center;
    color: ${(p) => p.theme.palette.gray10};
    background-color: rgba(255, 255, 255, 0.07);
    border: 1px solid ${(p) => p.theme.palette.gray70};
    border-radius: 999px;
    padding: 0 9px;
    height: 24px;
    font-size: 1.2rem;
    font-weight: 600;
    font-family: 'WorkSans';
    &.point1 {
        background-color: transparent;
        color: ${(p) => p.theme.palette.point1};
        border-color: ${(p) => p.theme.palette.point1};
    }
`

const Timer = styled.div`
    display: flex;
    gap: 8px;
    span,
    strong {
        color: #fff;
        font-size: 2rem;
    }
    span {
        font-weight: 300;
    }
    strong {
        font-weight: 700;
    }
`

const VoteLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${(p) => p.theme.palette.point3};
    font-size: 1.4rem;
    &:after {
        content: '';
        display: block;
        width: 23px;
        height: 14px;
        aspect-ratio: 23/14;
        background-image: url(${arrow});
        background-size: cover;
    }
`

export const S = {
    Container,
    Vol,
    Timer,
    VoteLink,
    VotingStatus,
}
