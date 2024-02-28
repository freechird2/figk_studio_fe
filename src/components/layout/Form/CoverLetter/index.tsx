import API from 'api'
import { AxiosError } from 'axios'
import ActionButton from 'components/common/ActionButton'
import Flex from 'components/common/Flex'
import InputLabel from 'components/common/InputLabel'
import InputText from 'components/common/InputText'
import Textarea from 'components/common/Textarea'
import { useModal } from 'hook/useModal'
import useTMutation from 'hook/useTMutation'
import { GenericResponse } from 'model/common'
import { formVariants } from 'pages/Form'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { AuthorJoinModel, authorJoinState } from 'recoil/authorJoin/authorJoin'
import { ROUTER_PATH } from 'router'
import { VALIDATION } from 'shared/validation'
import { FormButtonBox, FormCardTitle, FormContainer, FormProgress } from '../index.styled'

export type JoinTypes = {
    nickName?: string
    introductory_text: string //소개글
    instagram?: string
    blog?: string
    homepage?: string
}

const CoverLetter = () => {
    const navigate = useNavigate()
    const { Notice, closeNotice } = useModal()
    const [apiFlag, setApiFlag] = useState<boolean>(false)
    const [authorJoinData, setAuthorJoinData] = useRecoilState(authorJoinState)

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

    const {
        control,
        formState: { errors },
        handleSubmit,
        setValue,
        getValues,
    } = useForm<JoinTypes>({
        defaultValues: {
            nickName: '',
            introductory_text: '',
            instagram: '',
            blog: '',
            homepage: '',
        },
    })

    const CompleteConfirmHandler = () => {
        closeNotice()
        setTimeout(() => {
            navigate(ROUTER_PATH.LOGIN)
        }, 300)
    }

    const onSubmit = () => {
        if (Object.keys(errors).length === 0) {
            //에러 O
            const { nickName, introductory_text, instagram, blog, homepage } = getValues()

            setAuthorJoinData((prev) => ({
                ...prev,
                nickname: nickName || authorJoinData.name,
                introduction: introductory_text || '',
                instagram: instagram || '',
                blog: blog || '',
                homepage: homepage || '',
            }))

            setApiFlag(true)
        }
        //   Notice({
        //     icon: 'checked',
        //     type: 'alert',
        //     title: '회원가입 완료',
        //     content: '회원가입이 완료되었습니다.\n로그인 후 이용해주세요.',
        //     onClickConfirm: CompleteConfirmHandler,
        // })
    }

    const accessDeniedConfirm = () => {
        closeNotice()
        navigate('/')
        return
    }

    useEffect(() => {
        if (!authorJoinData.id)
            Notice({
                icon: 'bang',
                type: 'alert',
                title: '접근 불가',
                content: '비정상 접근입니다.\n관리자에게 문의하세요.',
                onClickConfirm: accessDeniedConfirm,
            })

        setValue('nickName', authorJoinData.nickname)
        setValue('introductory_text', authorJoinData.introduction)
        setValue('blog', authorJoinData.blog)
        setValue('homepage', authorJoinData.homepage)
        setValue('instagram', authorJoinData.instagram)
    }, [])

    useEffect(() => {
        if (apiFlag) joinAuthor(authorJoinData)
    }, [apiFlag])
    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormProgress step={3} />
                <FormCardTitle>
                    <h1>
                        <strong>핔커소개</strong>에 들어갈 정보를
                        <br /> 입력해주세요.
                    </h1>
                </FormCardTitle>
                <Flex
                    direction='column'
                    gap={34}>
                    <Flex
                        direction='column'
                        gap={formVariants.gap.label}>
                        <InputLabel>
                            필명<span>*미작성시 이름으로 등록됩니다.</span>
                        </InputLabel>
                        <InputText
                            name='nickName'
                            control={control}
                            placeholder='최대 30자 입력가능'
                            rules={{
                                maxLength: {
                                    value: 30,
                                    message: '30자 이내로 입력해주세요.',
                                },
                            }}
                            errorMessage={errors.nickName?.message as string}>
                            {/* {!checkNickName.checking && (
                <InputRoundButton
                  isSuccess={checkNickName.success}
                  mode="solid"
                  onClick={nickCheckHandler}
                >
                  중복
                </InputRoundButton>
              )} */}
                        </InputText>
                    </Flex>
                    <Flex
                        direction='column'
                        gap={formVariants.gap.label}>
                        <InputLabel>소개글</InputLabel>

                        <Textarea
                            name='introductory_text'
                            control={control}
                            rules={{
                                maxLength: {
                                    value: 150,
                                    message: '150자 이내로 입력해주세요.',
                                },
                            }}
                            placeholder='최대 150자 입력가능'
                            errorMessage={errors.introductory_text?.message as string}
                        />
                    </Flex>
                    <Flex
                        direction='column'
                        gap={formVariants.gap.label}>
                        <InputLabel>인스타그램</InputLabel>
                        <InputText
                            name='instagram'
                            control={control}
                            rules={{
                                pattern: {
                                    value: VALIDATION.URL,
                                    message: 'https://로 시작하는 URL을 입력해주세요..',
                                },
                            }}
                            placeholder='https://'
                            errorMessage={errors.instagram?.message as string}
                        />
                    </Flex>
                    <Flex
                        direction='column'
                        gap={formVariants.gap.label}>
                        <InputLabel>블로그</InputLabel>

                        <InputText
                            name='blog'
                            control={control}
                            rules={{
                                pattern: {
                                    value: VALIDATION.URL,
                                    message: 'https://로 시작하는 URL을 입력해주세요..',
                                },
                            }}
                            placeholder='https://'
                            errorMessage={errors.blog?.message as string}
                        />
                    </Flex>
                    <Flex
                        direction='column'
                        gap={formVariants.gap.label}>
                        <InputLabel>홈페이지</InputLabel>
                        <InputText
                            name='homepage'
                            control={control}
                            rules={{
                                pattern: {
                                    value: VALIDATION.URL,
                                    message: 'https://로 시작하는 URL을 입력해주세요..',
                                },
                            }}
                            placeholder='https://'
                            errorMessage={errors.homepage?.message as string}
                        />
                    </Flex>
                </Flex>
                <FormButtonBox>
                    <ActionButton
                        mode='line'
                        size='form'
                        onClick={() => navigate(ROUTER_PATH.JOIN)}>
                        이전
                    </ActionButton>
                    <ActionButton
                        type='submit'
                        size='form'>
                        가입완료
                    </ActionButton>
                </FormButtonBox>
            </form>
        </FormContainer>
    )
}

export default CoverLetter
