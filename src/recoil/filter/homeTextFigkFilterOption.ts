import { HomeTextFigkFilterOption } from 'model/common'
import { atom } from 'recoil'
import { HOME_PER } from 'shared/common'

const defaultFilterOption: HomeTextFigkFilterOption = {
    per: HOME_PER,
    page: 1,
    endDate: null,
    startDate: null,
    word: '',
    status: null,
}

export const $homeTextFigkFilterOption = atom<HomeTextFigkFilterOption>({
    key: `homeTextFigkFilterOption`,
    default: defaultFilterOption,
})
