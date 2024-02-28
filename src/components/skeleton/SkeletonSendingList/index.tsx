import { TagModel } from 'model/common'
import { SENDING_PER } from 'shared/common'
import styled from 'styled-components'
import { TextFigk } from './index.styled'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const SkeletonSendingList = () => {
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
                        <h1>SkeletonSendList</h1>
                        <h2 className='pointer underline'>SkeletonSendList</h2>
                        <TextFigk.Footer className='no_padding_top'>
                            <span>SkeletonSendList</span>
                        </TextFigk.Footer>
                    </TextFigk.Container>
                )
            })}
        </Wrapper>
    )
}

export default SkeletonSendingList
