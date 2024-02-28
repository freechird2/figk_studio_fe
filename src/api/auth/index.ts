import { apiHeader } from 'api/constant'
import { GenericResponse } from 'model/common'
import { FieldValues } from 'react-hook-form'

const auth = {
    login: async (data: FieldValues) => {
        const response = await apiHeader(true, 'b').post<GenericResponse>(`auth/login`, data)
        return response.data.data
    },

    ping: async () => {
        const response = await apiHeader(true, 'b').post<GenericResponse>(`auth/ping`)
        return response.data
    },

    refreshAccess: async () => {
        const response = await apiHeader(false, 'b').post<GenericResponse>('auth/refresh')
        return response.data
    },

    findPassword: async (data: FieldValues) => {
        const response = await apiHeader(true, 'b').post<GenericResponse>(`auth/find-pw`, data)

        return response.data.data
    },
}

export default auth
