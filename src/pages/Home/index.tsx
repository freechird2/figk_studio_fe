import { useAuth } from 'AuthProvider'
import API from 'api'
import ActionButton from 'components/common/ActionButton'
import Flex from 'components/common/Flex'
import MyFigkItem from 'components/common/MyFigkItem'
import PageTitle from 'components/common/PageTitle'
import Section from 'components/common/Section'
import LastNotice from 'components/template/LastNotice'
import MainLayout from 'components/template/MainLayout'
import MyFigkList from 'components/template/MyFigkList'
import { S } from 'components/template/MyFigkList/index.styled'
import MyInfo from 'components/template/MyInfo'
import VotingReminder from 'components/template/VotingReminder'
import { useDebounce } from 'hook/useDebounce'
import useGap from 'hook/useGap'
import useGetQuery from 'hook/useTQuery'
import useWidth from 'hook/useWidth'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { $homeTextFigkFilterOption } from 'recoil/filter/homeTextFigkFilterOption'
import { ROUTER_PATH } from 'router'
import { SKELETON_DELAY } from 'shared/common'
import { returnHomeOption } from 'shared/queryOption/home'
import { returnTextFigkList } from 'shared/queryOption/textFigk'

const Home = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const { gap } = useGap()
    const { media } = useWidth()

    // const [homeFilterResquest, setHomeFilterResquest] = useState<HomeTextFigkFilterOption>(commonSearchRequestInitData)
    const homeFilterResquest = useRecoilValue($homeTextFigkFilterOption)
    const [skeletonState, setSkeletonState] = useState<boolean>(true)

    const { data: home } = useGetQuery(['@getAuthorHome'], () => API.Author.authorInfo(), returnHomeOption)

    const {
        data: textFigk,
        refetch: getAuthorTextFigk,
        isFetching,
    } = useGetQuery(
        [`@getAuthorTextFigk`, JSON.stringify(homeFilterResquest)],
        () => API.TextFigk.getTextFigk(homeFilterResquest),
        returnTextFigkList
    )

    // const getFilterOption = (op: HomeTextFigkFilterOption) => {
    //     console.log('???????', op)
    //     setHomeFilterResquest(op)
    // }

    const skeletonDelay = useCallback(
        useDebounce(() => setSkeletonState(false), SKELETON_DELAY),
        []
    )

    useEffect(() => {
        // console.log(homeFilterResquest)
        setSkeletonState(true)

        skeletonDelay()
    }, [homeFilterResquest])

    return (
        <MainLayout>
            <Section>
                <MyInfo data={home} />
                <LastNotice data={home?.notice} />
                <Flex padding_block_end={gap().votingReminder}>
                    {user?.processStatus === 'V' && <VotingReminder />}
                    {user?.processStatus === 'A' && user?.currentGroup === user?.groupName && <VotingReminder />}
                </Flex>
                <Flex padding_block_end={gap().pageTitle}>
                    <PageTitle
                        title='MY FIGK'
                        subject='FIGK에서 작성한 내 글을 볼 수 있습니다.'
                        sideButton={
                            <ActionButton
                                size={media.mobile ? 'notice' : 'cta'}
                                mode='line'
                                onClick={() => navigate(ROUTER_PATH.WRITING, { state: { type: 'N' } })}>
                                새 글 작성하기
                            </ActionButton>
                        }
                    />
                </Flex>

                <MyFigkList
                    data={textFigk}
                    skeletonState={skeletonState}
                    isFetching={isFetching}>
                    <Flex
                        direction='column'
                        padding_block_end={gap().listWithPagination}>
                        <S.ListBox style={{ minHeight: '40vh' }}>
                            {textFigk?.list &&
                                textFigk.list.map((item) => {
                                    return (
                                        <MyFigkItem
                                            key={`#${item.id}`}
                                            textFigk={item}
                                        />
                                    )
                                })}
                        </S.ListBox>
                    </Flex>
                </MyFigkList>
            </Section>
        </MainLayout>
    )
}

export default Home
