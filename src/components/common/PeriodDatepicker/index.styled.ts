import calendar from 'assets/icon/calendar.png'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'
const InputPeriod = styled.div`
    ${mixin.FilterItemContainer}
    min-width: 220px;
    &:after {
        content: '';
        display: inline-block;
        width: 12px;
        height: 12px;
        aspect-ratio: 1/1;
        background-image: url(${calendar});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 12px 12px;
        transform-origin: center;
    }
    &.focus {
        border: 1px solid ${(p) => p.theme.lineColor.line4};
        &:after {
            filter: brightness(0);
        }
    }
    &.placeholder {
        color: ${(p) => p.theme.palette.placeholder};
    }
`

const PeridoDatepickerWrapper = styled(motion.div)`
    position: absolute;
    display: inline-flex;
    top: calc(100% + 6px);
    left: 0;
    z-index: 100;
    ${mediaQuery('mobile')} {
        width: 100%;
        > div {
            width: 100%;
        }
    }
`

const Contents = styled.div`
    /* min-width: 200px; */
    width: max(220px, 100%);
    position: relative;
    user-select: none;
`

const Container = styled.div`
    display: flex;
    gap: 4px;
`

export const S = {
    Container,
    Contents,
    PeridoDatepickerWrapper,
    InputPeriod,
}
