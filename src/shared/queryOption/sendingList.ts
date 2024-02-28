import { GenericResponse, TextFigkModel } from 'model/common'

export const returnSendingListOption = {
    select: (res: GenericResponse) => {
        const data: TextFigkModel[] = res.data
        return data
    },
    refetchOnWindowFocus: false,
}
