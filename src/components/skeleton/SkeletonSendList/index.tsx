import Hashtag from 'components/common/Hashtag'
import { TagModel } from 'model/common'
import { SENDING_PER } from 'shared/common'
import styled from 'styled-components'
import { TextFigk } from './index.styled'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const SkeletonSendList = () => {
    const tempTagItem: TagModel[] = [
        { id: 1, name: '# skeleton' },
        { id: 2, name: '# skeleton' },
        { id: 3, name: '# skeleton' },
        { id: 4, name: '# skeleton' },
        { id: 5, name: '# skeleton' },
    ]
    return (
        <Wrapper>
            {new Array(SENDING_PER).fill('').map((_, i) => {
                return (
                    <TextFigk.Container key={i}>
                        <small className='font_work'>SkeletonSendList</small>
                        <h1>SkeletonSendList</h1>
                        <h2 className='pointer underline'>SkeletonSendList</h2>
                        <p>SkeletonSendList</p>
                        <TextFigk.HashtagBox>
                            <Hashtag tags={tempTagItem} />
                        </TextFigk.HashtagBox>
                        <TextFigk.Footer>
                            <span>SkeletonSendList</span>
                            <span>SkeletonSendList</span>
                        </TextFigk.Footer>
                    </TextFigk.Container>
                )
            })}
        </Wrapper>
    )
}

export default SkeletonSendList
