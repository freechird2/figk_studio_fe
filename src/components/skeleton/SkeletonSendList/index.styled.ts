import { motion } from 'framer-motion'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { SkeletonShimmer } from 'theme/mixin'
const Container = styled(motion.div)`
    width: 100%;
    background-color: #fff;
    border: 1px solid ${(p) => p.theme.lineColor.line2};
    padding: 26px 30px;

    ${mediaQuery('mobile')} {
        padding: 20px;
    }

    small {
        display: inline-block;
        font-size: 1.2rem;
        font-weight: 300;

        margin-bottom: 18px;
    }
    h1 {
        font-weight: 600;
        line-height: 1.4;
        font-size: 1.8rem; //=> 모바일 16
        margin-bottom: 1.2rem;
    }
    h2 {
        font-size: 1.3rem;
        line-height: 1.4;
        color: ${(props) => props.theme.textColor.textColor40};
        margin-bottom: 2.4rem;
    }
    p {
        font-size: 1.4rem;
        color: ${(props) => props.theme.textColor.textColor90};
        text-align: justify;
        word-break: break-all;
        line-height: 1.7;
        height: 100px;
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

    small,
    h1,
    h2,
    p {
        background: ${(p) => p.theme.bgColor.bg2};
        color: transparent;
        position: relative;
        overflow: hidden;
        ${SkeletonShimmer}
    }
`

const HashtagBox = styled.ul`
    padding: 2rem 0 3rem;

    li {
        background: ${(p) => p.theme.bgColor.bg2};
        color: transparent;
        position: relative;
        overflow: hidden;
        ${SkeletonShimmer}
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    > span {
        font-size: 1.4rem;
        font-weight: 400;
        background: ${(p) => p.theme.bgColor.bg2};
        color: transparent;
        position: relative;
        overflow: hidden;
        ${SkeletonShimmer}
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
