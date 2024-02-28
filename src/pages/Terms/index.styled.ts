import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
    h1 {
        font-weight: 500;
        font-size: 2.4rem;
    }
    > div {
        width: 200px;
    }
    ${mediaQuery('mobile')} {
        flex-direction: column;
        align-items: flex-start;
        gap: 2.4rem;
        margin-bottom: 3rem;
        h1 {
            font-size: 2rem;
        }
    }
`

const Contents = styled.div`
    p {
        white-space: pre-line;
        font-size: 1.4rem;
        line-height: 1.8;
    }
`

export const S = {
    Contents,
    Title,
}
