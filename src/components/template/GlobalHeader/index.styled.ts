import logout from 'assets/icon/logout.svg'
import pw from 'assets/icon/password.svg'
import user from 'assets/icon/user.png'
import LOGO from 'assets/img/studio_logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: ${(p) => `min(${p.theme.layout.containerWidth}, calc(100% - calc(${p.theme.layout.mobilePadding} * 2)))`};
    height: ${(p) => p.theme.layout.headerHeight};
    margin: 0 auto;
    ${mediaQuery('maxTablet')} {
        flex-direction: column;
        align-items: center;
        height: initial;
    }
`

const Logo = styled(Link)`
    display: block;
    height: 100%;
    width: 154px;
    /* height: 14px; */
    aspect-ratio: 154/14;
    background-image: url(${LOGO});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    ${mediaQuery('maxTablet')} {
        height: 45px;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    > div {
        display: flex;
        align-items: center;
        gap: 14px;
        height: 42px;
        a {
            position: relative;
            font-size: 1.4rem;
            color: ${(p) => p.theme.textColor.textColor60};
            padding: 0 6px;
            font-weight: 400;
            white-space: nowrap;

            //임시 클래스
            &.except {
                &:after {
                    display: none;
                }
                &.active[aria-current='page'] {
                    color: ${(p) => p.theme.textColor.textColor60};
                }
            }

            &:after {
                content: '';
                display: block;
                position: absolute;
                top: 0;
                right: 0;
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: ${(p) => p.theme.palette.error};
                transform: scale(0);
                transition: transform 0.2s ease;
                transform-origin: center;
            }
            &.active[aria-current='page'] {
                color: ${(p) => p.theme.textColor.textColor80};
                &:after {
                    transform: scale(1);
                }
            }
            @media (hover: hover) {
                &:hover {
                    &:after {
                        transform: scale(1);
                    }
                }
            }
        }
    }
    ${mediaQuery('maxTablet')} {
        display: flex;
        justify-content: center;
        overflow: auto hidden;
        margin: ${(p) => `0 calc(${p.theme.layout.mobilePadding} * -1)`};
        width: ${(p) => `calc(100% + calc(${p.theme.layout.mobilePadding} * 2))`};

        > div {
            width: max-content;
            flex-wrap: nowrap;
            align-self: flex-start;
            padding: ${(p) => ` 0 ${p.theme.layout.mobilePadding}`};
        }
    }
    ${mediaQuery('mobile')} {
        justify-content: flex-start;
    }
`

const LoginBox = styled.div`
    position: relative;

    z-index: 100;
    .icon {
        width: 22px;
        height: 22px;
        background-image: url(${user});
        background-size: 100%;
    }
    .box {
        position: absolute;
        top: 100%;
        right: 0;
        padding: 8px 4px;
        border: 1px solid ${(p) => p.theme.lineColor.line2};
        box-shadow: ${(p) => p.theme.boxShadow.shadow2};
        background-color: #fff;
        li {
            display: flex;
            align-items: center;
            gap: 4px;
            height: 34px;
            font-size: 1.2rem;
            color: ${(p) => p.theme.textColor.textColor80};
            white-space: nowrap;
            padding-inline: 1rem 1.2rem;
            cursor: pointer;
            &:before {
                content: '';
                display: inline-block;
                width: 14px;
                height: 14px;
                background-size: 100%;
            }
            &.findPw {
                &:before {
                    background-image: url(${pw});
                }
            }
            &.logout {
                &:before {
                    background-image: url(${logout});
                }
            }

            &:hover {
                background-color: ${(p) => p.theme.bgColor.bg1};
            }
        }
    }
`

export const S = {
    Container,
    Logo,
    Menu,
    LoginBox,
}
