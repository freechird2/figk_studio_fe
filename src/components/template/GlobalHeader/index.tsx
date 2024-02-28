import ChangePassword from 'components/common/ChangePassword'
import { useModal } from 'hook/useModal'
import { useOutsideClick } from 'hook/useOutsideClick'
import useWidth from 'hook/useWidth'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
import { $homeTextFigkFilterOption } from 'recoil/filter/homeTextFigkFilterOption'
import { $voteFilterOption } from 'recoil/filter/voteFilterOption'
import { ROUTER_PATH } from 'router'
import { removeCookie, removeStorage } from 'util/storage'
import { S } from './index.styled'

const GlobalHeader = () => {
    const { Notice, closeNotice, Modal } = useModal()
    const { media } = useWidth()
    const navigate = useNavigate()
    const [showLoginForm, setShowLoginForm] = useState<boolean>(false)
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

    const userRef = useOutsideClick(() => setShowLoginForm(false))

    const movePage = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, url: string) => {
        filterReset()
    }

    const openChangePassword = () => {
        Modal({
            content: <ChangePassword />,
        })
    }
    return (
        <header>
            <S.Container>
                <S.Logo
                    to={ROUTER_PATH.HOME}
                    onClick={(e) => movePage(e, ROUTER_PATH.HOME)}
                />
                <S.Menu>
                    <div>
                        {media.mobile && (
                            <NavLink
                                to={ROUTER_PATH.HOME}
                                className={(isActive) => isActive && 'active'}
                                onClick={(e) => movePage(e, ROUTER_PATH.HOME)}>
                                HOME
                            </NavLink>
                        )}
                        <NavLink
                            to={ROUTER_PATH.SENDING}
                            className={(isActive) => isActive && 'active'}
                            onClick={(e) => movePage(e, ROUTER_PATH.SENDING)}>
                            지난 FIGK
                        </NavLink>
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
                        <NavLink
                            to={ROUTER_PATH.NOTICE_BOARD}
                            className={(isActive) => isActive && 'active'}
                            onClick={(e) => movePage(e, ROUTER_PATH.NOTICE_BOARD)}>
                            공지사항
                        </NavLink>
                        {/* <NavLink
              to={ROUTER_PATH.PROFILE}
              className={(isActive) => isActive && "active"}
            >
              프로필관리
            </NavLink> */}
                    </div>
                    <S.LoginBox ref={userRef}>
                        <button
                            type='button'
                            className='icon'
                            onClick={() => setShowLoginForm(!showLoginForm)}
                        />
                        {showLoginForm && (
                            <ul className='box'>
                                <li
                                    className='findPw'
                                    // onClick={() => navigate(ROUTER_PATH.CHANGE_PASSWORD)}
                                    onClick={openChangePassword}>
                                    비밀번호 변경
                                </li>
                                <li
                                    className='logout'
                                    role='button'
                                    onClick={logout}>
                                    로그아웃
                                </li>
                            </ul>
                        )}
                    </S.LoginBox>
                </S.Menu>
            </S.Container>
        </header>
    )
}

export default GlobalHeader
