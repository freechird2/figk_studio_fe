import FilterSearch from 'components/common/FilterSearch'
import ListCountAndSort from 'components/common/ListCountAndSort'
import NoDataBox from 'components/common/NoDataBox'
import Pagination from 'components/common/Pagination'
import PeriodDatepicker from 'components/common/PeriodDatepicker'
import Select from 'components/common/Select'
import SkeletonMyFigkItem from 'components/skeleton/SkeletonMyFigkItem'
import Filter from 'components/template/Filter'
import { useDebounce } from 'hook/useDebounce'
import { TextFigkListResponse } from 'model/textFigk'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { $globalReset } from 'recoil/filter/globalReset'
import { $homeTextFigkFilterOption } from 'recoil/filter/homeTextFigkFilterOption'
import { HOME_PER, commonSearchRequestInitData, homeSelectFilterData } from 'shared/common'
import { dateToMomentHypeon } from 'shared/validation'
import { S } from './index.styled'
interface Props {
    children: JSX.Element
    data?: TextFigkListResponse
    skeletonState: boolean
    isFetching: boolean
}

const MyFigkList = ({ children, data, skeletonState, isFetching }: Props) => {
    const [filter, setFilter] = useRecoilState($homeTextFigkFilterOption)
    const resetFilter = useResetRecoilState($homeTextFigkFilterOption)
    const globalReset = useRecoilValue($globalReset)

    const [word, setWord] = useState<string>(filter.word)

    const handleFilter = (s: Date | null, e: Date | null) => {
        setFilter((prev) => ({
            ...prev,
            page: 1,
            per: HOME_PER,
            startDate: dateToMomentHypeon(s),
            endDate: dateToMomentHypeon(e),
        }))
    }

    const getStatus = (e: string) => {
        setFilter((prev) => ({
            ...prev,
            page: 1,
            per: HOME_PER,
            status: e,
        }))
    }

    const setPage = (e: number) => {
        setFilter((prev) => ({
            ...prev,
            page: e,
        }))
    }

    const handleReset = () => {
        setWord('')
        resetFilter()
    }

    const onChangeWord = (e: string) => {
        setFilter((prev) => ({ ...prev, word: e, page: 1 }))
    }
    const debouncedFunction = useCallback(useDebounce(onChangeWord, 300), [])

    useEffect(() => {
        if (globalReset) {
            handleReset()
        }
    }, [globalReset])

    return (
        <S.Container>
            <Filter
                filterSearch={
                    <FilterSearch
                        value={word}
                        onChange={(e) => {
                            setWord(e.target.value)
                            debouncedFunction(e.target.value)
                        }}
                    />
                }>
                <Select
                    options={homeSelectFilterData}
                    getOption={getStatus}
                    defaultValue={filter.status}
                />
                <PeriodDatepicker
                    getDate={handleFilter}
                    defaultStartDate={filter.startDate}
                    defaultEndDate={filter.endDate}
                />
            </Filter>
            {skeletonState || isFetching ? (
                <SkeletonMyFigkItem />
            ) : data && data.totalCount > 0 ? (
                <>
                    {' '}
                    <ListCountAndSort
                        totalCount={data?.totalCount ?? 0}
                        sortHandler={() => {}}
                    />
                    {children}
                    <Pagination
                        totalItem={data?.totalCount ?? 0}
                        setCurrentPage={setPage}
                        currentPage={filter.page}
                        limit={HOME_PER}
                    />
                </>
            ) : (
                <NoDataBox>
                    {filter === commonSearchRequestInitData && data?.isFirst ? (
                        <>
                            아직 작성된 글이 없습니다.
                            <br />새 글을 작성해보세요 :)
                        </>
                    ) : (
                        '일치하는 결과가 없습니다.'
                    )}
                </NoDataBox>
            )}
        </S.Container>
    )
}

export default MyFigkList
