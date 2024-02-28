import { GenericResponse } from 'model/common'
import { AuthorHomeResponse, AuthorProfileResponse } from 'model/home'

export const returnHomeOption = {
    select: (res: GenericResponse) => {
        const list: AuthorHomeResponse = res.data

        return list
    },
}

export const returnProfileOption = {
    select: (res: GenericResponse) => {
        const data: AuthorProfileResponse = res.data

        return data
    },
}
