import { useState } from 'react'
import { S } from './index.styled'

interface ListCountAndSortProps {
    totalCount: number
    sortHandler?: () => void
}
const ListCountAndSort = ({ totalCount, sortHandler }: ListCountAndSortProps) => {
    const [isLatest, setIsLatest] = useState<boolean>(true)
    const onClickSortHandler = () => {
        setIsLatest(!isLatest)
        // sortHandler();
    }
    return (
        <S.Container>
            <S.TotalCount>총 {totalCount}건</S.TotalCount>
            {/* <S.Sort
        type="button"
        className={isLatest ? "latest" : ""}
        onClick={onClickSortHandler}
      >
        최신순
      </S.Sort> */}
        </S.Container>
    )
}

export default ListCountAndSort
