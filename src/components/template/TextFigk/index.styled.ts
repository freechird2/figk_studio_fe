import { motion } from 'framer-motion'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const Container = styled(motion.div)`
    width: 100%;
    small {
        display: inline-block;

        font-size: 1.2rem;
        font-weight: 400;
        color: ${(props) => props.theme.textColor.textColor60};
        margin-bottom: 18px;
    }
    h1 {
        font-weight: 600;
        line-height: 1.4;
        font-size: 1.8rem; //=> 모바일 16
        color: ${(props) => props.theme.textColor.textColor80};
        margin-bottom: 1.2rem;
        word-break: break-word;
        font-family: 'Pretendard';
    }
    h2 {
        font-size: 1.3rem;
        line-height: 1.4;
        color: ${(props) => props.theme.textColor.textColor40};
        margin-bottom: 2.4rem;
    }
    p {
        font-size: 1.4rem;
        color: ${(props) => props.theme.textColor.textColor70};
        text-align: justify;
        word-break: break-all;
        line-height: 1.7;
    }
    ${mediaQuery('mobile')} {
        small {
            font-size: 1.4rem;
        }
        h1 {
            font-size: 2rem;
        }
        h2 {
            font-size: 1.4rem;
        }
        p {
            font-size: 1.6rem;
        }
    }
`

const HashtagBox = styled.ul`
    padding-top: 2rem;
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 3rem;
    margin-top: auto;

    &.no_padding_top {
        padding-top: initial;
    }

    > span {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${(props) => props.theme.textColor.textColor70};
        &:first-of-type:before {
            content: 'by';
            font-family: 'WorkSans';
            font-weight: 300;
            font-size: inherit;
            color: ${(props) => props.theme.textColor.textColor40};
            margin-right: 0.6rem;
        }
    }

    ${mediaQuery('mobile')} {
        > span {
            font-size: 1.6rem;
            &:first-of-type:before {
                margin-right: 0.4rem;
            }
        }
    }
`

export const TextFigk = {
    Container,
    HashtagBox,
    Footer,
}
