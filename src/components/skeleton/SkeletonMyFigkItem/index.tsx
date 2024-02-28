import { HOME_PER } from 'shared/common'
import styled from 'styled-components'
import { S } from './index.styled'
//import :: =>  FigkStatusType = "elected" | "failed" | "unsent" | "sending";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

const SkeletonMyFigkItem = () => {
    const array = new Array(HOME_PER).fill('')
    return (
        <Wrapper>
            {array.map((_, i) => {
                return (
                    <S.Container key={i}>
                        <S.StatusBox className=''>
                            <S.Status>SkeletonMyFigkItem</S.Status>
                            <span className='date'>SkeletonMyFigkItem</span>
                        </S.StatusBox>
                        <S.WeekBox>
                            <span>SkeletonMyFigkItem</span>
                        </S.WeekBox>
                        <S.TextBox>
                            <h1>SkeletonMyFigkItem</h1>
                            <p>SkeletonMyFigkItem</p>
                        </S.TextBox>
                    </S.Container>
                )
            })}
        </Wrapper>
    )
}

export default SkeletonMyFigkItem
