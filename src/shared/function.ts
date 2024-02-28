import moment from 'moment'

export function throttle<Args extends unknown[]>(fn: any, cooldown: number) {
    let lastArgs: Args | undefined

    const run = () => {
        if (lastArgs) {
            fn(...lastArgs)
            lastArgs = undefined
        }
    }

    const throttled = (...args: Args) => {
        const isOnCooldown = !!lastArgs

        lastArgs = args

        if (isOnCooldown) {
            return
        }

        window.setTimeout(run, cooldown)
    }

    return throttled
}

export const debounce = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>

    return (...args: Parameters<T>): ReturnType<T> => {
        let result: any
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
            result = fn(...args)
        }, delay)
        return result
    }
}

export const convertDateYYYYMMDD = (date: string) => {
    return moment(date, 'YY-MM-DD').format('YYYY. MM. DD')
}

export const calNewNotice = (date: string) => {
    return moment().diff(moment(date, 'YY-MM-DD hh:mm'), 'weeks') < 1
}
