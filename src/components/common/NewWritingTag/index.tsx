import API from 'api'
import { ReactComponent as Close } from 'assets/icon/close.svg'
import { useDebounce } from 'hook/useDebounce'
import { useModal } from 'hook/useModal'
import { useOutsideClick } from 'hook/useOutsideClick'
import { GenericResponse } from 'model/common'
import { useEffect, useRef, useState } from 'react'
import { S } from './index.styled'

interface NewWritingTagProps {
    value: string[]
    // getTags: (e: string[]) => void
    insertTag: (e: string) => void
    deleteTag: (e: string) => void
}
const NewWritingTag = ({ value, insertTag, deleteTag }: NewWritingTagProps) => {
    const { Modal, Notice, closeNotice } = useModal()
    const [inputValue, setInputValue] = useState<string>('')
    const [tagList, setTagList] = useState<string[]>([])
    const [index, setIndex] = useState<number>(-1)
    const [autoSearchOpen, setAutoSearchOpen] = useState<boolean>(false)
    const autoRef = useRef<HTMLUListElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)
    const datalistRef = useOutsideClick(() => setAutoSearchOpen(false))
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        if (tagList.length > 0 && tagList.includes(e.target.value)) setTagList([])
        else if (e.target.value.replace(/(\s*)/g, '')) debouncedFunction(e.target.value)
    }

    const getTagsList = async (value: string) => {
        if (value.length >= 2)
            await API.Tag.getTagsList(value).then((res: GenericResponse) => {
                setTagList(res.data)
            })
        else setTagList([])
    }

    const debouncedFunction = useDebounce(getTagsList, 400)

    //엔터 입력시 태그 추가
    const onEnterHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (autoSearchOpen && !e.nativeEvent.isComposing) {
            switch (e.key) {
                case 'ArrowDown':
                    setIndex(index + 1)
                    if (autoRef.current?.childElementCount === index + 1) setIndex(0)
                    e.preventDefault()
                    break
                case 'ArrowUp':
                    setIndex(index - 1)
                    if (index - 1 < 0) setIndex(tagList.length - 1)
                    e.preventDefault()
                    break
                case 'Escape':
                    setAutoSearchOpen(false)
                    setTagList([])
                    setIndex(-1)
                    e.preventDefault()
                    break
                case 'Enter':
                    if (autoRef.current?.childNodes[index]) {
                        const child = autoRef.current?.children[index] as HTMLLIElement
                        child.click()
                    }
                    e.preventDefault()
                    break
                case ' ':
                    if (autoRef.current?.childNodes[index]) {
                        const child = autoRef.current?.children[index] as HTMLLIElement
                        child.click()
                    }
                    e.preventDefault()
                    break
            }
        } else {
            if (inputValue.replace(/(\s*)/g, '') && (e.key === 'Enter' || e.key === ' ') && !e.nativeEvent.isComposing) {
                setTagList([])
                insertTag(inputValue)
                setInputValue('')
            }
        }

        if (e.key === ' ') e.preventDefault()
    }

    //태그 삭제 함수 핸드러
    const TagDeleteHandler = (value: string) => {
        deleteTag(value)
    }

    useEffect(() => {
        if (inputValue && tagList.length > 0) setAutoSearchOpen(true)
        else setAutoSearchOpen(false)

        setIndex(-1)
    }, [tagList])

    return (
        <S.Container>
            <S.AppendInput
                placeholder='태그를 입력해주세요.'
                value={inputValue}
                onChange={onChange}
                onKeyDown={onEnterHandler}
                ref={inputRef}
            />
            {autoSearchOpen && (
                <S.AutoSearchContainer ref={datalistRef}>
                    <S.AutoSearchWrap ref={autoRef}>
                        {tagList.map((item, idx) => (
                            <S.AutoSearchData
                                isFocus={index === idx ? true : false}
                                key={item}
                                onClick={() => {
                                    setInputValue(String(item))
                                    setAutoSearchOpen(false)
                                    inputRef.current?.focus()
                                }}>
                                #{item}
                            </S.AutoSearchData>
                        ))}
                    </S.AutoSearchWrap>
                </S.AutoSearchContainer>
            )}
            <S.DescText>* Enter를 누르면 태그가 추가됩니다. (50자 이내, 최대 5개 입력가능)</S.DescText>
            {value.length > 0 && (
                <S.TagBox>
                    {value.map((tag, index) => {
                        return (
                            <S.Tag key={index}>
                                <span spellCheck={false}>#{tag}</span>
                                <Close onClick={() => TagDeleteHandler(tag)} />
                            </S.Tag>
                        )
                    })}
                </S.TagBox>
            )}
        </S.Container>
    )
}

export default NewWritingTag
