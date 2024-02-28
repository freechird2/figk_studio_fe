import { apiHeader } from 'api/constant'
import { GenericResponse } from 'model/common'
import { FieldValues } from 'react-hook-form'

const Profile = {
    changePassword: async (data: FieldValues) => {
        const response = await apiHeader(true, 'b').put<GenericResponse>(`profile/password`, data)

        return response.data.data
    },
}

export default Profile
