import { ReactComponent as Arrow } from 'assets/icon/Pagenation_arrow.svg'
import { ReactComponent as DoubleArrow } from 'assets/icon/Pagenation_double_arrow.svg'
import { useEffect, useState } from 'react'
import { S } from './index.styled'

type Props = {
    totalItem: number // Item 의 총 갯수
    currentPage: number // 현재 페이지 default 1
    setCurrentPage: Function // 클릭 페이지 set
    limit: number // limit
}
// #B9BCC1 그레이
const Pagination = ({ totalItem, currentPage, setCurrentPage, limit }: Props) => {
    const next = limit ?? 5
    const total = totalItem ? totalItem : 1
    const totalPage = totalItem % limit !== 0 ? Math.floor(totalItem / next) + 1 : Math.floor(totalItem / next)

    const pagePre = 5

    const [page, setPage] = useState(currentPage ? currentPage : 1)
    const [pageList, setPageList] = useState<Array<number>>([])

    const onClickPage = (e: number) => {
        setPage(e)
        setCurrentPage(e)
        window.scrollTo(0, 0)
    }

    const onClickPrevPage = () => {
        // let current = page % pagePre !== 0 ? Math.floor(page / pagePre) + 1 : Math.floor(page / pagePre)
        // const prevPage = current > 1 ? (current - 1) * pagePre : 1

        if (page - 1 > 0) onClickPage(page - 1)
    }

    const onClickNextPage = () => {
        // let current = page % pagePre !== 0 ? Math.floor(page / pagePre) + 1 : Math.floor(page / pagePre)
        // const nextPage = current * pagePre + 1 < totalPage ? current * pagePre + 1 : totalPage

        if (page + 1 <= totalPage) onClickPage(page + 1)
    }

    useEffect(() => {
        let current = page % pagePre !== 0 ? Math.floor(page / pagePre) + 1 : Math.floor(page / pagePre)
        current = current > 0 ? current : 1

        const pl = []
        for (let i = 0; i < pagePre; i++) {
            const p = i + 1 + (current - 1) * pagePre

            if (p <= totalPage) pl.push(p)
        }
        setPageList(pl)
    }, [page, total])

    return (
        <S.Container>
            <button
                className='front'
                type='button'
                disabled={page === 1}
                onClick={() => onClickPage(1)}>
                <DoubleArrow stroke='#B9BCC1' />
            </button>
            <button
                className='front'
                type='button'
                disabled={page === 1}
                onClick={onClickPrevPage}>
                <Arrow stroke='#B9BCC1' />
            </button>
            <S.NumberBox>
                {pageList.length > 0 ? (
                    pageList.map((i) => {
                        return (
                            <button
                                type='button'
                                className={currentPage === i ? 'current' : ''}
                                key={`page_${i}`}
                                onClick={() => {
                                    onClickPage(i)
                                }}>
                                {i}
                            </button>
                        )
                    })
                ) : (
                    <button type='button'>1</button>
                )}
            </S.NumberBox>
            <button
                className='back'
                type='button'
                disabled={page === totalPage}
                onClick={onClickNextPage}>
                <Arrow stroke='#B9BCC1' />
            </button>
            <button
                className='back'
                type='button'
                disabled={page === totalPage}
                onClick={() => onClickPage(totalPage)}>
                <DoubleArrow stroke='#B9BCC1' />
            </button>
        </S.Container>
    )
}

export default Pagination
