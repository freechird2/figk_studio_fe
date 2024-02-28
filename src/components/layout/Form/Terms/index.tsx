import API from 'api'
import ActionButton from 'components/common/ActionButton'
import Checkbox from 'components/common/Checkbox'
import TermCheckBoxHandler from 'components/decomposition/join'
import ModalTerms from 'components/template/modal/ModalTerms'
import { TermsHandler } from 'components/template/modal/ModalTerms/terms'
// import { termContents } from "components/template/modal/ModalTerms/terms";
import { useModal } from 'hook/useModal'
import useGetQuery from 'hook/useTQuery'
import { GenericResponse } from 'model/common'
import { TermModel } from 'model/join'
import { useEffect, useState } from 'react'
import { FieldValues } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRecoilState, useResetRecoilState } from 'recoil'
import { AuthorJoinModel, authorJoinState } from 'recoil/authorJoin/authorJoin'
import { ROUTER_PATH } from 'router'
import { getQuery } from 'shared/common'
import { returnTermsList } from 'shared/queryOption/join'
import { FormButtonBox, FormCardTitle, FormContainer, FormProgress, FormTermsContainer } from '../index.styled'

const Terms = () => {
    const navigate = useNavigate()
    const { Modal, Notice, closeNotice } = useModal()

    const code = getQuery()['em']
    const [authorJoinData, setAuthorJoinData] = useRecoilState(authorJoinState)
    const resetAuthorJoinData = useResetRecoilState(authorJoinState)

    const [checkedList, setCheckedList] = useState<string[]>([])

    const { data: author } = useGetQuery(['@getAuthorByCode', code], () => API.Join.getAuthorByCode(code), {
        select: (res: GenericResponse) => {
            const resData: AuthorJoinModel = res.data

            setAuthorJoinData(resData)
            return resData
        },
        onError: (err) => {
            Notice({
                icon: 'bang',
                type: 'alert',
                title: '접근 불가',
                content: '비정상 접근입니다.\n관리자에게 문의하세요.',
                onClickConfirm: () => {
                    closeNotice()
                    navigate('/')
                },
            })
        },
        refetchOnWindowFocus: false,
        retry: 0,
    })

    const { data: termList } = useGetQuery(['@getTermsList'], () => API.Join.getTerms(), returnTermsList)

    const ShowTermsHandler = (c: TermModel) => {
        Modal({
            content: (
                <ModalTerms
                    termsContents={TermsHandler(c)}
                    title={c.typeTxt}
                />
            ),
        })
    }

    const onChangeAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 체크할 시 CheckList에 id 값 전체 넣기, 체크 해제할 시 CheckList에 빈 배열 넣기
        if (e.target.checked) {
            return setCheckedList(['all', 'term1', 'term2', 'term3', 'term4'])
        }
        return setCheckedList([])
    }

    const onChangeEach = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
        // 체크할 시 CheckList에 id값 넣기\
        if (e.target.checked) {
            setCheckedList([...checkedList, id])
            // 체크 해제할 시 CheckList에서 해당 id값이 `아닌` 값만 배열에 넣기
        } else {
            setCheckedList(checkedList.filter((checkedId) => checkedId !== id))
        }
    }

    const onSubmit = (data: FieldValues) => {
        // console.log(JSON.stringify(data))
    }

    const Checked = (id: string) => checkedList.includes(id)

    const AllChecked = Checked('term1') && Checked('term2') && Checked('term3') && Checked('term4')
    const RequiredChecked = Checked('term1') && Checked('term2') && Checked('term3')

    const onNext = () => {
        setAuthorJoinData((prev) => ({
            ...prev,
            agreeTerms: 'Y',
            agreePersonalInfo: 'Y',
            agreeCopyright: 'Y',
            agreeMarketing: Checked('term4') ? 'Y' : 'N',
        }))

        navigate(`${ROUTER_PATH.JOIN}`)
    }

    useEffect(() => {
        resetAuthorJoinData()
    }, [])

    useEffect(() => {
        console.log(authorJoinData)
    }, [authorJoinData])

    return (
        <FormContainer>
            <FormProgress step={1} />
            <form onSubmit={onSubmit}>
                <FormCardTitle>
                    <h1>
                        회원가입을 위한 <br />
                        <strong>이용약관</strong>에 동의해주세요.
                    </h1>
                </FormCardTitle>
                <div>
                    <Checkbox
                        id='all'
                        label={<strong>서비스 전체 약관에 동의합니다.</strong>}
                        onChange={(e) => onChangeAll(e)}
                        checkboxStyle='solid'
                        checked={AllChecked}
                    />
                    <FormTermsContainer>
                        {termList &&
                            termList
                                .sort((a, b) => a.type - b.type)
                                .map((_, i) => {
                                    return (
                                        <TermCheckBoxHandler
                                            key={`check_${i}`}
                                            data={_}
                                            onChange={onChangeEach}
                                            checked={Checked}
                                            showTerm={() => ShowTermsHandler(_)}
                                        />
                                    )
                                })}
                    </FormTermsContainer>
                </div>
                <FormButtonBox>
                    <ActionButton
                        type='button'
                        size='form'
                        mode={RequiredChecked ? 'solid' : 'disabled'}
                        onClick={() => {
                            RequiredChecked && onNext()
                        }}>
                        다음
                    </ActionButton>
                </FormButtonBox>
            </form>
        </FormContainer>
    )
}

export default Terms
