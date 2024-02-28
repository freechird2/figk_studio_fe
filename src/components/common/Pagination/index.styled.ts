import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    button {
        width: 26px;
        aspect-ratio: 1/1;
        font-size: 1.3rem;
        &.back {
            rotate: 180deg;
        }
        &:disabled {
            cursor: not-allowed;
            svg path {
                stroke: ${(p) => p.theme.palette.gray10};
            }
        }
        &:not(:disabled):hover {
            svg path {
                stroke: ${(p) => p.theme.palette.gray80};
            }
        }
    }
`
const NumberBox = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-inline: 20px;
    button {
        width: 26px;
        aspect-ratio: 1/1;
        border-radius: 50%;
        &.current {
            color: #fff;
            background-color: ${(p) => p.theme.palette.gray90};
        }
        &:not(.current):hover {
            background-color: ${(p) => p.theme.palette.light40};
        }
    }
`
export const S = {
    Container,
    NumberBox,
}
