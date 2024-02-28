import { useAuth } from 'AuthProvider'
import useCountdown from 'hook/useVoteCountdown'
import { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import { 회차 } from 'shared/convert'
import { S } from './index.styled'

const VotingReminder = () => {
    const navigate = useNavigate()
    const { user } = useAuth()
    const { status, countdown } = useCountdown()

    const movePage = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()

        // if (user?.processStatus === 'A') navigate(ROUTER_PATH.WRITING, { state: { type: 'S' } })
        if (user?.processStatus === 'A') navigate(ROUTER_PATH.SENDING_LIST)
        else if (user?.processStatus === 'V') navigate(ROUTER_PATH.VOTING)
    }
    return (
        <S.Container>
            <S.VotingStatus>
                <S.Vol>Vol.{회차(user?.textFigkWeek)}</S.Vol>
                <S.Timer>
                    <span>
                        {user?.processStatus === 'A' && `${user?.currentGroup}조`} FIGK {user?.processStatus === 'A' ? '송고' : '투표'} 마감까지
                    </span>
                    <strong>{countdown}</strong>
                </S.Timer>
            </S.VotingStatus>
            {/* {user?.proccessStatus === 'V' && <S.VoteLink to={ROUTER_PATH.VOTING}>투표하러가기</S.VoteLink>} */}
            {
                <S.VoteLink
                    to=''
                    onClick={(e) => movePage(e)}>
                    {user?.processStatus === 'A' ? '송고리스트 보기' : '투표하러 가기'}
                </S.VoteLink>
            }
        </S.Container>
    )
}

export default VotingReminder
