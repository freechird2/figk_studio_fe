import { FigkOptionModel, HomeTextFigkFilterOption, NoticeFilterOption, TextFigkModel, VoteFilterOption } from 'model/common'
import { 회차 } from 'shared/convert'

export const HOME_PER = 5
export const SENDING_PER = 5
export const NOTICE_PER = 10

export const SKELETON_DELAY = 700

export const 월 = 1
export const 화 = 2
export const 수 = 3
export const 목 = 4
export const 금 = 5
export const 토 = 6
export const 일 = 0

export const 송고시작 = 10
export const 송고마감 = 16
export const 송고심사시작 = 16
export const 송고심사마감 = 11
export const 투표시작 = 11
export const 투표마감 = 11
export const 투표심사시작 = 11
// 발행이랑 합침
export const 투표심사마감 = 10

export const getQuery = (decode?: boolean) => {
    let query_string = window.location.search
    query_string = query_string.replace('?', '')
    const query_string_arr = query_string.split('&')
    const query = {} as { [attr: string]: string }
    for (let i = 0; i < query_string_arr.length; i++) {
        const key_value_str = query_string_arr[i]
        const key_value_arr = key_value_str.split('=')
        if (key_value_arr.length === 2) {
            query[key_value_arr[0]] = key_value_arr[1] ? (decode ? decodeURIComponent(key_value_arr[1]) : key_value_arr[1]) : ''
        } else if (key_value_arr.length > 2) {
            query[key_value_arr[0]] = key_value_arr[1]
                ? decode
                    ? decodeURIComponent(key_value_arr.slice(1).join('='))
                    : key_value_arr.slice(1).join('=')
                : ''
        }
    }

    return query
}

export const textFigkStatusDumm = [
    { status: 'N', title: '없음' },
    { status: 'E', title: '지원' },
    { status: 'C', title: '투표 마감' },
    { status: 'F', title: '불합격' },
]

export const commonSearchRequestInitData: HomeTextFigkFilterOption = {
    per: HOME_PER,
    page: 1,
    endDate: null,
    startDate: null,
    word: '',
    status: null,
}

export const applySearchRequestInitData: VoteFilterOption = {
    per: SENDING_PER,
    page: 1,
    word: '',
    status: null,
    week: null,
}

export const noticeSearchRequestInitData: NoticeFilterOption = {
    per: NOTICE_PER,
    page: 1,
}

// (N: 없음, E: 지원, P: 합격, F: 불합격 )
//  미송고   송고완료    당선     낙선
export const homeSelectFilterData: FigkOptionModel[] = [
    { value: null, option: '상태 전체' },
    { value: 'N', option: '미송고' },
    { value: 'E', option: '송고완료' },
    { value: 'T', option: '반려' },
    { value: 'P', option: '당선' },
    { value: 'F', option: '낙선' },
]

export const applySelectFilterData: FigkOptionModel[] = [
    { value: null, option: '상태 전체' },
    { value: 'P', option: '당선' },
    { value: 'F', option: '낙선' },
]

export const createWeek = (w?: number) => {
    if (!w) return []
    let arr: FigkOptionModel[] = []
    for (let s = 1; s < w; s++) {
        arr.push({ value: s, option: `vol.${회차(s)}` })
    }
    arr.push({ value: null, option: '회차 전체' })

    return arr.reverse()
}

export const createtextFigkInitData = (data?: TextFigkModel) => {
    return data
        ? {
              title: data.title,
              subTitle: data.subTitle,
              content: data.content,
              link: data.link,
              tags: data.tag ? data.tag.map((_) => _.name).join(',') : '',
          }
        : {
              title: '',
              subTitle: '',
              content: '',
              link: '',
              tags: '',
          }
}

//글 작성 텍스트 글자 수 제한
export const writingFormMaxLength = (str: string, maxLength?: number) => {
    if (maxLength) {
        return str.replace(/\n/g, '').substring(0, maxLength - 1)
    }
    return str.replace(/\n/g, '')
}
