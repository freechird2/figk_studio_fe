import { apiHeader } from 'api/constant'
import createUrlParam from 'hook/useCreateQuery'
import { GenericResponse, VoteFilterOption } from 'model/common'

const Vote = {
    getVoteList: async () => {
        const response = await apiHeader(true, 'b').get<GenericResponse>(`vote`)
        return response.data
    },

    doVote: async (data: number[]) => {
        const response = await apiHeader(true, 'b').post<GenericResponse>(`vote`, { votedFigk: data })
        return response.data
    },

    getApplyVoteList: async (data?: VoteFilterOption) => {
        const request = createUrlParam(data)
        const response = await apiHeader(true, 'b').get<GenericResponse>(`vote/search${request}`)
        return response.data
    },
}

export default Vote
