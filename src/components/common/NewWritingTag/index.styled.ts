import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

const AppendInput = styled.input`
    display: block;
    background-color: transparent;
    line-height: 1.5;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Pretendard';
    color: ${(p) => p.theme.textColor.textColor70};
    height: 27px;
    margin-bottom: 10px;
    &::selection {
        background-color: ${(p) => p.theme.palette.black20};
        color: #fff;
    }
    &::placeholder {
        color: ${(p) => p.theme.palette.placeholder};
    }
    ${mediaQuery('mobile')} {
        font-size: 1.8rem;
    }
`
const DescText = styled.p`
    font-size: 1.2rem;
    color: ${(p) => p.theme.textColor.textColor20};
    padding-bottom: 20px;
    line-height: 1.5;
    br {
        display: none;
    }
    ${mediaQuery('mobile')} {
        font-size: 1.4rem;
        br {
            display: inline;
        }
    }
`
const TagBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    ${mediaQuery('mobile')} {
        max-width: calc(100vw - 0px);
        overflow: auto;
        flex-wrap: nowrap;
        margin-left: -40px;
        padding-left: 40px;
        padding-right: 40px;
    }
    &::-webkit-scrollbar {
        display: none;
    }
`
const Tag = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    gap: 10px;
    font-size: 1.3rem;
    color: ${(p) => p.theme.textColor.textColor50};
    border: 1px solid ${(p) => p.theme.lineColor.line3};
    padding: 12px 14px;
    @media (hover: hover) {
        &:hover {
            border: 1px solid ${(p) => p.theme.lineColor.line4};
        }
    }
    svg {
        width: 10px;
        height: 10px;
        cursor: pointer;
    }

    ${mediaQuery('mobile')} {
        font-size: 1.5rem;
    }
`
const Container = styled.div``

const AutoSearchContainer = styled.div`
    z-index: 3;
    /* height: 50vh; */
    /* width: 400px; */
    background-color: #fff;
    position: absolute;
    border: 1px solid #eff0f1;
    padding: 8px 1px;
`

const AutoSearchWrap = styled.ul``

const AutoSearchData = styled.li<{ isFocus?: boolean }>`
    /* padding: 10px 8px; */
    width: 100%;
    font-size: 1.3rem;
    font-weight: 400;
    z-index: 4;
    color: ${(p) => p.theme.textColor.textColor60};
    height: 32px;
    padding: 0 15px;
    line-height: 32px;

    /* letter-spacing: 1px; */
    &:hover {
        color: ${(p) => p.theme.textColor.textColor80};
        background-color: #fafafa;
        cursor: pointer;
    }
    background-color: ${(props) => (props.isFocus ? '#fafafa' : '#fff')};
    position: relative;
    img {
        position: absolute;
        right: 5px;
        width: 18px;
        top: 50%;
        transform: translateY(-50%);
    }
    ${mediaQuery('mobile')} {
        font-size: 1.6rem;
        height: 38px;
        line-height: 38px;
    }
`

export const S = {
    Container,
    AppendInput,
    DescText,
    Tag,
    TagBox,
    AutoSearchContainer,
    AutoSearchWrap,
    AutoSearchData,
}
