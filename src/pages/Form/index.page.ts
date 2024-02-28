import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

const Logo = styled.div`
    display: flex;
    justify-content: center;
    padding: min(180px, max(9.375vw, 50px)) 0 30px;
    img {
        width: 230px;
        aspect-ratio: 230/20;
        /* height: 20px;

        width: 88px;
        aspect-ratio: 88/22; */
    }
    ${mediaQuery('mobile')} {
        /* margin-top: 25vw; */
        margin-bottom: 20px;
        img {
            width: 200px;
        }
    }
`

const Container = styled.div`
    display: flex;
    height: 100%;
`

export const PS = {
    Logo,
    Container,
}
