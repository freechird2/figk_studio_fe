import API from 'api'
import { AxiosError } from 'axios'
import AccountCertification from 'components/common/AccountCertification'
import ActionButton from 'components/common/ActionButton'
import Flex from 'components/common/Flex'
import InputLabel from 'components/common/InputLabel'
import InputText from 'components/common/InputText'
import Select from 'components/common/Select'
import { useModal } from 'hook/useModal'
import useTMutation from 'hook/useTMutation'
import { FigkOptionModel, GenericResponse } from 'model/common'
import { formVariants } from 'pages/Form'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { AuthorJoinModel, authorJoinState } from 'recoil/authorJoin/authorJoin'
import { VALIDATION } from 'shared/validation'
import styled from 'styled-components'
import { FormButtonBox, FormCardTitle, FormContainer, FormDefaultValue, FormProgress } from '../index.styled'

const NoticeText = styled.p`
    font-size: 1.3rem;
    color: ${(p) => p.theme.palette.gray60};
`
type JoinTypes = {
    name: string
    password: string
    confirmPassword: string
    account: string
}

const AccountSelectFlex = styled.div`
    display: flex;
    gap: 12px;
    > div {
        flex: 1;
        > div:first-child {
            height: ${(p) => p.theme.layout.inputHeight2};
        }
    }
`

export const AccountTypeSelectData: FigkOptionModel[] = [
    { value: null, option: '사업자 유형 선택' },
    { value: 'N', option: '일반' },
]

export const BankSelectData: FigkOptionModel[] = [
    { value: null, option: '상태 전체' },
    { value: 'N', option: '기업' },
    { value: 'F', option: '신한' },
]

const Join = () => {
    const { Notice, closeNotice } = useModal()
    const navigate = useNavigate()
    const [authorJoinData, setAuthorJoinData] = useRecoilState(authorJoinState)
    const [apiFlag, setApiFlag] = useState<boolean>(false)

    const [account, setAccount] = useState<string>('')
    const {
        register,
        control,
        formState: { errors },
        watch,
        handleSubmit,
        getValues,
        setValue,
        setError,
    } = useForm<JoinTypes>({
        defaultValues: {
            name: '',
            password: '',
            confirmPassword: '',
            account: '',
        },
    })
    //계좌인증 인풋 onChange 함수 숫자와 '-'만 입력 가능
    const restrictInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const regex = /^[0-9-]+$/
        let input = e.target.value

        if (!regex.test(input)) {
            return (e.target.value = input.slice(0, -1))
        }
        if (input.length > 14) {
            return (input = input.slice(0, 14))
        }
        return input
    }

    const authorJoinSuccessCallback = (res: GenericResponse) => {
        setApiFlag(false)
        if (res.code === 200) {
            Notice({
                icon: 'checked',
                type: 'alert',
                title: `회원가입 완료`,
                content: `회원가입이 완료되었습니다.\n로그인 후 이용해주세요.`,
                onClickConfirm: () => {
                    closeNotice()
                    navigate('/')
                },
            })
        }
    }

    const { mutate: joinAuthor, error: joinError } = useTMutation(
        ['@joinAuthor', JSON.stringify(authorJoinData)],
        (data: AuthorJoinModel) => API.Join.joinAuthor(data),
        authorJoinSuccessCallback,
        {
            onError: (err: AxiosError) => {
                setApiFlag(false)
                const error = err.response?.data as GenericResponse

                Notice({
                    icon: 'bang',
                    type: 'alert',
                    title: `오류가 발생했습니다.`,
                    content: error.message,
                    onClickConfirm: () => {
                        closeNotice()
                    },
                })
            },
        }
    )

    const accessDeniedConfirm = () => {
        closeNotice()
        navigate('/')
        return
    }

    const watchAll = Object.values(watch())

    const onSubmit = () => {
        if (getValues().password !== getValues().confirmPassword) {
            setError('confirmPassword', {
                type: 'custom',
                message: '비밀번호와 일치하지 않습니다.',
            })
        } else if (Object.keys(errors).length === 0) {
            //에러 O
            setAuthorJoinData((prev) => ({
                ...prev,
                password: getValues().password,
            }))
            setApiFlag(true)
        }
    }

    useEffect(() => {
        if (apiFlag) joinAuthor(authorJoinData)
    }, [apiFlag])

    useEffect(() => {
        if (!authorJoinData.id)
            Notice({
                icon: 'bang',
                type: 'alert',
                title: '접근 불가',
                content: '비정상 접근입니다.\n관리자에게 문의하세요.',
                onClickConfirm: accessDeniedConfirm,
            })

        setValue('password', authorJoinData.password)
        setValue('confirmPassword', authorJoinData.password)
    }, [])

    return (
        <FormContainer>
            <FormProgress step={1} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormCardTitle>
                    <h1>
                        핔커님의&nbsp;
                        <strong>개인정보</strong>를<br /> 확인해주세요.
                    </h1>
                </FormCardTitle>
                <Flex
                    direction='column'
                    gap={34}>
                    {/* 아이디(이메일) */}
                    <Flex
                        direction='column'
                        gap={formVariants.gap.label}>
                        <InputLabel>아이디(이메일)</InputLabel>
                        <FormDefaultValue>{authorJoinData.email}</FormDefaultValue>
                    </Flex>
                    {/* 비밀번호 */}
                    <Flex
                        direction='column'
                        gap={formVariants.gap.label}>
                        <InputLabel required>비밀번호</InputLabel>
                        <Flex
                            direction='column'
                            gap={formVariants.gap.input}>
                            <InputText
                                name='password'
                                type='password'
                                control={control}
                                rules={{
                                    required: '비밀번호를 입력하세요.',
                                    pattern: {
                                        value: VALIDATION.PASSWORD,
                                        message: '비밀번호 형식이 아닙니다.',
                                    },
                                }}
                                placeholder='대소문자 영문, 숫자, 특수기호 포함 8자 이상'
                                errorMessage={errors.password?.message as string}
                            />
                            <InputText
                                name='confirmPassword'
                                type='password'
                                control={control}
                                rules={{
                                    required: '비밀번호를 다시 입력하세요.',
                                    pattern: {
                                        value: VALIDATION.PASSWORD,
                                        message: '비밀번호 형식이 아닙니다.',
                                    },
                                }}
                                placeholder='비밀번호 확인'
                                errorMessage={errors.confirmPassword?.message as string}
                            />
                        </Flex>
                    </Flex>
                    {/* <NoticeText>
            *일반 외 다른 사업자는 관리자에게 문의해주세요.
          </NoticeText> */}
                </Flex>
                {/* 이름 */}
                <Flex
                    direction='column'
                    gap={formVariants.gap.label}>
                    <InputLabel required>이름</InputLabel>
                    <InputText
                        name='name'
                        type='text'
                        control={control}
                        rules={{
                            required: '이름을 입력하세요.',
                        }}
                        placeholder='은행 선택'
                        errorMessage={errors.name?.message as string}
                    />
                </Flex>
                {/* 사업자 유형 */}
                <Flex
                    direction='column'
                    gap={formVariants.gap.label}>
                    <InputLabel required>사업자 유형</InputLabel>
                    <AccountSelectFlex>
                        <Select
                            selectType='form'
                            defaultValue={AccountTypeSelectData[1].value}
                            placeholderText='사업자 유형 선택'
                            options={AccountTypeSelectData}
                        />
                    </AccountSelectFlex>
                    <FormDefaultValue>{`${authorJoinData.bankName} ${authorJoinData.accountNumber}`}</FormDefaultValue>
                </Flex>

                {/* 계좌정보 */}
                <Flex
                    direction='column'
                    gap={formVariants.gap.label}>
                    <InputLabel required>계좌정보</InputLabel>
                    <Flex
                        direction='column'
                        gap={formVariants.gap.input}>
                        <AccountSelectFlex>
                            <Select
                                selectType='form'
                                defaultValue={null}
                                options={BankSelectData}
                                placeholderText='은행 선택'
                            />
                        </AccountSelectFlex>
                        <AccountCertification
                            value={account}
                            onChange={(e) => setAccount(restrictInput(e))}
                            placeholder='은행 선택'
                        />
                        <NoticeText>*일반 외 다른 사업자는 관리자에게 문의해주세요.</NoticeText>
                        <NoticeText>*본인 명의의 계좌가 아닐 경우 심사에서 반려될 수 있습니다.</NoticeText>
                    </Flex>
                    <FormDefaultValue>{`${authorJoinData.bankName} ${authorJoinData.accountNumber}`}</FormDefaultValue>
                </Flex>
                <FormButtonBox>
                    <ActionButton
                        type='submit'
                        size='form'
                        // mode={valid ? "solid" : "disabled"}
                        mode={watch().password && watch().confirmPassword ? 'solid' : 'disabled'}>
                        다음
                    </ActionButton>
                </FormButtonBox>
            </form>
        </FormContainer>
    )
}

export default Join
