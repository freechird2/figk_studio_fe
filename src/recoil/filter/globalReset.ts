import { atom } from 'recoil'

export const $globalReset = atom<boolean>({
    key: `globalReset`,
    default: false,
})
