import { IconType } from 'components/common/GlobalNotice/NoticeIcon'
import { ModalTypes } from 'hook/useModal'
import { atom } from 'recoil'
import { v1 } from 'uuid'

export interface ModalType {
    isOpen?: boolean
    content: JSX.Element | string
    bottomSheet?: boolean
}

export interface NoticeType extends ModalType {
    icon: IconType
    type?: ModalTypes
    title?: string
    confirmText?: string
    cancelText?: string
    onClickConfirm?: () => void
    onClickCancel?: () => void
}

export const modalState = atom<ModalType>({
    key: `modalState_${v1()}`,
    default: {
        isOpen: false,
        content: '',
        bottomSheet: false,
    },
})

export const noticeState = atom<NoticeType>({
    key: `noticeState_${v1()}`,
    default: {
        icon: 'mail',
        type: '',
        title: '',
        isOpen: false,
        content: '',
    },
})

export const modalLoadingState = atom<boolean>({
    key: `modalLoading_${v1()}`,
    default: false,
})
