import ActionButton from 'components/common/ActionButton'
import { AnimatePresence } from 'framer-motion'
import { variants } from 'shared/variants'
import { S } from './index.styled'

import { useModal } from 'hook/useModal'
import useWidth from 'hook/useWidth'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { modalLoadingState } from 'recoil/atom/modal'
import { loadingState } from 'recoil/loading/loading'
import Flex from '../Flex'
import Loading from '../Loading'
import NoticeIcon from './NoticeIcon'

const GlobalNotice = () => {
    const { media } = useWidth()
    const { noticeDataState, closeNotice, getNoticeData } = useModal()
    const modalLoading = useRecoilValue(modalLoadingState)
    const resetModalLoading = useResetRecoilState(modalLoadingState)
    const [keyDownEvents, setKeyDownEvents] = useState<Array<(e: globalThis.KeyboardEvent) => void>>([])
    const loading = useRecoilValue(loadingState)

    const ConfirmHandler = () => {
        if (!modalLoading && noticeDataState.onClickConfirm) noticeDataState.onClickConfirm()
        else closeNotice()
    }

    const cancelHandler = () => {
        if (noticeDataState.onClickCancel) noticeDataState.onClickCancel()
        else closeNotice()
    }

    const keyDown = useCallback(
        (e: globalThis.KeyboardEvent) => {
            if (e.key === 'Enter') {
                ConfirmHandler()
                e.preventDefault()
            } else if (e.key === 'Escape') {
                cancelHandler()
                e.preventDefault()
            }
        },
        [noticeDataState.onClickConfirm]
    )

    const removeEvents = () => {
        keyDownEvents.map((k) => document.removeEventListener('keydown', k))
    }

    useEffect(() => {
        resetModalLoading()

        if (noticeDataState.isOpen) {
            removeEvents()

            keyDownEvents.push(keyDown)
            document.addEventListener('keydown', keyDown)
        } else {
            removeEvents()
        }
    }, [noticeDataState.isOpen, noticeDataState.onClickConfirm])

    useEffect(() => {
        if (loading) removeEvents()
    }, [loading])

    useEffect(() => {
        return () => {
            removeEvents()
        }
    }, [])

    return (
        <AnimatePresence>
            {noticeDataState.isOpen && (
                <S.Container
                    role='dialog_notice'
                    variants={variants.fadeInOut}
                    initial='initial'
                    animate='animate'
                    exit='exit'>
                    <S.Dimmer />
                    <S.Content className='loading'>
                        <Loading />
                        <S.Icon>
                            <NoticeIcon icon={noticeDataState.icon} />
                        </S.Icon>
                        <S.Title>{noticeDataState.title}</S.Title>
                        <S.Text>{noticeDataState.content}</S.Text>
                        <Flex
                            justifycontent='center'
                            gap={media.maxTablet ? 12 : 8}>
                            {noticeDataState.type === 'confirm' && (
                                <S.ButtonBox>
                                    <ActionButton
                                        onClick={cancelHandler}
                                        mode='popupLine'
                                        size='notice'
                                        width={media.mobile ? '120px' : '80px'}>
                                        {noticeDataState.cancelText || '취소'}
                                    </ActionButton>
                                </S.ButtonBox>
                            )}
                            <S.ButtonBox>
                                <ActionButton
                                    onClick={ConfirmHandler}
                                    mode='solid'
                                    size='notice'
                                    width={media.mobile ? '120px' : '80px'}>
                                    {noticeDataState.confirmText || '확인'}
                                </ActionButton>
                            </S.ButtonBox>
                        </Flex>
                    </S.Content>
                </S.Container>
            )}
        </AnimatePresence>
    )
}

export default GlobalNotice
