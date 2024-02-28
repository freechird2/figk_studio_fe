import { GenericList, TextFigkModel } from 'model/common'

export interface TextFigkListResponse extends GenericList {
    list: TextFigkModel[]
    isFirst: boolean
}

export interface CreateTextFigkRequest {
    title: string
    subTitle: string
    content: string
    link: string
    tags: string
}
