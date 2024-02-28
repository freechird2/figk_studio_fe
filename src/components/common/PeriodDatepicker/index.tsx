import ko from 'date-fns/locale/ko'
import { AnimatePresence } from 'framer-motion'
import { useOutsideClick } from 'hook/useOutsideClick'
import { PeriodState } from 'model/common'
import { useEffect, useState } from 'react'
import ReactDatePicker, { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { useRecoilValue } from 'recoil'
import { $globalReset } from 'recoil/filter/globalReset'
import { variants } from 'shared/variants'
import DatePickerHeader from '../DatePickerHeader'
import { S } from './index.styled'

const defaultValue: PeriodState = {
    isOpen: false,
    startDate: '',
    endDate: '',
    placeholder: true,
    startDateObj: null,
    endDateObj: null,
}

interface Props {
    getDate: (s: Date | null, e: Date | null) => void
    defaultStartDate?: string | null
    defaultEndDate?: string | null
}
const PeriodDatepicker = ({ getDate, defaultStartDate, defaultEndDate }: Props) => {
    const globalReset = useRecoilValue($globalReset)
    const [period, setPeriod] = useState<PeriodState>({
        ...defaultValue,
        startDate: defaultStartDate ? new Date(defaultStartDate).toLocaleDateString() : '',
        endDate: defaultEndDate ? new Date(defaultEndDate).toLocaleDateString() : '',
        startDateObj: defaultStartDate ? new Date(defaultStartDate) : null,
        endDateObj: defaultEndDate ? new Date(defaultEndDate) : null,
    })

    const { isOpen, startDate, endDate, placeholder, startDateObj, endDateObj } = period
    const periodRef = useOutsideClick(() => setPeriod((prev) => ({ ...prev, isOpen: false })))

    const openHandler = () => {
        return setPeriod((prev) => ({ ...prev, isOpen: !isOpen }))
    }
    const dateSubstring = (str: string | undefined) => {
        if (!str) return ''

        return str && str.substring(-1, str.length - 1)
    }

    const DATA_RANGE = `${startDate || ''}${startDate || endDate ? ' ~ ' : ''}${endDate || ''}`

    const onChangeDate = (e: [Date | null, Date | null]) => {
        setPeriod((prev) => ({
            ...prev,
            startDate: e[0] ? dateSubstring(e[0]?.toLocaleDateString()) : '',
            startDateObj: e[0],
            placeholder: false,
        }))
        if (e[0]) {
            setPeriod((prev) => ({
                ...prev,
                endDate: e[1] ? dateSubstring(e[1].toLocaleDateString()) : '',
                endDateObj: e[1],
            }))
        }
        getDate(e[0], e[1])
    }

    useEffect(() => {
        setPeriod({ ...defaultValue, placeholder: true })
    }, [globalReset])

    useEffect(() => {
        setPeriod({
            ...period,
            startDate: defaultStartDate ? new Date(defaultStartDate).toLocaleDateString() : '',
            endDate: defaultEndDate ? new Date(defaultEndDate).toLocaleDateString() : '',
        })
    }, [])

    return (
        <S.Container
            ref={periodRef}
            className='periodDatepicker'>
            <S.Contents className='contents'>
                <S.InputPeriod
                    className={`${startDate || endDate ? '' : placeholder ? 'placeholder' : ''}  ${
                        period.isOpen ? 'focus' : ''
                    }`}
                    onClick={openHandler}>
                    {DATA_RANGE || '기간 선택'}
                </S.InputPeriod>
                <AnimatePresence>
                    {isOpen && (
                        <S.PeridoDatepickerWrapper
                            variants={variants.fadeInOut}
                            initial='initial'
                            animate='animate'
                            exit='exit'>
                            <ReactDatePicker
                                locale={ko}
                                dateFormat='yyyy년 MM월 dd일'
                                selectsRange={true}
                                startDate={startDateObj}
                                endDate={endDateObj}
                                onChange={onChangeDate}
                                // onChange={(period) => {
                                //     setPeriod((prev) => ({
                                //         ...prev,
                                //         startDate: period[0],
                                //         placeholder: false,
                                //     }))
                                //     if (period[0]) {
                                //         setPeriod((prev) => ({
                                //             ...prev,
                                //             endDate: period[1],
                                //         }))
                                //     }
                                //     if (period[1]) {
                                //         setPeriod((prev) => ({
                                //             ...prev,
                                //             isOpen: false,
                                //         }))
                                //     }
                                // }}
                                shouldCloseOnSelect={false}
                                showMonthDropdown
                                useShortMonthInDropdown
                                inline
                                renderCustomHeader={(parmas: ReactDatePickerCustomHeaderProps) => (
                                    <DatePickerHeader parmas={parmas} />
                                )}
                            />
                        </S.PeridoDatepickerWrapper>
                    )}
                </AnimatePresence>
            </S.Contents>
        </S.Container>
    )
}

export default PeriodDatepicker
