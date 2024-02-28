import { atom } from 'recoil'
import { v1 } from 'uuid'

export const loadingState = atom<boolean>({
    key: `loading_${v1()}`,
    default: false,
})
