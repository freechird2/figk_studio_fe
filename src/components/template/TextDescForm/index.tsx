import { useAuth } from 'AuthProvider'
import API from 'api'
import { ReactComponent as Delete } from 'assets/icon/delete.svg'
import { AxiosError } from 'axios'
import ActionButton from 'components/common/ActionButton'
import Hashtag from 'components/common/Hashtag'
import { useModal } from 'hook/useModal'
import useTMutation from 'hook/useTMutation'
import { TextFigkModel } from 'model/common'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import { dateToDotDate, 회차 } from 'shared/convert'
import { convertTextFigkStatus, convertTextFigkStatusColor, 에디터특수기호변경 } from 'shared/validation'
import { Common } from 'theme/commonStyle'
import { S } from './index.styled'

interface Props {
    data: TextFigkModel
    deleteTextFigk: () => void
    applyTextFigk: () => void
}
const TextDescForm = ({ data, deleteTextFigk, applyTextFigk }: Props) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const { Notice, closeNotice } = useModal()

    const validMaxApplySuccessCallback = () => {
        Notice({
            icon: 'bang',
            type: 'confirm',
            title: `Vol.${user?.textFigkWeek}에 송고하시겠습니까?`,
            content: `송고기간에만 수정 및 삭제할 수 있습니다.`,
            confirmText: '확인',
            cancelText: '취소',
            onClickConfirm: () => {
                closeNotice()
                applyTextFigk()
            },
        })
    }

    const validMaxApplyErrorCallback = (err: AxiosError) => {
        Notice({
            icon: 'bang',
            type: 'alert',
            title: '송고 가능 개수를 초과했습니다.',
            content: '한 회당 최대 3개의 글까지 투표 목록에 등록됩니다.',
            onClickConfirm: () => {
                closeNotice()
            },
        })
    }

    const { mutate: validMaxApply, error: validError } = useTMutation(
        ['@validMaxApply', '@validMaxApply'],
        () => API.TextFigk.validMaxApply(),
        () => validMaxApplySuccessCallback(),
        {
            onError: validMaxApplyErrorCallback,
        }
    )

    const onDelete = () => {
        Notice({
            icon: 'bang',
            type: 'confirm',
            title: ``,
            content: `이 글을 삭제하시겠습니까?`,
            onClickConfirm: () => {
                closeNotice()
                deleteTextFigk()
            },
        })
    }

    const onApply = () => {
        validMaxApply(undefined)
    }

    useEffect(() => {
        console.log(validError)
    }, [validError])

    return (
        <S.Container>
            <S.StatusBox>
                {data.week > 0 && <S.Vol>Vol.{회차(data.week)}</S.Vol>}
                <S.Status color={convertTextFigkStatusColor(data.status)}>
                    {convertTextFigkStatus(data.status)}
                </S.Status>
            </S.StatusBox>
            <S.Contents>
                <h1>{에디터특수기호변경(data?.title)}</h1>
                <h2>{에디터특수기호변경(data?.subTitle)}</h2>
                <p className='date'>
                    작성일: {dateToDotDate(data?.registeredAt)}{' '}
                    {data?.updatedAt && `/ 수정일: ${dateToDotDate(data.updatedAt)}`}
                </p>
                <p className='text'>{에디터특수기호변경(data?.content)}</p>
                <div className='hashtagBox'>
                    <Hashtag tags={data?.tag} />
                </div>
                {data.link && (
                    <S.Link
                        href={data?.link}
                        target='_blank'>
                        {data?.link}
                    </S.Link>
                )}
                {(data.status === 'N' ||
                    (data.status === 'E' && user?.processStatus === 'A' && data.week === user.textFigkWeek)) && (
                    <S.Delete onClick={onDelete}>
                        <Delete fill='red' /> 글 삭제하기
                    </S.Delete>
                )}
            </S.Contents>
            <Common.MainButtonBox>
                {/**
                 * 미송고 상태일 때는 수정 가능
                 * 송고했을 시 송고한 주차의 송고가능 기간에만 송고 가능
                 */}
                {data.status === 'N' && (
                    <ActionButton
                        size='bigCta'
                        mode='line'
                        onClick={() => navigate(`${ROUTER_PATH.WRITING}?e=y${data ? `&i=${data.id}` : ''}`)}>
                        수정
                    </ActionButton>
                )}
                {data.status === 'E' && user?.processStatus === 'A' && data.week === user.textFigkWeek && (
                    <ActionButton
                        size='bigCta'
                        mode='line'
                        onClick={() => navigate(`${ROUTER_PATH.WRITING}?e=y${data ? `&i=${data.id}` : ''}`)}>
                        수정
                    </ActionButton>
                )}

                {/**
                 * 송고 신청하기 버튼은  송고 기간일떄만 노출됨
                 * user?.proccessStatus === 'A' &&
                 */}
                {user?.processStatus === 'A' && data.status === 'N' && user.currentGroup === user.groupName && (
                    <ActionButton
                        onClick={onApply}
                        size='bigCta'
                        mode='solid'>
                        송고하기
                    </ActionButton>
                )}
            </Common.MainButtonBox>
        </S.Container>
    )
}

export default TextDescForm
