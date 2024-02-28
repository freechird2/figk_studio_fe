import API from 'api'
import { useAuth } from 'AuthProvider'
import FilterSearch from 'components/common/FilterSearch'
import Flex from 'components/common/Flex'
import ListCountAndSort from 'components/common/ListCountAndSort'
import NoDataBox from 'components/common/NoDataBox'
import PageTitle from 'components/common/PageTitle'
import Pagination from 'components/common/Pagination'
import Section from 'components/common/Section'
import Select from 'components/common/Select'
import SkeletonSendList from 'components/skeleton/SkeletonSendList'
import Filter from 'components/template/Filter'
import MainLayout from 'components/template/MainLayout'
import SendList from 'components/template/SendList'
import VotingReminder from 'components/template/VotingReminder'
import { useDebounce } from 'hook/useDebounce'
import useGap from 'hook/useGap'
import useGetQuery from 'hook/useTQuery'
import { useCallback, useEffect, useState } from 'react'
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil'
import { $globalReset } from 'recoil/filter/globalReset'
import { $voteFilterOption } from 'recoil/filter/voteFilterOption'
import { applySelectFilterData, createWeek, SENDING_PER, SKELETON_DELAY } from 'shared/common'
import { returnApplyVoteOption } from 'shared/queryOption/vote'

const Sending = () => {
    const { gap } = useGap()
    const { user } = useAuth()

    const [voteFilter, setVoteFilter] = useRecoilState($voteFilterOption)
    const resetFilter = useResetRecoilState($voteFilterOption)
    const globalReset = useRecoilValue($globalReset)

    const [word, setWord] = useState<string>(voteFilter.word)

    const [skeletonState, setSkeletonState] = useState<boolean>(true)
    const weekOptions = createWeek(user?.textFigkWeek)

    const {
        data: vote,
        isFetching,
        refetch: getAppliedVoteList,
    } = useGetQuery(['@getAppliedVote', JSON.stringify(voteFilter)], () => API.Vote.getApplyVoteList(voteFilter), returnApplyVoteOption)

    const setPage = (e: number) => {
        setVoteFilter((prev) => ({
            ...prev,
            page: e,
        }))
    }
    const getWeek = (e: string) => {
        setVoteFilter((prev) => ({
            ...prev,
            page: 1,
            week: e ? parseInt(e) : null,
        }))
    }
    const getStatus = (e: string) => {
        setVoteFilter((prev) => ({
            ...prev,
            page: 1,
            status: e,
        }))
    }
    const handleReset = () => {
        setWord('')
        resetFilter()
    }

    const setVoteWord = (e: string) => {
        setVoteFilter({ ...voteFilter, word: e })
    }
    const debouncedFunction = useDebounce(setVoteWord, 300)

    const skeletonDelay = useCallback(
        useDebounce(() => setSkeletonState(false), SKELETON_DELAY),
        []
    )

    useEffect(() => {
        setSkeletonState(true)

        skeletonDelay()
    }, [voteFilter])

    useEffect(() => {
        if (globalReset) {
            handleReset()
        }
    }, [globalReset])

    return (
        <MainLayout innerPadding='exceptional'>
            <Section>
                <Flex padding_block_end={gap().votingReminder}>
                    {user?.processStatus === 'V' && <VotingReminder />}
                    {user?.processStatus === 'A' && user?.currentGroup === user?.groupName && <VotingReminder />}
                </Flex>
                <Flex padding_block_end={gap().pageTitle}>
                    <PageTitle
                        title='지난 FIGK '
                        subject='회차별 발행 완료된 글 및 투표 결과를 확인할 수 있습니다.'
                    />
                </Flex>
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
                    {/* '회차 전체', 'Vol.001', 'Vol.002', 'Vol.003' */}
                    <Select
                        options={weekOptions}
                        getOption={getWeek}
                        defaultValue={voteFilter.week ? String(voteFilter.week) : '회차 전체'}
                        placeholderText='회차 전체'
                    />
                    {/* '상태 전체', '당선', '낙선' */}
                    <Select
                        options={applySelectFilterData}
                        getOption={getStatus}
                        defaultValue={voteFilter.status}
                    />
                </Filter>
                {skeletonState || isFetching ? (
                    <SkeletonSendList />
                ) : vote && vote.list.length > 0 ? (
                    <>
                        <ListCountAndSort totalCount={vote?.totalCount ?? 0} />
                        <Flex
                            direction='column'
                            gap={12}
                            padding_block_end={gap().listWithPagination}>
                            {vote.list.map((i) => {
                                return (
                                    <SendList
                                        key={`sendList_${i.id}`}
                                        data={i}
                                    />
                                )
                            })}
                        </Flex>
                        <Pagination
                            totalItem={vote?.totalCount ?? 0}
                            setCurrentPage={setPage}
                            currentPage={voteFilter.page}
                            limit={SENDING_PER}
                        />
                    </>
                ) : (
                    <NoDataBox>일치하는 결과가 없습니다.</NoDataBox>
                )}
            </Section>
        </MainLayout>
    )
}

export default Sending
