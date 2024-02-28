import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setCookie = (name: string, value: string, option?: any) => {
    return cookies.set(name, value, { ...option })
}

export const getCookie = (name: string) => {
    return cookies.get(name)
}

export const removeCookie = (name: string) => {
    return cookies.remove(name)
}

export const setStorage = (name: string, value: string) => {
    return localStorage.setItem(name, value)
}

export const getStorage = (name: string) => {
    return localStorage.getItem(name)
}

export const removeStorage = (name: string) => {
    return localStorage.removeItem(name)
}
