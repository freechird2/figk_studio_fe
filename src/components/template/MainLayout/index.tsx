import { useAuth } from 'AuthProvider'
import useWidth from 'hook/useWidth'
import { PropsWithChildren } from 'react'
import styled, { css } from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
import GlobalFooter from '../GlobalFooter'
import GlobalHeader from '../GlobalHeader'
import GlobalMobileHeader from '../GlobalMobileHeader'
type innerPaddingType = 'general' | 'exceptional'
interface IinnerPadding {
    innerPadding?: innerPaddingType
}
interface MainLayoutProps extends PropsWithChildren, IinnerPadding {}

const Container = styled.div<IinnerPadding>`
    display: flex;
    flex-direction: column;
    min-height: 100%;

    ${(p) =>
        p.innerPadding === 'exceptional' &&
        css`
            main {
                padding: 40px 0 80px;
            }
        `}
    ${(p) =>
        p.innerPadding === 'general' &&
        css`
            main {
                padding: 70px 0 80px;
            }
        `}
    main {
        position: relative;
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    ${mediaQuery('maxTablet')} {
        ${(p) =>
            p.innerPadding === 'exceptional' &&
            css`
                main {
                    padding: 0px 0 80px;
                }
            `}
        ${(p) =>
            p.innerPadding === 'general' &&
            css`
                main {
                    padding: 40px 0 80px;
                }
            `}
    }
`

const MainLayout = ({ children, innerPadding = 'general' }: MainLayoutProps) => {
    const { media } = useWidth()
    const { user } = useAuth()
    //송고 마감 및 투표 마감 알림 배너 있을때 메인 패딩 조건

    return (
        <Container innerPadding={innerPadding}>
            {media.maxTablet ? <GlobalMobileHeader /> : <GlobalHeader />}

            <main>{children}</main>
            <GlobalFooter />
        </Container>
    )
}

export default MainLayout
