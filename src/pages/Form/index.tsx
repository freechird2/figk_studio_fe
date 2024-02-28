import LOGO from 'assets/img/studio_logo.png'
import { FormCopyRight } from 'components/layout/Form/index.styled'
import { Link, Outlet } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import { PS } from './index.page'

type formVariableTypes = {
    gap: {
        label: string
        input: string
    }
}

export const formVariants: formVariableTypes = {
    gap: {
        label: '10px',
        input: '8px',
    },
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    padding-bottom: 20px;
    ${mediaQuery('mobile')} {
        background-color: ${(p) => p.theme.bgColor.bg2};
    }
`

const Form = () => {
    return (
        <Container>
            <PS.Logo>
                <Link to={ROUTER_PATH.LOGIN}>
                    <img
                        src={LOGO}
                        alt='FIGK 로고'
                    />
                </Link>
            </PS.Logo>
            <Outlet />
            <FormCopyRight>©2022 FIG. ALL RIGHT RESERVED.</FormCopyRight>
        </Container>
    )
}

export default Form
