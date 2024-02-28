import { TextFigkModel } from 'model/common'
import { useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import { 회차 } from 'shared/convert'
import { convertDateYYYYMMDD } from 'shared/function'
import { convertTextFigkStatus, convertTextFigkStatusColor, 에디터특수기호변경 } from 'shared/validation'
import { S } from './index.styled'
//import :: =>  FigkStatusType = "elected" | "failed" | "unsent" | "sending";

interface Props {
    textFigk: TextFigkModel
}
const MyFigkItem = ({ textFigk }: Props) => {
    const navigate = useNavigate()
    return (
        <S.Container onClick={() => navigate(`${ROUTER_PATH.TEXT_DESC}?i=${textFigk.id}`)}>
            <S.StatusBox>
                <S.Status color={convertTextFigkStatusColor(textFigk.status)}>{convertTextFigkStatus(textFigk.status)}</S.Status>
                <span className='date'>{convertDateYYYYMMDD(textFigk.updatedAt)}</span>
            </S.StatusBox>
            {textFigk.status !== 'N' && <S.WeekBox>Vol.{회차(textFigk.week)}</S.WeekBox>}
            <S.TextBox>
                <h1>{에디터특수기호변경(textFigk.title)}</h1>
                <p>{에디터특수기호변경(textFigk.content)}</p>
            </S.TextBox>
        </S.Container>
    )
}

export default MyFigkItem
