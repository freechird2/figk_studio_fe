import API from 'api'
import { AxiosError } from 'axios'
import { useModal } from 'hook/useModal'
import useGetQuery from 'hook/useTQuery'
import { UserLoginModel } from 'model/auth'
import { GenericResponse } from 'model/common'
import React, { useContext, useEffect, useState } from 'react'
import { getCookie, removeCookie, removeStorage, setCookie } from 'util/storage/index'

interface FigAuthContextType {
    user: undefined | null | UserLoginModel
    device: undefined | 'PC' | 'IOS' | 'AOS'
    login: () => void
    logout: () => void
    pingExceptUrl: Array<string>
}

declare const window: any
const AuthContext = React.createContext<FigAuthContextType>(null!)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { Notice, Modal, closeNotice } = useModal()

    const [loginData, setLoginData] = useState<undefined | null | UserLoginModel>(undefined)
    const [device, setDevice] = useState<undefined | 'PC' | 'IOS' | 'AOS'>(undefined)
    const exceptUrl = ['/', '/login', '/form/terms', '/form/join', '/form/find-password']

    // 로그인 감지
    const { refetch: pingProccess } = useGetQuery(['@PING'], () => API.auth.ping(), {
        onSuccess: (res: GenericResponse) => pingSuccessCallback(res, 'process'),
        onError: (err: AxiosError) => loginFailCallback(err),
        enabled: !!getCookie('access'),
        refetchInterval: 10000,
    })

    const { refetch: refreshToken } = useGetQuery(['@REFRESH'], () => API.auth.refreshAccess(), {
        onSuccess: (res: GenericResponse) => refreshSuccessCallback(res),
        onError: (err: AxiosError) => refreshFailCallback(err),
        enabled: false,
    })

    // ping 실패시 사용자에게 알림 후 재로그인 시키기
    const loginFailCallback = (err: AxiosError) => {
        Notice({
            type: 'alert',
            icon: 'bang',
            title: '로그인 정보 만료',
            content: '로그인 정보가 만료되었어요.\n 다시 로그인해 주세요.',
            onClickConfirm: () => {
                closeNotice()
                removeToken()
            },
        })
    }

    const setPingProccessSuccessCallback = (d: UserLoginModel) => {
        setLoginData(d)
    }

    const pingSuccessCallback = (res: GenericResponse, type: 'login' | 'process') => {
        let apiData: UserLoginModel = res.data

        // 유효하지 않은 토큰 -> 재로그인
        if (type === 'process' && res.code === 40001) {
            removeToken()
            return
        }

        // 토큰 만료 -> 리프레쉬
        if (type === 'process' && res.code === 40002) {
            refreshToken()
            return
        }

        return setPingProccessSuccessCallback(apiData)
    }

    // 로그아웃
    const logoutCallback = () => {
        let finishTime = new Date()
        finishTime.setDate(finishTime.getDate() - 100)

        removeToken()
    }

    // 페이지 리렌더시 로그인 감지
    const loginManager = () => {
        const accessToken = getCookie('access')
        if (exceptUrl.includes(window.location.pathname)) return

        if (accessToken) {
            pingProccess()
        } else {
            Notice({
                type: 'alert',
                icon: 'bang',
                title: '로그인 정보 만료',
                content: '로그인 정보가 없습니다.\n 다시 로그인해 주세요.',
                onClickConfirm: () => {
                    closeNotice()
                },
            })

            removeToken()
        }
    }

    const removeToken = () => {
        removeStorage('refresh')
        removeCookie('access')
        setLoginData(null)

        // 토큰 없을시 로그인으로 강제 이동
        // 종속됨
        window.location.replace('/')
    }

    // 리프레시 만료로 인한 FAIL CB
    const refreshSuccessCallback = (res: GenericResponse) => {
        if (res.code !== 200) {
            Notice({
                type: 'alert',
                icon: 'bang',
                title: '로그인 정보 만료',
                content: '로그인 정보가 만료되었어요.\n 다시 로그인해 주세요.',
                onClickConfirm: () => {
                    closeNotice()
                    removeToken()
                },
            })
            return
        }

        setCookie('access', res.data.access)
        // 리프레쉬 성공시 새로고침하여 logindata 갱신
        window.location.reload()

        // 새로고침으로 대체
        // pingProccess()
    }

    // 현재 서버에서 response json 을 만들어서 보내주기 때문에 error 제어는
    // 서버 에러 등 피할 수 없는 상황일 때만 fail callback 호출
    const refreshFailCallback = (err: AxiosError) => {
        console.log('refresh Error')
    }

    const deviceManager = () => {
        // Native Token Data
        if (typeof window.AndroidScript != 'undefined' && window.AndroidScript != null) {
            setDevice('AOS')
            return
        }

        try {
            window.webkit.messageHandlers.loginRequest.postMessage('getToken')
            setDevice('IOS')
        } catch {}

        setDevice('PC')
    }

    useEffect(() => {
        if (loginData) {
            loginManager()
            deviceManager()
        }
    }, [])

    // 뒤로가기 감지
    useEffect(() => {
        loginManager()

        window.addEventListener('popstate', pingProccess)

        return () => {
            window.removeEventListener('popstate', pingProccess)
        }
    }, [])

    let value = {
        user: loginData,
        device,
        login: pingProccess,
        logout: logoutCallback,
        pingExceptUrl: exceptUrl,
    }

    // const pingProcessSuccessCallback = (res: GenericResponse) => {
    //     if (res.code === 200) {
    //         const apiData = res.data as UserLoginModel
    //         // setTokenData(apiData)
    //         setLoginData(apiData)
    //     } else if (res.code === 40001) {
    //         loginManager() // 재호출
    //     } else if (res.code === 40002) {
    //         const token = getStorage('refresh')

    //         if (token) refreshToken()
    //         else {
    //             removeTokenData()
    //         }
    //     } else {
    //         removeTokenData()
    //     }
    // }

    // const { refetch: pingProcess } = useGetQuery(['@pingProcess'], () => API.auth.ping(), {
    //     onSuccess: pingProcessSuccessCallback,
    //     enabled: getCookie('access') ? true : false,
    //     refetchInterval: 10000,
    //     refetchIntervalInBackground: false,
    // })

    // const refreshTokenSuccessCallback = (res: GenericResponse) => {
    //     if (res.code === 200) setTokenData(res.data)
    //     else removeTokenData()
    // }

    // const { refetch: refreshToken } = useGetQuery(['@refreshToken'], () => API.auth.refreshAccess(), {
    //     onSuccess: refreshTokenSuccessCallback,
    //     onError: (err: AxiosError) => {
    //         removeTokenData()
    //     },
    //     enabled: false,
    // })

    // const setTokenData = (data: UserLoginModel) => {
    //     setCookie('access', data.access)
    //     // setStorage('refresh', data.refresh)
    // }

    // const removeTokenData = () => {
    //     removeCookie('access')
    //     removeStorage('refresh')
    //     setLoginData(null)
    // }

    // 로그인 (Action = 로그인버튼 클릭시)
    // const loginCallback = (callback: VoidFunction) => {
    //     API.auth.ping().then((res: GenericResponse) => {
    //         if (res.code === 200) {
    //             let apiData: UserLoginModel = res.data
    //             setLoginData(apiData)
    //             callback()
    //         } else if (res.code === 200) {
    //             loginCallback(callback) // 재호출
    //         } else {
    //             setLoginData(null)
    //         }
    //     })
    // }

    // 로그아웃
    // const logoutCallback = (callback: VoidFunction) => {
    //     let finishTime = new Date()
    //     finishTime.setDate(finishTime.getDate() - 100)

    //     removeCookie('access')
    //     localStorage.removeItem('refresh')
    //     setLoginData(null)

    //     callback()
    // }

    // 로그인 (Ping = 페이지 로드할 때 마다) (login 페이지는 제외 하는 코드 추가)
    // const loginManager = () => {
    //     const accessToken = getCookie('access')

    //     if (exceptUrl.includes(window.location.pathname)) return

    //     if (accessToken) {
    //         pingProcess()
    //     } else {
    //         removeTokenData()
    //     }
    // }

    // const deviceManager = () => {
    //     // Native Token Data
    //     if (typeof window.AndroidScript != 'undefined' && window.AndroidScript != null) {
    //         setDevice('AOS')
    //         return
    //     }

    //     try {
    //         window.webkit.messageHandlers.loginRequest.postMessage('getToken')
    //         setDevice('IOS')
    //     } catch {}

    //     setDevice('PC')
    // }

    // useEffect(() => {
    //     if (loginData === null) {
    //         removeTokenData()
    //         window.location.replace('/')
    //     }
    // }, [loginData])

    // useEffect(() => {
    //     deviceManager()
    // }, [])

    // let value = {
    //     user: loginData,
    //     device,
    //     login: pingProcess,
    //     // logout: logoutCallback,
    //     pingExceptUrl: exceptUrl,
    //     pingProcess: pingProcess,
    // }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
