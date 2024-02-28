import hash from 'assets/icon/hash.svg'
import link from 'assets/icon/link.svg'
import TextareaAutosize from 'react-textarea-autosize'
import styled, { css } from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
export const BeforeIcons = css`
    content: '';
    display: block;
    width: 18px;
    height: 27px;
    flex-shrink: 0;
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: center;
`

const Container = styled.div`
    .titleBox {
        padding-bottom: 44px;
    }
    .subjectBox {
        padding-bottom: 88px;
    }
    .textBox {
        padding-bottom: 98px;
        border-bottom: 1px dashed ${(p) => p.theme.lineColor.line3};
        margin-bottom: 50px;
    }
    .urlBox {
        display: flex;
        align-items: flex-start;
        width: 100%;
        gap: 6px;
        padding-bottom: 30px;
        &::before {
            ${BeforeIcons}
            background-image: url(${link});
        }
        > div {
            flex: 1;
            textarea {
                color: ${(p) => p.theme.palette.link};
            }
        }
    }
    .tagBox {
        display: flex;
        align-items: flex-start;
        width: 100%;
        gap: 6px;
        padding-bottom: 80px;
        &::before {
            ${BeforeIcons}
            background-image: url(${hash});
        }
        > div {
            flex: 1;
        }
    }
    ${mediaQuery('mobile')} {
        .titleBox,
        .subjectBox,
        .textBox {
            padding-bottom: 20px;
            margin-bottom: 20px;
            border-bottom: 1px solid ${(p) => p.theme.palette.light20};
            margin-inline: -${(p) => p.theme.layout.mobilePadding};
            padding-inline: ${(p) => p.theme.layout.mobilePadding};
        }
    }
`

type InputFormType = 'title' | 'default'
interface IinputFormType {
    $form_type: InputFormType
}

const FormBox = styled.div<IinputFormType>`
    .totalLength {
        text-align: right;
        font-size: 1.2rem;
        color: ${(p) => p.theme.textColor.textColor10};
        padding-top: 6px;
    }
    .textareaAutosize {
        width: 100%;
        padding: 0;
        background-color: transparent;
        resize: none;
        border: none;
        outline: none;
        font-size: 1.8rem;
        line-height: 22px;
        font-family: 'Pretendard';
        word-break: break-all;
        text-align: justify;
        font-weight: 300;
        &::-webkit-scrollbar {
            display: none;
        }
        &::placeholder {
            color: ${(p) => p.theme.palette.placeholder};
        }
        &[name='link'] {
            color: ${(p) => p.theme.palette.link};
        }
        &[name='content'] {
            min-height: 160px;
        }
    }
    ${(p) =>
        p.$form_type === 'title' &&
        css`
            .textareaAutosize {
                font-size: 3.6rem;
                line-height: 1.3;
            }
        `}
    ${(p) =>
        p.$form_type === 'default' &&
        css`
            .textareaAutosize {
                font-size: 1.8rem;
                line-height: 1.8;
            }
        `}
`
const InputForm = styled.input.attrs(() => ({}))<IinputFormType>`
    width: 100%;
    font-family: 'Pretendard';
    background-color: transparent;
    &::placeholder {
        color: ${(p) => p.theme.palette.placeholder};
    }

    ${(p) =>
        p.$form_type === 'title' &&
        css`
            font-size: 3.6rem;
            line-height: 1.3;
        `}
    ${(p) =>
        p.$form_type === 'default' &&
        css`
            font-size: 1.8rem;
            line-height: 1.8;
        `}
        &.link {
        color: ${(p) => p.theme.palette.link};
    }
`
const TextareaForm = styled(TextareaAutosize).attrs(() => ({
    className: 'textareaAutosize',
}))``

export const S = {
    Container,
    FormBox,
    InputForm,
    TextareaForm,
}
