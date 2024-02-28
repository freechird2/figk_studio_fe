import { GenericResponse } from 'model/common'
import { NoticeList } from 'model/Notice'

export const returnNoticeOption = {
    select: (res: GenericResponse) => {
        const list: NoticeList = res.data
        return list
    },
    cacheTime: 0,
    placeholderData: { code: 400, message: '', data: undefined },
    refetchOnWindowFocus: false,
}
