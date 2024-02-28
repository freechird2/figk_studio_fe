import { GenericResponse } from 'model/common'
import { TermModel } from 'model/join'

export const returnTermsList = {
    select: (data: GenericResponse) => {
        const list: TermModel[] = data.data

        return list
    },
}
