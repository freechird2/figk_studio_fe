import API from 'api'
import { AxiosError } from 'axios'
import ActionButton from 'components/common/ActionButton'
import Flex from 'components/common/Flex'
import InputText from 'components/common/InputText'
import { FormButtonBox, FormCardTitle, FormContainer } from 'components/layout/Form/index.styled'
import { useModal } from 'hook/useModal'
import useTMutation from 'hook/useTMutation'
import { FindPasswordTypes } from 'model/auth'
import { GenericResponse } from 'model/common'
import { formVariants } from 'pages/Form'
import { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useIsMutating } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { modalLoadingState } from 'recoil/atom/modal'
import { loadingState } from 'recoil/loading/loading'
import { ROUTER_PATH } from 'router'
import { VALIDATION, phoneToHypheon } from 'shared/validation'

const FindPassword = () => {
    const navigate = useNavigate()
    const [modalLoading, setModalLoading] = useRecoilState(modalLoadingState)
    const isMutating = useIsMutating({ mutationKey: ['@UserFindPasswordVerified', 'T'] })
    const [loading, setLoading] = useRecoilState(loadingState)
    const { Notice, closeNotice } = useModal()
    const {
        control,
        formState: { errors },
        handleSubmit,
        setValue,
        getValues,
    } = useForm<FindPasswordTypes>({
        defaultValues: {
            email: '',
            phone: '',
            name: '',
        },
    })

    const FindSuccessCallback = () => {
        closeNotice()

        Notice({
            icon: 'checked',
            type: 'alert',
            title: '전송이 완료되었습니다.',
            content: '이메일로 임시 비밀번호 전송 시\n시간이 소요될 수 있습니다.',
            onClickConfirm: () => {
                closeNotice()
                navigate(ROUTER_PATH.LOGIN)
            },
        })
    }

    const { mutate, error, isLoading, isSuccess } = useTMutation(
        ['@UserFindPasswordVerified', 'T'],
        (data: FieldValues) => API.auth.findPassword({ ...data, phone: data.phone.replaceAll('-', '') }),
        () => FindSuccessCallback(),
        {
            onError: (err: AxiosError) => {},
        }
    )

    const sendMail = () => {
        if (modalLoading) return

        mutate(getValues())
    }

    useEffect(() => {
        if (error) {
            const errData = error as AxiosError<GenericResponse>

            closeNotice()

            Notice({
                icon: 'bang',
                type: 'alert',
                title: '비밀번호 찾기',
                content: errData.response?.data.code === 409 ? '존재하지 않는 회원 정보입니다.' : '오류가 발생했습니다. 다시 시도해주세요.',
                onClickConfirm: () => {
                    closeNotice()
                },
            })
        }
    }, [error])

    useEffect(() => {
        if (isMutating === 0) {
            setLoading(false)
            setModalLoading(false)
        } else {
            setLoading(true)
            setModalLoading(true)
        }
    }, [isMutating])

    return (
        <FormContainer>
            <form
                onSubmit={handleSubmit((data: FieldValues) => {
                    Notice({
                        icon: 'mail',
                        type: 'confirm',
                        title: '비밀번호 찾기',
                        content: '아이디(이메일)로 임시 비밀번호를\n전송하시겠습니까?',
                        confirmText: '전송',
                        onClickConfirm: () => {
                            sendMail()
                        },
                    })
                })}>
                <FormCardTitle>
                    <h1>
                        <strong>비밀번호 찾기</strong>
                    </h1>
                    <h2>아이디(이메일) 확인은 figk@fig.xyz으로 문의해주세요.</h2>
                </FormCardTitle>
                <Flex
                    direction='column'
                    gap={formVariants.gap.label}>
                    <InputText
                        name='email'
                        control={control}
                        rules={{
                            required: '이메일을 입력하세요.',
                            pattern: {
                                value: VALIDATION.EMAIL,
                                message: '이메일 형식이 아닙니다.',
                            },
                        }}
                        placeholder='이메일(아이디)'
                        errorMessage={errors.email?.message as string}
                    />

                    <InputText
                        name='phone'
                        control={control}
                        rules={{
                            required: '휴대폰 번호를 입력하세요.',
                            pattern: {
                                value: VALIDATION.PHONE,
                                message: '올바른 휴대폰 번호를 입력해주세요.',
                            },
                            onChange: () => setValue('phone', phoneToHypheon(getValues('phone'))),
                        }}
                        placeholder='휴대폰 번호'
                        errorMessage={errors.phone?.message as string}
                    />
                    <InputText
                        name='name'
                        control={control}
                        rules={{
                            required: '이름을 입력하세요.',
                        }}
                        placeholder='이름'
                        errorMessage={errors.name?.message as string}
                    />
                </Flex>
                <FormButtonBox>
                    <ActionButton
                        mode='line'
                        size='form'
                        onClick={() => navigate(`${ROUTER_PATH.LOGIN}`)}>
                        돌아가기
                    </ActionButton>
                    <ActionButton
                        // as="span"
                        type='submit'
                        size='form'>
                        확인
                    </ActionButton>
                </FormButtonBox>
            </form>
        </FormContainer>
    )
}

export default FindPassword
