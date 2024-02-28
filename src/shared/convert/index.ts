import { textFigkStatusDumm } from 'shared/common'

//공모상태 (N: 없음, E: 지원, C: 투표 마감, P: 합격, F: 불합격 )
export const convertTextFigkStatus = (s: string) => {
    return textFigkStatusDumm.filter((i) => i.status === s)[0].title ?? ''
}

// 백엔드 날짜형식이 년월일 시간이므로 GMT 형식이 아니므로 moment 도입
export const dateToDotDate = (date: string | undefined, isShow?: boolean) => {
    return date && isShow ? date : date?.split(' ')[0]
}

export const convertZeroToInclude = (n: number) => {
    return n < 10 ? `0${n}` : n
}

export const 회차 = (value?: number) => {
    if (!value) return '0'
    return value.toString().padStart(3, '0')
}
