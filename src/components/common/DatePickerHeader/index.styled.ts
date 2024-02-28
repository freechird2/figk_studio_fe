import arrow from 'assets/icon/datepicker_arrow.svg'
import datepicker_select_arrow from 'assets/icon/datepicker_select_arrow.svg'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-block-end: 2.4rem;
`

const Arrow = styled.button.attrs(() => ({ type: 'button' }))`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    background-image: url(${arrow});
    background-size: 100%;
    &.right {
        transform: rotate(180deg);
    }
    ${mediaQuery('mobile')} {
        width: 32px;
        height: 32px;
    }
`

const SelectBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    flex: 1;
    select {
        appearance: none;
        font-family: 'Pretendard';
        background-image: url(${datepicker_select_arrow});
        background-repeat: no-repeat;
        background-position: center right;
        padding-right: 14px;
        font-weight: 700;
        font-size: 1.5rem;
        cursor: pointer;
        background-color: transparent;
        color: ${(p) => p.theme.palette.black10};
    }
    ${mediaQuery('mobile')} {
        select {
            font-size: 2rem;
        }
    }
`
export const ReactDatePickerHeader = {
    Container,
    SelectBox,
    Arrow,
}
