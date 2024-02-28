import moment from 'moment'
import { useEffect, useState } from 'react'
import { 수, 월, 화 } from 'shared/common'
import { convertZeroToInclude } from 'shared/convert'
import { sendingJudgement } from 'shared/validation'

const Countdown = () => {
    const [countdown, setCountdown] = useState<string>('')
    const [status, setStatus] = useState<string>('')

    useEffect(() => {
        const calculateCountdown = () => {
            const now = moment()
            const notSending = sendingJudgement(now.day(), now.hour())

            /**
             * 상태별 담주 판단
             */
            const sendingNextWeek = now.day() <= 월 ? 월 : 월 + 7
            const votingNextWeek = now.day() <= 수 ? 수 : 수 + 7
            const judgementNextWeek = now.day() <= 화 ? 화 : 화 + 7

            // 상태별 마감시간
            let targetDate

            if (notSending === '송고') {
                setStatus(notSending)
                targetDate = moment().day(sendingNextWeek).hour(16).minute(0).second(0)
            } else if (notSending === '투표') {
                setStatus(notSending)

                targetDate = moment().day(votingNextWeek).hour(11).minute(0).second(0)
            } else if (notSending === '심사') {
                setStatus(notSending)
                targetDate = moment().day(judgementNextWeek).hour(11).minute(0).second(0)
            } else {
                setCountdown('0')
                return
            }

            const duration = moment.duration(targetDate.diff(now))
            const days = duration.days()
            const hours = duration.hours()
            const minutes = duration.minutes()
            const seconds = duration.seconds()

            const countdownString = `${days}일 ${convertZeroToInclude(hours)}:${convertZeroToInclude(minutes)}:${convertZeroToInclude(seconds)}`
            setCountdown(countdownString)
        }

        calculateCountdown()

        const interval = setInterval(calculateCountdown, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return { status, countdown }
}

export default Countdown
