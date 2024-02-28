import { AnimatePresence } from 'framer-motion'
import { useOutsideClick } from 'hook/useOutsideClick'
import { FigkOptionModel } from 'model/common'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { $globalReset } from 'recoil/filter/globalReset'
import { variants } from 'shared/variants'
import { S } from './index.styled'
type SelectedTypes = {
    isOpen: boolean
    value: string
    isFirstTouch?: boolean
}
interface SelectProps {
    options: FigkOptionModel[]
    getOption?: (e: string) => void
    defaultValue?: string | null
    placeholderText?: string
    selectType?: 'default' | 'form' // "form" : //defaultValue가 플레이스홀더로 있는 select type
}
const Select = ({ options, getOption, defaultValue, placeholderText, selectType = 'default' }: SelectProps) => {
    const globalReset = useRecoilValue($globalReset)
    const [selected, setSelcted] = useState<SelectedTypes>({
        isOpen: false,
        value:
            selectType === 'default' && options.findIndex((e) => e.value === defaultValue) !== -1
                ? options[options.findIndex((e) => e.value === defaultValue)].option
                : placeholderText,
        isFirstTouch: false,
    })

    //   options.length > 0
    //   ? options[0].option
    //   : placeholderText,
    const selectRef = useOutsideClick(() => setSelcted((prev) => ({ ...prev, isOpen: false })))

    const openHandeler = () => {
        setSelcted((prev) => ({
            ...prev,
            isOpen: !selected.isOpen,
        }))
    }

    const selectedHandler = (v: FigkOptionModel) => {
        getOption && getOption(v.value)
        setSelcted({
            isOpen: false,
            value: v.option,
            isFirstTouch: true,
        })
    }

    useEffect(() => {
        if (globalReset) {
            setSelcted({ isOpen: false, value: options[0].option })
        }
    }, [globalReset])
    return (
        <S.Container
            ref={selectRef}
            className='select'>
            <S.Selected
                className={`${selected.isOpen ? 'focus' : ''} ${selectType === 'form' && !selected.isFirstTouch ? 'placeholder' : ''}`}
                onClick={openHandeler}>
                {selected.value}
            </S.Selected>
            <AnimatePresence>
                {selected.isOpen && (
                    <S.Options
                        variants={variants.fadeInOut}
                        initial='initial'
                        animate='animate'
                        exit='exit'>
                        <ul>
                            {selectType === 'default' && (
                                <>
                                    {options.map((_, i) => {
                                        return (
                                            <li
                                                key={`${_.value}_${i}`}
                                                onClick={() => selectedHandler(_)}>
                                                {_.option}
                                            </li>
                                        )
                                    })}
                                </>
                            )}
                            {selectType === 'form' && (
                                <>
                                    {options
                                        .filter((f, i) => {
                                            return i !== 0
                                        })
                                        .map((_, index) => {
                                            return (
                                                <li
                                                    key={`${_.value}_${index}`}
                                                    onClick={() => selectedHandler(_)}>
                                                    {_.option}
                                                </li>
                                            )
                                        })}
                                </>
                            )}
                        </ul>
                    </S.Options>
                )}
            </AnimatePresence>
        </S.Container>
    )
}

export default Select
