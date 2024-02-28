import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'

const Status = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
    ${mixin.StatusColor}
`

const Container = styled.div`
    ${mixin.CommonTextItemBox}
    @media (hover:hover) {
        &:hover {
            border-color: ${(p) => p.theme.lineColor.line4};
            cursor: pointer;
        }
    }
`
const StatusBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line2};
    margin-bottom: 20px;

    .date {
        font-size: 1.2rem;
        color: ${(p) => p.theme.palette.date};
    }
`
const TextBox = styled.div`
    h1 {
        font-weight: 600;
        font-size: 1.8rem;
        line-height: 1.5;
        margin-bottom: 6px;
    }
    p {
        font-size: 1.4rem;
        line-height: 1.5;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        word-wrap: break-word;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        ${mediaQuery('mobile')} {
            font-size: 1.5rem;
            height: var(--mobileForm);
            -webkit-line-clamp: 4;
        }
    }
`

const WeekBox = styled.div`
    color: #52565c;
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: 500;
    font-family: 'WorkSans';
`

export const S = {
    Container,
    StatusBox,
    TextBox,
    WeekBox,
    Status,
}
