import { useAuth } from 'AuthProvider'
import API from 'api'
import { AxiosError } from 'axios'
import ActionButton from 'components/common/ActionButton'
import NewWritingTag from 'components/common/NewWritingTag'
import { useModal } from 'hook/useModal'
import useTMutation from 'hook/useTMutation'
import { GenericResponse, TextFigkModel } from 'model/common'
import { CreateTextFigkRequest } from 'model/textFigk'
import { ChangeEvent, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import { createtextFigkInitData, writingFormMaxLength } from 'shared/common'
import { 회차 } from 'shared/convert'
import { 에디터특수기호변경 } from 'shared/validation'
import { Common } from 'theme/commonStyle'
import ModalPostPreview from '../modal/ModalPostPreview'
import { S } from './index.styled'
interface Props {
    data?: TextFigkModel
    isEdit?: boolean
}

// 화면 상 표시되는 length
const maxLength = {
    title: 40,
    subTitle: 80,
    content: 400,
}

// 실제 DB의 최대 length
const realMaxLength = {
    title: 60,
    subTitle: 100,
    content: 500,
}

const WritingForm = ({ data, isEdit }: Props) => {
    const navigate = useNavigate()
    const location = useLocation()
    const [pageType, setPageType] = useState(location.state ? location.state.type : 'N')
    const { user } = useAuth()

    // let pageType = location.state ? location.state.type : 'N'

    const { Modal, Notice, closeNotice } = useModal()
    const [newFigk, setNewFigk] = useState<CreateTextFigkRequest>(createtextFigkInitData(data))

    const createTextFigkSuccessCallback = (d: GenericResponse) => {
        if (d.code === 200) {
            if (pageType === 'S' || pageType === 'G') tryTextApply(d.data.id)
            else completeNotice()
        }
    }
    const textFigkSuccessCallback = (d: GenericResponse) => {
        if (d.code === 200) {
            Notice({
                icon: 'checked',
                type: 'alert',
                title: `송고가 완료되었습니다.`,
                content: `MY FIGK에서 확인하실 수 있습니다.`,
                onClickConfirm: () => {
                    closeNotice()
                    navigate(ROUTER_PATH.HOME)
                },
            })
        }
    }

    const { mutate: tryCreatetextFigk, error: createTextFigkError } = useTMutation(
        ['@createTextFigk', 'C'],
        (data: CreateTextFigkRequest) => API.TextFigk.createTextFigk(data),
        (data: GenericResponse) => createTextFigkSuccessCallback(data)
    )

    const { mutate: tryUpdateTextFigk, error: udpateTextFigkError } = useTMutation(
        ['@updateTextFigk', 'U'],
        (vari: { data: CreateTextFigkRequest; id?: number }) => API.TextFigk.updateTextFigk(vari.data, vari.id),
        (data: GenericResponse) => createTextFigkSuccessCallback(data)
    )

    const { mutate: tryTextApply, error: applyTextError } = useTMutation(
        ['@applyTextFigk', 'A'],
        (id: string) => API.TextFigk.applyTextFigk(id),
        (data: GenericResponse) => textFigkSuccessCallback(data),
        {
            onError: (err: AxiosError) => {
                setPageType(location.state ? location.state.type : 'N')
                closeNotice()

                const error = err.response?.data as GenericResponse

                Notice({
                    icon: 'bang',
                    type: 'alert',
                    content: error.message,
                    onClickConfirm: () => {
                        closeNotice()
                        navigate(-1)
                    },
                })
            },
        }
    )

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const name: string = e.target.name
        setNewFigk((prev) => ({ ...prev, [name]: e.target.value }))
    }

    // 새로고침 막기 변수
    const preventClose = (e: BeforeUnloadEvent) => {
        e.preventDefault()
        e.returnValue = '' // chrome에서는 설정이 필요해서 넣은 코드
    }

    //작성완료 활성화 조건
    const FormCompleteCondition =
        newFigk.title.length > 0 &&
        newFigk.subTitle.length > 0 &&
        newFigk.content.length > 0 &&
        newFigk.link.replace('https://', '').length > 0

    const onInsertTag = (value: string) => {
        const tagArr = newFigk.tags ? newFigk.tags.split(',') : []

        if (tagArr.length < 5 && !tagArr.includes(value)) {
            setNewFigk((prev) => ({ ...prev, tags: [...tagArr, value].join(',') }))
        }
    }

    const onDeleteTag = (value: string) => {
        setNewFigk((prev) => ({
            ...prev,
            tags: prev.tags
                .split(',')
                .filter((f) => f !== value)
                .join(','),
        }))
    }

    const onComplete = () => {
        if (!FormCompleteCondition) return

        if (pageType === 'S') sendNotice()
        else if (isEdit) tryUpdateTextFigk({ data: newFigk, id: data?.id })
        else if (user?.processStatus === 'A' && user.currentGroup === user.groupName) saveNotice()
        else tryCreatetextFigk(newFigk)
    }

    const completeNotice = () => {
        Notice({
            icon: 'checked',
            type: 'alert',
            title: `${isEdit ? '수정' : '저장'}이 완료되었습니다.`,
            content: `저장된 글은 MY FIGK에서 확인하실 수 있습니다.`,
            onClickConfirm: () => {
                closeNotice()
                navigate(-1)
            },
        })
    }

    const sendNotice = () => {
        Notice({
            icon: 'checked',
            type: 'confirm',
            title: `Vol.${회차(user?.textFigkWeek)}에 송고하시겠습니까?`,
            content: `송고기간에만 수정 및 삭제할 수 있습니다.`,
            confirmText: '송고하기',
            onClickConfirm: () => {
                tryCreatetextFigk(newFigk)
            },
            onClickCancel: () => {
                closeNotice()
            },
        })
    }

    const saveNotice = () => {
        Notice({
            icon: 'checked',
            type: 'confirm',
            title: `지금은 Vol.${회차(user?.textFigkWeek)} 송고기간입니다.`,
            content: `바로 송고하시겠습니까?`,
            confirmText: '송고하기',
            cancelText: '저장하기',
            onClickConfirm: () => {
                setPageType('G')
                // savaAndSend()
            },
            onClickCancel: () => {
                tryCreatetextFigk(newFigk)
            },
        })
    }

    // 브라우저에 렌더링 시 한 번만 실행하는 코드
    useEffect(() => {
        ;(() => {
            window.addEventListener('beforeunload', preventClose)
        })()

        return () => {
            window.removeEventListener('beforeunload', preventClose)
        }
    }, [])

    useEffect(() => {
        if (data && isEdit) {
            setNewFigk(createtextFigkInitData(data))
        }
    }, [data])

    useEffect(() => {
        if (pageType === 'G') tryCreatetextFigk(newFigk)
    }, [pageType])

    return (
        <S.Container>
            <div className='titleBox'>
                <S.FormBox $form_type='title'>
                    <S.TextareaForm
                        spellCheck={false}
                        name='title'
                        placeholder='제목을 입력해주세요.'
                        value={에디터특수기호변경(writingFormMaxLength(newFigk.title, realMaxLength.title))}
                        maxLength={maxLength.title}
                        onChange={(e) => onChange(e)}
                    />

                    <div className='totalLength'>
                        {에디터특수기호변경(writingFormMaxLength(newFigk.title, maxLength.title)).length}/{maxLength.title}
                    </div>
                </S.FormBox>
            </div>
            <div className='subjectBox'>
                <S.FormBox $form_type='default'>
                    <S.TextareaForm
                        spellCheck={false}
                        name='subTitle'
                        placeholder='소재를 입력해주세요.'
                        value={에디터특수기호변경(writingFormMaxLength(newFigk.subTitle, realMaxLength.subTitle))}
                        maxLength={maxLength.subTitle}
                        onChange={(e) => onChange(e)}
                    />

                    <div className='totalLength'>
                        {에디터특수기호변경(writingFormMaxLength(newFigk.subTitle, maxLength.subTitle)).length}/{maxLength.subTitle}
                    </div>
                </S.FormBox>
            </div>
            <div className='textBox'>
                <S.FormBox $form_type='default'>
                    <S.TextareaForm
                        spellCheck={false}
                        name='content'
                        value={에디터특수기호변경(writingFormMaxLength(newFigk.content, realMaxLength.content))}
                        maxLength={maxLength.content}
                        onChange={(e) => onChange(e)}
                        placeholder='내용을 입력해주세요.'
                    />

                    <div className='totalLength'>
                        {/* {newFigk.content.length}/{maxLength.content} */}
                        {에디터특수기호변경(writingFormMaxLength(newFigk.content, realMaxLength.content)).length}/{maxLength.content}
                    </div>
                </S.FormBox>
            </div>
            <div className='urlBox'>
                <S.FormBox $form_type='default'>
                    <S.TextareaForm
                        spellCheck={false}
                        name='link'
                        placeholder='소재 URL을 입력해주세요.'
                        value={writingFormMaxLength(newFigk.link)}
                        onChange={(e) => onChange(e)}
                    />
                </S.FormBox>
            </div>
            <div className='tagBox'>
                <NewWritingTag
                    value={newFigk.tags ? newFigk.tags.split(',').reverse() : []}
                    insertTag={onInsertTag}
                    deleteTag={onDeleteTag}
                />
            </div>
            <Common.MainButtonBox>
                <ActionButton
                    size='bigCta'
                    mode='line'
                    onClick={() =>
                        Modal({
                            bottomSheet: true,
                            content: (
                                <ModalPostPreview
                                    data={newFigk}
                                    onComplete={onComplete}
                                />
                            ),
                        })
                    }>
                    미리보기
                </ActionButton>
                <ActionButton
                    size='bigCta'
                    mode={FormCompleteCondition ? 'solid' : 'disabled'}
                    onClick={onComplete}>
                    {pageType === 'S' ? '송고하기' : `${isEdit ? '수정' : '저장'}`}
                </ActionButton>
            </Common.MainButtonBox>
        </S.Container>
    )
}

export default WritingForm
