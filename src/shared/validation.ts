import moment from 'moment'
import { 목, 송고마감, 송고시작, 송고심사마감, 송고심사시작, 수, 월, 일, 토, 투표마감, 투표시작, 화 } from './common'

const EMAIL = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
// const PASSWORD = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
const PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/

const PHONE = /^01([0|1|6|7|8|9])-([0-9]{3,4})-([0-9]{4})$/

const URL = /^https:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/
const ACCOUNT = /^[0-9-]+$/
const PHONE_LENGTH = (value: string, maxlength: number) => {
    if (value.length > maxlength) {
        return value.substring(0, maxlength)
    }
}
export const VALIDATION = {
    EMAIL,
    PASSWORD,
    PHONE,
    PHONE_LENGTH,
    URL,
    ACCOUNT,
}

export const phoneToHypheon = (phone: string) => {
    return phone.replace(/\D/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3')
}

export const dateToMomentHypeon = (date: Date | null | undefined, hour?: boolean) => {
    if (!date) return null
    return date && hour ? moment(date).format('YYYY-MM-DD HH:mm') : moment(date).format('YYYY-MM-DD')
}

export const convertTextFigkStatus = (e: string) => {
    if (!e) return '미송고'
    return e === 'E' ? '송고 완료' : e === 'N' ? '미송고' : e === 'P' ? '당선' : e === 'F' ? '낙선' : e === 'T' ? '반려' : '투표마감'
}

export const convertTextFigkStatusColor = (e: string) => {
    if (!e) return 'gray40'
    return e === 'E' ? 'gray90' : e === 'N' ? 'gray40' : e === 'P' ? 'positive' : e === 'C' ? 'gray40' : 'error'
}

export const 에디터특수기호변경 = (str: string) => {
    // str = str?.replaceAll('&lt;', '<')
    // str = str?.replaceAll('&gt;', '>')
    // str = str?.replaceAll('&amp;', '&')
    // return str
    if (str) {
        return str
            .replace(/&nbsp;/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&gt;/g, '>')
            .replace(/&lt;/g, '<')
            .toString()
    }
    return ''
}

/**
 *
 * @param s: day
 * @param h: hour
 * @returns 목 10시부터 일 -> 월 18시 사이일 때 '송고' 리턴
 * 월 16시부터 화요일 11시 전이라면 '심사' 리턴
 * 화요일 11시부터 수요일 11시 전이라면 '투표' 리턴
 *
 */
export const sendingJudgement = (d: number, h: number) => {
    const sendingDay = (d === 목 && h >= 송고시작) || (d >= 목 && d <= 토) || d === 일 || (d === 월 && h < 송고마감)
    const sendingJudgeDay = (d === 월 && h >= 송고심사시작) || (d === 화 && h < 송고심사마감)
    const votingJudgeDay = (d === 화 && h >= 투표시작) || (d === 수 && h < 투표마감)

    let judge: '송고' | '심사' | '투표' | null = null

    if (sendingDay) {
        judge = '송고'
    } else if (!sendingDay && sendingJudgeDay) {
        judge = '심사'
    } else if (!sendingDay && !sendingJudgeDay && votingJudgeDay) {
        judge = '투표'
    }

    return judge
}
