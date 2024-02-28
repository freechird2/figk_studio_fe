interface NoticeItemModel {
    id: number
    title: string
    registeredAt: string
    content: string
}
export interface NoticeList {
    totalCount: number
    isLast: boolean
    list: NoticeItemModel[]
}
