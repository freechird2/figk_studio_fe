import { ReactComponent as SvgChecked } from 'assets/icon/vote_checked.svg'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const Container = styled.div`
    padding: 50px 0;
    ${mediaQuery('mobile')} {
        padding: 12px 0 0;
        margin: ${(p) => `0 -${p.theme.layout.mobilePadding}`};
    }
`
const Checked = styled(SvgChecked)`
    margin-right: 4px;
`

const VoteButton = styled.button`
    --small: 26px;
    --mobileSmall: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
    width: auto;
    white-space: nowrap;
    font-weight: 500;
    transition: 0.2s ease;
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    height: var(--small);
    padding: 0 12px;
    border: 1px solid ${(p) => p.theme.palette.black20};
    background-color: transparent;
    color: ${(p) => p.theme.textColor.textColor70};
    svg {
        stroke: ${(p) => p.theme.textColor.textColor70};
    }
    @media (hover: hover) {
        &:hover {
            border: 1px solid ${(p) => p.theme.palette.point1};
            background-color: transparent;
            color: ${(p) => p.theme.palette.point1};
            svg {
                stroke: ${(p) => p.theme.palette.point1};
            }
        }
    }

    &.active {
        border: 1px solid ${(p) => p.theme.palette.point1};
        background-color: rgba(255, 77, 0, 0.04);
        color: ${(p) => p.theme.palette.point1};
        svg {
            stroke: ${(p) => p.theme.palette.point1};
        }
    }
    &:disabled {
        color: rgb(255, 255, 255);
        border: 1px solid rgb(221, 222, 225);
        background-color: rgb(221, 222, 225);
        cursor: not-allowed;
        svg {
            stroke: white;
        }
    }
    ${mediaQuery('mobile')} {
        width: 100%;
        font-size: 1.5rem;
        height: var(--mobileSmall);
    }
`

export const Page = {
    Container,
    VoteButton,
    Checked,
}
