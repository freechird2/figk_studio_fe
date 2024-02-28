// import Icon from "components/atoms/Icon";
import { useState } from 'react'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import { ReactDatePickerHeader } from './index.styled'

/**
 * monthDate: Date;
date: Date;
changeYear(year: number): void;
changeMonth(month: number): void;
customHeaderCount: number;
decreaseMonth(): void;
increaseMonth(): void;
prevMonthButtonDisabled: boolean;
nextMonthButtonDisabled: boolean;
decreaseYear(): void;
increaseYear(): void;
prevYearButtonDisabled: boolean;
nextYearButtonDisabled: boolean;
 */

interface DatePickerHeaderProps {
    parmas: ReactDatePickerCustomHeaderProps
}
const DatePickerHeader = ({ parmas }: DatePickerHeaderProps) => {
    const [_Date, _setDate] = useState<Date>(new Date())
    const YEARS = Array.from({ length: _Date.getFullYear() + 1 - 2000 }, (_, i) => _Date.getFullYear() - i)
    const MONTHS = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    const {
        monthDate,
        date,
        changeYear,
        changeMonth,
        customHeaderCount,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
        decreaseYear,
        increaseYear,
        prevYearButtonDisabled,
        nextYearButtonDisabled,
    } = parmas

    return (
        <ReactDatePickerHeader.Container>
            <ReactDatePickerHeader.Arrow onClick={decreaseMonth} />

            <ReactDatePickerHeader.SelectBox>
                <select
                    value={YEARS[date.getFullYear()]}
                    onChange={({ target: { value } }) => changeYear(Number(value))}>
                    {YEARS.map((year, index) => {
                        return (
                            <option
                                value={year}
                                key={year}>
                                {year}
                            </option>
                        )
                    })}
                </select>
                <select
                    value={MONTHS[date.getMonth()]}
                    onChange={({ target: { value } }) => {
                        changeMonth(MONTHS.indexOf(value))
                    }}>
                    {MONTHS.map((month, index) => {
                        return (
                            <option
                                value={month}
                                key={month}>
                                {month}
                            </option>
                        )
                    })}
                </select>
            </ReactDatePickerHeader.SelectBox>
            <ReactDatePickerHeader.Arrow
                className='right'
                onClick={increaseMonth}
            />
        </ReactDatePickerHeader.Container>
    )
}

export default DatePickerHeader
