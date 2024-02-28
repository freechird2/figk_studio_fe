import { apiHeader } from 'api/constant'
import { GenericResponse } from 'model/common'

const author = {
    myProfile: async () => {
        const response = await apiHeader(true, 'b').get<GenericResponse>(`profile`)
        return response.data
    },

    authorInfo: async () => {
        const response = await apiHeader(true, 'b').get<GenericResponse>(`home`)
        return response.data
    },
}

export default author
