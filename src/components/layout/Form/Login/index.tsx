import API from 'api'
import { useAuth } from 'AuthProvider'
import ActionButton from 'components/common/ActionButton'
import Flex from 'components/common/Flex'
import InputText from 'components/common/InputText'
import { FormButtonBox, FormContainer, GrayTextLink } from 'components/layout/Form/index.styled'
import { useModal } from 'hook/useModal'
import useTMutation from 'hook/useTMutation'
import useWidth from 'hook/useWidth'
import { LoginTypes, UserLoginModel } from 'model/auth'
import { GenericResponse } from 'model/common'
import { formVariants } from 'pages/Form'
import { useEffect } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import { loginErrorHandle } from 'shared/queryOption/login'
import { VALIDATION } from 'shared/validation'
import { getCookie, setCookie, setStorage } from 'util/storage'

const Login = () => {
    const { login } = useAuth()

    const navigate = useNavigate()
    const { media } = useWidth()
    const { Notice, closeNotice } = useModal()
    const { control, formState, handleSubmit, watch, setError } = useForm<LoginTypes>({
        defaultValues: {
            // 배포시 삭제
            email: '',
            password: '',
        },
    })

    const LoginSuccessCallback = (data: UserLoginModel) => {
        setCookie('access', data.access)
        setStorage('refresh', data.refresh)
        navigate(ROUTER_PATH.HOME)
        window.location.reload()
    }

    const { mutate: tryLogin, error: LoginError } = useTMutation(
        ['@UserVerifiedAndAuthentication', 'T'],
        (data: FieldValues) => API.auth.login(data),
        (data: UserLoginModel) => LoginSuccessCallback(data),
        loginErrorHandle
    )

    const onSubmit = (data: FieldValues) => tryLogin(data)

    const error = LoginError?.response?.data as GenericResponse | undefined

    // 로그인 되어 있을 시 HOME으로 이동
    if (getCookie('access')) {
        navigate(ROUTER_PATH.HOME)
    }

    useEffect(() => {
        if (!error) return

        if (error.code === 401) {
            setError('email', { type: 'focus', message: '입력하신 이메일을 다시 확인해주세요.' }, { shouldFocus: true })
            setError('password', { type: 'focus', message: '입력하신 비밀번호를 다시 확인해주세요.' })
        } else if (error.code === 409) {
            Notice({
                icon: 'bang',
                type: 'alert',
                title: '',
                content: error.message,
                onClickConfirm: () => {
                    closeNotice()
                },
            })
        }
    }, [error])
    return (
        <FormContainer>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* {media.tablet && <FormCardTitle />} */}
                <Flex
                    direction='column'
                    gap={formVariants.gap.label}>
                    <InputText
                        name='email'
                        type='text'
                        control={control}
                        rules={{
                            required: '이메일을 입력해주세요.',
                            pattern: {
                                value: VALIDATION.EMAIL,
                                message: '이메일 형식이 아닙니다.',
                            },
                        }}
                        placeholder='아이디(이메일)'
                        errorMessage={formState.errors.email?.message as string}
                    />
                    <InputText
                        name='password'
                        control={control}
                        type='password'
                        rules={{
                            required: '비밀번호를 입력해주세요.',
                            // pattern: {
                        }}
                        placeholder='비밀번호'
                        errorMessage={formState.errors.password?.message as string}
                    />
                </Flex>
                <FormButtonBox>
                    <ActionButton
                        size='form'
                        type='submit'>
                        로그인
                    </ActionButton>
                </FormButtonBox>
                <GrayTextLink to={ROUTER_PATH.FIND_PASSWORD}>비밀번호를 잊으셨나요?</GrayTextLink>
            </form>
        </FormContainer>
    )
}

export default Login
