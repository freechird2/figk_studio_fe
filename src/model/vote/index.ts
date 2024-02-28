import { TagModel } from 'model/common'

export interface VoteResponse {
    isVoted: string
    summary: VoteSummary
    list: VoteList[]
}

export interface VoteList {
    id: number
    title: string
    subTitle: string
    authorName: string
    week: number
    content: string
    isVotedFigk: string
    tag: TagModel[]
    link: string
}

export interface VoteSummary {
    week: number
    group: string
    voteStatus: string
    maxVote: number
}

export interface AppliedVoteResponse {
    totalCount: number
    isLast: boolean
    thisWeek: number
    list: AppliedVoteList[]
}

export interface AppliedVoteList {
    id: number
    week: number
    title: string
    subTitle: string
    authorName: string
    content: string
    link: string
    totalVote: number
    status: string
    statusTxt: string
    isPublished: string
    isPublishedTxt: string
    tag: TagModel[]
}
