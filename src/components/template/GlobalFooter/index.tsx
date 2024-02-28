import Flex from 'components/common/Flex'
import useWidth from 'hook/useWidth'
import { S } from './index.styled'

const GlobalFooter = () => {
    const { media } = useWidth()
    return (
        <S.Footer>
            <S.Container>
                <Flex
                    wrap='wrap'
                    justifycontent='center'
                    gap={media.maxTablet ? '10px 12px' : '24px'}
                    margin={media.maxTablet ? '0 0 17px 0' : ' 0 0 24px 0'}>
                    {/* {['개인정보처리방침', '저작권정책', '이용약관', '마케팅수신동의'].map((item, index) => {
                        return (
                            <S.FooterLink
                                key={item}
                                to={`${ROUTER_PATH.TERMS_PAGE}?type=${item}`}>
                                {item}
                            </S.FooterLink>
                        )
                    })} */}

                    <S.FooterLink
                        to='https://www.instagram.com/figk.official/'
                        target='_blank'>
                        INSTAGRAM
                    </S.FooterLink>
                    <S.FooterLink
                        to='https://figk.net/'
                        target='_blank'>
                        FIGK
                    </S.FooterLink>
                </Flex>
                <S.FooterInfo>
                    <span className='font_work'>figk@fig.xyz</span>
                    <address className='font_work'>1F, 48, Wausan-ro, Mapo-gu, Seoul</address>
                </S.FooterInfo>
                <S.Copyright>©2022 FIG. ALL RIGHT RESERVED.</S.Copyright>
            </S.Container>
        </S.Footer>
    )
}

export default GlobalFooter
