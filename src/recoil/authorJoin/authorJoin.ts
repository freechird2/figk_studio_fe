import { atom } from 'recoil'
import { v1 } from 'uuid'

export interface AuthorJoinModel {
    id: number
    code: string
    isConfirmed: string
    name: string
    email: string
    phone: string
    bankcode: number
    bankName: string
    accountNumber: string
    agreeTerms: 'Y' | 'N'
    agreeCopyright: 'Y' | 'N'
    agreePersonalInfo: 'Y' | 'N'
    agreeMarketing: 'Y' | 'N'
    password: string
    nickname: string
    introduction: string
    instagram: string
    blog: string
    homepage: string
}

const defaultData: AuthorJoinModel = {
    id: 0,
    code: '',
    isConfirmed: 'Y',
    email: '',
    name: '',
    phone: '',
    accountNumber: '',
    bankcode: 0,
    bankName: '',
    agreeCopyright: 'N',
    agreeTerms: 'N',
    agreeMarketing: 'N',
    agreePersonalInfo: 'N',
    blog: '',
    homepage: '',
    instagram: '',
    introduction: '',
    nickname: '',
    password: '',
}

export const authorJoinState = atom<AuthorJoinModel>({
    key: `authorJoinState_${v1()}`,
    default: defaultData,
})
