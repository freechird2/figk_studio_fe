import { VoteFilterOption } from 'model/common'
import { atom } from 'recoil'
import { SENDING_PER } from 'shared/common'

const defaultValue: VoteFilterOption = {
    per: SENDING_PER,
    page: 1,
    word: '',
    status: null,
    week: null,
}

export const $voteFilterOption = atom<VoteFilterOption>({
    key: `voteFilterOption`,
    default: defaultValue,
})
