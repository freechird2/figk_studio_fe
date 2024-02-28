import IconSearch from 'assets/icon/search.svg'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { mixin } from 'theme/mixin'
const SearchText = styled.input`
    display: block;
    flex: 1;
    font-size: 1.3rem;
    font-family: 'Pretendard';
    font-weight: 300;
    color: ${(p) => p.theme.textColor.textColor70};
    &::placeholder {
        color: ${(p) => p.theme.textColor.textColor10};
    }
    ${mediaQuery('maxTablet')} {
        /* font-size: 1.3rem; */
    }
`

const SearchButton = styled.button`
    background-image: url(${IconSearch});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
    width: 24px;
    height: 24px;
`

const Container = styled.div`
    width: 100%;
    ${mixin.FilterItemContainer}
`
export const S = {
    Container,
    SearchText,
    SearchButton,
}
