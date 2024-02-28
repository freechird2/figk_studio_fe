import { GenericResponse } from 'model/common'
import { AppliedVoteResponse, VoteResponse } from 'model/vote'

export const returnVoteOption = {
    select: (res: GenericResponse) => {
        const data: VoteResponse = res.data

        return data
    },
    cacheTime: 0,
    placeholderData: { code: 400, message: '', data: undefined },
    refetchOnWindowFocus: false,
}

export const returnApplyVoteOption = {
    select: (res: GenericResponse) => {
        const data: AppliedVoteResponse = res.data
        return data
    },
    cacheTime: 0,
    placeholderData: { code: 400, message: '', data: undefined },
    refetchOnWindowFocus: false,
}
