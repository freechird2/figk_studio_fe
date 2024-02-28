import { GenericResponse, TextFigkModel } from 'model/common'
import { TextFigkListResponse } from 'model/textFigk'

export const returnTextFigkList = {
    select: (res: GenericResponse) => {
        let data: TextFigkListResponse | undefined = res.data

        if (data) {
            data.list = data.list.length > 0 ? (data.list as TextFigkModel[]) : []
        }
        return data
    },
    refetchOnWindowFocus: false,
    // cacheTime: 0,
    // placeholderData: { code: 400, message: '', data: undefined },
}

export const returnTextFigkDetailOption = (p: string | undefined) => {
    return {
        select: (res: GenericResponse) => {
            let data: TextFigkModel | undefined = res.data
            return data
        },
        refetchOnWindowFocus: false,
        enabled: !!p,
        retry: 0,
        cacheTime: 0,
        placeholderData: { code: 400, message: '', data: undefined },
    }
}
