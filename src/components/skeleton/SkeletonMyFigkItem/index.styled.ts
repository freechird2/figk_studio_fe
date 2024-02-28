import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { SkeletonShimmer, mixin } from 'theme/mixin'
const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`
const Status = styled.span`
    position: relative;
    font-size: 1.2rem;
    font-weight: 500;

    ${mixin.StatusColor}
`

const Container = styled.div`
    ${mixin.CommonTextItemBox}/* @media (hover:hover) {
        &:hover {
            border-color: ${(p) => p.theme.lineColor.line4};
            cursor: pointer;
        }
    } */
`
const StatusBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line2};
    margin-bottom: 20px;

    .date {
        font-size: 1.2rem;
    }

    span {
        overflow: hidden;
        position: relative;
        background: ${(p) => p.theme.bgColor.bg2};
        color: transparent;
        overflow: hidden;
        ${SkeletonShimmer}
    }
`
const TextBox = styled.div`
    h1 {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.5;
        margin-bottom: 6px;
    }
    p {
        font-size: 1.4rem;
        line-height: 1.5;
        height: 100px;
        ${mediaQuery('mobile')} {
            font-size: 1.5rem;
        }
    }

    h1,
    p {
        overflow: hidden;
        color: transparent;
        background: ${(p) => p.theme.bgColor.bg2};
        position: relative;
        ${SkeletonShimmer}
    }
`

const WeekBox = styled.div`
    font-size: 1.2rem;
    margin-bottom: 20px;
    font-weight: 500;
    font-family: 'WorkSans';

    span {
        color: transparent;
        background: ${(p) => p.theme.bgColor.bg2};
        position: relative;
        overflow: hidden;
        ${SkeletonShimmer}
    }
`

export const S = {
    ListBox,
    Container,
    StatusBox,
    TextBox,
    WeekBox,
    Status,
}
