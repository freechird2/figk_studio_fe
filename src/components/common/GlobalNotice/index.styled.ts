import { motion } from 'framer-motion'
import { ModalIconTypes } from 'hook/useModal'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const Container = styled(motion.div)`
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3000;
`
const Dimmer = styled.div`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
`
const Content = styled.div`
    --contentSize: 350px;
    position: relative;
    width: ${(p) => `min(calc(100% - calc(${p.theme.layout.mobilePadding} * 2)),var(--contentSize))`};
    padding: 20px;
    background-color: #fff;
    z-index: 1;
    &.loading {
    }
`

const Icon = styled.div<{ icons?: ModalIconTypes }>`
    --size: 38px;
    --mobileSize: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--size);
    aspect-ratio: 1/1;
    margin: 0 auto 12px;
    ${mediaQuery('maxTablet')} {
        width: var(--mobileSize);
        margin: 0 auto 20px;
    }
`
const Title = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 8px;
    color: ${(p) => p.theme.textColor.textColor90};
    ${mediaQuery('maxTablet')} {
        font-size: 1.6rem;
    }
`
const Text = styled.div`
    text-align: center;
    font-size: 1.4rem;
    color: ${(p) => p.theme.textColor.textColor70};
    line-height: 1.5;
    white-space: pre-wrap;
    margin-bottom: 20px;
    ${mediaQuery('maxTablet')} {
        font-size: 1.5rem;
        margin-bottom: 24px;
    }
`
const ButtonBox = styled.div`
    --buttonSize: 80px;
    display: flex;
    gap: var(--gap);
    width: calc(var(--buttonSize) - calc(var(--gap) / 2));

    ${mediaQuery('mobile')} {
        width: 100%;
        button {
            width: 100%;
        }
        gap: var(--mobileGap);
    }
`
export const S = {
    Container,
    Dimmer,
    Content,
    ButtonBox,
    Icon,
    Title,
    Text,
}
