import filter from 'assets/icon/filter.svg'
import reset from 'assets/icon/reset.png'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
export const FilterContainer = styled.div`
    display: flex;
    gap: 10px;
    padding-bottom: 16px;
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line2};
    margin-bottom: 24px;

    .FilterBox {
        display: flex;
        gap: 10px;
        flex-shrink: 1;
        //Select 컴포넌트
        .select {
        }
        //PeriodDatepicker 컴포넌트
        .periodDatepicker {
        }
    }
    .SearchBox {
        display: flex;
        gap: 9px;
        width: 280px;
        //FilterSearch 컴포넌트
        .filterSearch {
        }
    }
    ${mediaQuery('tablet')} {
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 20px;
        &:has(.filterShow) {
            .FilterBox {
                display: flex;
            }
            .reset {
                display: flex;
            }
        }
        .FilterBox {
            display: none;
            width: 100%;
            order: 2;
            //Select 컴포넌트
            .select {
                flex: 1;
            }
            //PeriodDatepicker 컴포넌트
            .periodDatepicker {
                flex: auto;
            }
        }
        .SearchBox {
            order: 1;
            width: 100%;
        }
        .reset {
            display: none;
            order: 3;
        }
    }
    ${mediaQuery('mobile')} {
        .FilterBox {
            flex-direction: column;
        }
    }
`
export const FilterToggleButton = styled.button`
    display: none;

    &.filterShow {
        border-color: ${(p) => p.theme.lineColor.line4};
    }
    ${mediaQuery('tablet')} {
        display: inline-block;
        border: 1px solid ${(p) => p.theme.lineColor.inputLine1};
        height: ${(p) => p.theme.layout.inputHeight1};
        aspect-ratio: 1/1;
        background-color: ${(p) => p.theme.palette.light40};
        background-image: url(${filter});
        background-repeat: no-repeat;
        background-size: 16px 16px;
        background-position: center;
    }

    ${mediaQuery('mobile')} {
        height: ${(p) => p.theme.layout.filterMobileHeight};
    }
`
export const FilterResetWrapper = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    ${mediaQuery('mobile')} {
        padding-top: 10px;
    }
`

export const FilterReset = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    color: #838990;
    &:before {
        content: '';
        display: inline-block;
        width: 13px;
        aspect-ratio: 1/1;
        background-image: url(${reset});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 13px 13px;
        transform-origin: center;
        margin-right: 4px;
    }
`
