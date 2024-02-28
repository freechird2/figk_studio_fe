import Hashtag from 'components/common/Hashtag'
import useGap from 'hook/useGap'
import { AppliedVoteList } from 'model/vote'
import { convertTextFigkStatus, 에디터특수기호변경 } from 'shared/validation'
import styled from 'styled-components'
import { Common } from 'theme/commonStyle'
import { mixin } from 'theme/mixin'
import { TextFigk } from '../TextFigk/index.styled'

const Wrapper = styled.div`
    ${mixin.CommonTextItemBox}
`

interface Props {
    data?: AppliedVoteList
}

const SendList = ({ data }: Props) => {
    const { gap, calcGap } = useGap()
    return (
        <Wrapper>
            <TextFigk.Container>
                <small className='font_work'>Vol.{data?.week}</small>
                <h1>{에디터특수기호변경(data?.title ?? '')}</h1>
                <h2
                    className='pointer underline'
                    onClick={() => window.open(data?.link)}>
                    {에디터특수기호변경(data?.subTitle ?? '')}
                </h2>
                <p>{에디터특수기호변경(data?.content ?? '')}</p>
                <TextFigk.HashtagBox>
                    <Hashtag tags={data?.tag} />
                </TextFigk.HashtagBox>
                <TextFigk.Footer>
                    <span>{data?.authorName}</span>
                    <Common.VoteResultStatus
                        결과={convertTextFigkStatus(data?.status ?? '')}
                        투표수={data?.totalVote ?? 0}
                    />
                </TextFigk.Footer>
            </TextFigk.Container>
        </Wrapper>
    )
}

export default SendList
