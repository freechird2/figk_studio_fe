import hamburger from 'assets/icon/hamburger.svg'
import logout from 'assets/icon/logout.svg'
import close from 'assets/icon/mobile_nav_close.svg'
import pw from 'assets/icon/password.svg'
import LOGO from 'assets/img/studio_logo.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
const Container = styled(motion.div)``
const Header = styled.header`
    position: sticky;
    top: 0;
    height: ${(p) => p.theme.layout.mobileHeaderHeight};
    z-index: 5;

    background-color: ${(p) => p.theme.bgColor.bg1};
    .contents {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;

        width: ${(p) =>
            `min(${p.theme.layout.containerWidth},calc(100% - calc(${p.theme.layout.defaultPadding} * 2)))`};
        margin: 0 auto;
    }
    ${mediaQuery('mobile')} {
        z-index: 20;
        .contents {
            width: ${(p) =>
                `min(${p.theme.layout.containerWidth},calc(100% - calc(${p.theme.layout.mobilePadding} * 2)))`};
        }
    }
`
const Dim = styled(motion.div)`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 10;
`

const Nav = styled(motion.nav)`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background-color: ${(p) => p.theme.bgColor.bg1};
    z-index: 20;
    padding-bottom: 40px;
    .closeBox {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        height: ${(p) => p.theme.layout.mobileHeaderHeight};
        text-align: right;
        padding-inline: 24px;
        button {
            width: 24px;
            height: 24px;

            background-size: 100%;
            background-image: url(${close});
        }
    }
    ${mediaQuery('mobile')} {
        width: 100%;
        /* padding-inline: 16px; */
        padding-inline: 40px;
        top: ${(p) => p.theme.layout.mobileHeaderHeight};
        .closeBox {
            display: none;
        }
    }
`

const MenuBox = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 34px;
    padding: 60px 40px 40px;

    border-bottom: 1px solid ${(p) => p.theme.lineColor.line2};
    margin-bottom: 40px;
    a {
        position: relative;
        font-weight: 400;
        font-size: 2rem;
        color: ${(p) => p.theme.textColor.textColor70};
        //임시 클래스
        &.except {
            &:after {
                display: none;
            }
            &.active[aria-current='page'] {
                color: ${(p) => p.theme.textColor.textColor70};
            }
        }

        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 4px;
            right: -8px;
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
        &:hover {
            color: ${(p) => p.theme.textColor.textColor80};
        }
    }
    ${mediaQuery('mobile')} {
        padding: 60px 0;
        margin-bottom: 60px;
    }
`

const ControlBox = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
    padding-inline: 40px;
    li {
        display: flex;
        align-items: center;
        gap: 6px;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${(p) => p.theme.textColor.textColor50};
        cursor: pointer;
        &:before {
            content: '';
            display: inline-block;
            width: 24px;
            height: 24px;
            background-size: 100%;
        }
        &.findPw:before {
            background-image: url(${pw});
            opacity: 0.6;
        }
        &.logout:before {
            background-image: url(${logout});
            opacity: 0.6;
        }
        &:hover {
            color: ${(p) => p.theme.textColor.textColor70};
            &:before {
                opacity: 0.7;
                filter: brightness(0.1);
            }
        }
    }
    ${mediaQuery('mobile')} {
        padding-inline: 0px;
    }
`

const Logo = styled(Link)`
    display: block;
    height: 100%;
    width: 159px;
    /* height: 14px; */
    aspect-ratio: 140/12;
    background-image: url(${LOGO});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

const Hamburger = styled.button<{ toggle: boolean }>`
    width: 24px;
    height: 24px;

    background-image: url(${(p) => (p.toggle ? close : hamburger)});
`
export const S = {
    Container,
    Header,
    Nav,
    Dim,
    Logo,
    Hamburger,
    MenuBox,
    ControlBox,
}
