import ChangePassword from 'components/common/ChangePassword'
import { AnimatePresence } from 'framer-motion'
import { useModal } from 'hook/useModal'
import { Fragment, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
import { $homeTextFigkFilterOption } from 'recoil/filter/homeTextFigkFilterOption'
import { $voteFilterOption } from 'recoil/filter/voteFilterOption'
import { ROUTER_PATH } from 'router'
import { variants } from 'shared/variants'
import { removeCookie, removeStorage } from 'util/storage'
import { S } from './index.styled'

const GlobalMobileHeader = () => {
    const { Notice, closeNotice, Modal } = useModal()
    const navigate = useNavigate()
    const [toggleNav, setToggleNav] = useState<boolean>(false)
    const resetHomeFilter = useResetRecoilState($homeTextFigkFilterOption)
    const resetVoteFilter = useResetRecoilState($voteFilterOption)

    const filterReset = () => {
        resetHomeFilter()
        resetVoteFilter()
    }

    const logout = () => {
        filterReset()
        removeCookie('access')
        removeStorage('refresh')
        window.location.replace('/')
    }
    const closeHandler = () => {
        setToggleNav(false)
    }

    const openChangePassword = () => {
        Modal({
            bottomSheet: true,
            content: <ChangePassword />,
        })
    }

    const movePage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
        filterReset()
    }

    useEffect(() => {
        if (toggleNav) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [toggleNav])
    return (
        <>
            <S.Header>
                <div className='contents'>
                    <S.Logo
                        to={ROUTER_PATH.HOME}
                        onClick={(e) => movePage(e, ROUTER_PATH.HOME)}
                    />
                    <S.Hamburger
                        type='button'
                        toggle={toggleNav}
                        onClick={() => setToggleNav(!toggleNav)}
                    />
                </div>
            </S.Header>
            <AnimatePresence>
                {toggleNav && (
                    <Fragment key='motion'>
                        <S.Dim
                            variants={variants.fadeInOut}
                            initial='initial'
                            animate='animate'
                            exit='exit'
                            onClick={closeHandler}
                        />
                        <S.Nav
                            variants={variants.navToggle}
                            initial='initial'
                            animate='animate'
                            exit='exit'>
                            <div className='closeBox'>
                                <button
                                    type='button'
                                    onClick={closeHandler}
                                />
                            </div>
                            <S.MenuBox>
                                <li>
                                    <NavLink
                                        to={ROUTER_PATH.WRITING}
                                        className={(isActive) => isActive && 'active'}
                                        onClick={(e) => movePage(e, ROUTER_PATH.WRITING)}>
                                        새 글 작성하기
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={ROUTER_PATH.SENDING}
                                        className={(isActive) => isActive && 'active'}
                                        onClick={(e) => movePage(e, ROUTER_PATH.SENDING)}>
                                        지난 FIGK
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        // to={ROUTER_PATH.SETTLEMENT}

                                        // className={(isActive) => isActive && 'active'}
                                        to='#'
                                        className='except'
                                        onClick={() => {
                                            Notice({
                                                icon: 'spinner',
                                                type: 'alert',
                                                title: '오픈 준비중',
                                                content: '정산관리는 아직 준비중인 서비스 입니다.',
                                                onClickConfirm: closeNotice,
                                            })
                                        }}>
                                        정산관리
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to={ROUTER_PATH.NOTICE_BOARD}
                                        className={(isActive) => isActive && 'active'}
                                        onClick={(e) => movePage(e, ROUTER_PATH.NOTICE_BOARD)}>
                                        공지사항
                                    </NavLink>
                                </li>
                                {/* <li>
                  <NavLink
                    to={ROUTER_PATH.PROFILE}
                    className={(isActive) => isActive && "active"}
                  >
                    프로필관리
                  </NavLink>
                </li> */}
                            </S.MenuBox>
                            <S.ControlBox>
                                <li
                                    className='findPw'
                                    onClick={openChangePassword}
                                    role='button'>
                                    비밀번호 변경
                                </li>
                                <li
                                    className='logout'
                                    onClick={logout}
                                    role='button'>
                                    로그아웃
                                </li>
                            </S.ControlBox>
                        </S.Nav>
                    </Fragment>
                )}
            </AnimatePresence>
        </>
    )
}

export default GlobalMobileHeader
