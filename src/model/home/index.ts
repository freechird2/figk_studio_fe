import { NoticeResponse } from 'model/common'

export interface AuthorHomeResponse {
    authorId: number
    groupName: string
    introduction: string
    nickname: string
    notice: NoticeResponse
}

export interface AuthorProfileResponse {
    id: number
    nickname: string
    instagram: string
    homepage: string
    blog: string
    introduction: string
    name: string
    email: string
    phone: string
    contactEmail: string
    groupName: string
    isApprove: string
    isTempPassword: string
    processStatus: string
    currentGroup: string
}
