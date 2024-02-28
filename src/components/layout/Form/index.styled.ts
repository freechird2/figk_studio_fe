import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

export const FormContainer = styled.div`
    width: min(100%, 480px);
    margin: 0 auto;
    padding: 60px 70px 50px;
    border: 1px solid ${(p) => p.theme.lineColor.line2};
    background-color: ${(p) => p.theme.bgColor.bg1};
    box-shadow: ${(p) => p.theme.boxShadow.shadow2};
    form {
        display: flex;
        flex-direction: column;
        gap: 34px;
    }
    ${mediaQuery('mobile')} {
        box-shadow: none;
        border: none;
        padding: ${(p) => `0 ${p.theme.layout.mobilePadding}`};
        background-color: ${(p) => p.theme.bgColor.bg2};
    }
    ${mediaQuery('mobile')} {
        form {
            /* gap: 70px; */
        }
    }
`

export const FormButtonBox = styled.div`
    display: flex;
    gap: 12px;
    button,
    span,
    a {
        width: 100%;
    }
`

export const GrayTextLink = styled(Link)`
    font-weight: 500;
    font-size: 1.2rem;
    color: ${(p) => p.theme.textColor.textColor30};
    text-align: center;
    ${mediaQuery('maxTablet')} {
        font-size: 1.3rem;
    }
`

export const FormCardTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    h1 {
        font-size: 1.8rem;
        color: ${(p) => p.theme.textColor.textColor80};
        line-height: 1.4;
        strong {
            font-size: inherit;
            color: inherit;
            line-height: inherit;
            font-weight: 600;
        }
    }
    h2 {
        font-size: 1.3rem;
        color: ${(p) => p.theme.textColor.textColor40};
        line-height: 1.5;
        ${mediaQuery('maxTablet')} {
            font-size: 1.4rem;
        }
    }
    ${mediaQuery('maxTablet')} {
        h1 {
            font-size: 2rem;
        }
    }
`

export const FormProgress = styled.div<{ step: number }>`
    --width: 52px;
    --activeColor: ${(p) => p.theme.palette.black20};
    position: relative;
    width: var(--width);
    height: 2px;
    margin: 0 auto 20px;
    background-color: ${(p) => p.theme.palette.disabled};
    box-shadow: ${(p) => `inset calc(var(--width) * ${p.step / 2}) 0px 0px 0px`};

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50%);
        width: 2px;
        height: 2px;
        background-color: ${(p) => p.theme.bgColor.bg1};
    }

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50%);
        width: 2px;
        height: 2px;
        background-color: ${(p) => p.theme.bgColor.bg1};
    }
    ${mediaQuery('maxTablet')} {
        &:before,
        &:after {
            background-color: ${(p) => p.theme.bgColor.bg2};
        }
    }
`

export const FormTermsContainer = styled.div`
    border-top: 1px dashed ${(p) => p.theme.lineColor.line3};
    margin-top: 20px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    .row-checkbox {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        button {
            font-size: 1.2rem;
            color: ${(p) => p.theme.textColor.textColor20};
            @media (hover: hover) {
                &:hover {
                    text-decoration: underline;
                    text-underline-offset: 2px;
                }
            }
        }
    }
    ${mediaQuery('maxTablet')} {
        gap: 20px;
    }
`

export const FormCopyRight = styled.div`
    font-family: 'WorkSans';
    text-align: center;
    color: ${(p) => p.theme.textColor.textColor30};
    font-size: 1.3rem;
    margin-top: auto;
    padding-top: 40px;
`

export const FormDefaultValue = styled.p`
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(p) => p.theme.textColor.textColor80};

    ${mediaQuery('maxTablet')} {
        font-size: 1.6rem;
    }
`
