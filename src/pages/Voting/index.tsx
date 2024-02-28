import API from 'api'
import ActionButton from 'components/common/ActionButton'
import { Arccordion } from 'components/common/Arccordion/index.styled'
import Flex from 'components/common/Flex'
import Hashtag from 'components/common/Hashtag'
import PageTitle from 'components/common/PageTitle'
import Section from 'components/common/Section'
import MainLayout from 'components/template/MainLayout'
import { TextFigk } from 'components/template/TextFigk/index.styled'
import { Vol } from 'components/template/VotingReminder/index.styled'
import VotingSticky from 'components/template/VotingSticky'
import useGap from 'hook/useGap'
import { useModal } from 'hook/useModal'
import useTMutation from 'hook/useTMutation'
import useGetQuery from 'hook/useTQuery'
import useWidth from 'hook/useWidth'
import { GenericResponse } from 'model/common'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 회차 } from 'shared/convert'
import { returnVoteOption } from 'shared/queryOption/vote'
import { 에디터특수기호변경 } from 'shared/validation'
import theme from 'theme'
import { Page } from './index.styled'

const Voting = () => {
    const { gap, calcGap } = useGap()
    const { media } = useWidth()
    const navigate = useNavigate()
    const { Notice, closeNotice } = useModal()

    const [votedFigk, setVotedFigk] = useState<number[]>([])
    const [trigger, setTrigger] = useState<number>(0)

    const doVoteSuccessCallback = (data: GenericResponse) => {
        if (data.code === 200) {
            Notice({
                icon: 'checked',
                type: 'alert',
                title: '투표가 완료되었습니다.',
                content: '투표 결과는 심사 후 FIGK송고 페이지에서\n확인하실 수 있습니다.',
                onClickConfirm: () => {
                    closeNotice()
                    navigate('/home')
                },
            })
        }
    }

    const { data: vote } = useGetQuery(['@getVote'], () => API.Vote.getVoteList(), returnVoteOption)
    const { mutate: tryVote, error: tryVoteError } = useTMutation(
        ['@createTextFigk', 'C'],
        (data: number[]) => API.Vote.doVote(data),
        (data: GenericResponse) => doVoteSuccessCallback(data),
        {
            onError: (res: any) => {
                if (res.response.data.code === 409) {
                    Notice({
                        icon: 'checked',
                        type: 'alert',
                        title: '투표',
                        content: '이미 투표에 참여하셨어요.',
                        onClickConfirm: () => {
                            closeNotice()
                        },
                    })
                }
            },
        }
    )

    const onClickVoteHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.stopPropagation()
        setVotedFigk((prev) => [...prev, id])
        if (votedFigk?.includes(id)) {
            setVotedFigk(votedFigk.filter((filter) => filter !== id))
        }
    }

    const validVoteBtn = (id: number): boolean => {
        return votedFigk.length === vote?.summary.maxVote && !votedFigk.includes(id)
    }

    const onVote = () => {
        if (votedFigk.length !== vote?.summary.maxVote) return

        Notice({
            icon: 'bang',
            type: 'confirm',
            title: '투표하시겠습니까?',
            content: '투표 후에는 수정이 불가능합니다.\n투표 결과는 심사 후 지난 FIGK 페이지에서\n 확인하실 수 있습니다.',
            confirmText: '투표 완료',
            onClickConfirm: () => {
                closeNotice()
                tryVote(votedFigk)
            },
        })
    }

    useEffect(() => {
        if (vote?.isVoted === 'Y') {
            Notice({
                icon: 'bang',
                type: 'alert',
                title: '이미 투표를 완료했습니다.',
                content: '투표 후에는 수정이 불가능합니다.\n투표 결과는 심사 후 지난 FIGK 페이지에서\n 확인하실 수 있습니다.',
                onClickConfirm: () => {
                    closeNotice()
                    navigate(-1)
                },
            })
        }
    }, [vote])
    return (
        <MainLayout>
            <Section>
                <Flex
                    direction='column'
                    gap={media.mobile ? '16px' : '24px'}
                    alignitems='flex-start'
                    padding={media.mobile ? '0 0 40px' : '0 0 50px'}>
                    <Vol className='point1'>Vol.{회차(vote?.summary.week)}</Vol>
                    <PageTitle
                        title='FIGK 투표'
                        subject={
                            <>
                                <strong> 총 {vote?.summary.maxVote}개</strong>의 글을 선택해야 투표가 완료됩니다. {media.mobile && <br />}{' '}
                                (내가 쓴 글은 투표할 수 없습니다.)
                            </>
                        }
                    />
                </Flex>
            </Section>
            {vote && vote.list.length > 0 && (
                <VotingSticky votingCount={votedFigk.length}>
                    <ActionButton
                        mode={votedFigk.length === vote?.summary.maxVote ? 'solid' : 'disabled'}
                        size={media.mobile ? 'notice' : 'cta'}
                        onClick={onVote}>
                        투표 완료하기
                    </ActionButton>
                </VotingSticky>
            )}
            <Section>
                <Page.Container>
                    <Flex
                        direction='column'
                        gap={12}
                        padding_block_end={gap().listWithPagination}>
                        {vote &&
                            vote.isVoted === 'N' &&
                            vote.list.map((item, index) => {
                                const { id, title, subTitle, authorName, content, tag, link } = item
                                return (
                                    <Arccordion.Container
                                        key={id}
                                        style={{
                                            borderColor: `${
                                                votedFigk?.includes(id)
                                                    ? `${media.mobile ? theme.lineColor.line1 : ' rgba(255,130,77,0.5)'}`
                                                    : theme.lineColor.line1
                                            }`,
                                        }}>
                                        <Arccordion.Contents>
                                            <Arccordion.Head head_title={에디터특수기호변경(title)}>
                                                {!media.mobile && (
                                                    <Page.VoteButton
                                                        className={votedFigk?.includes(id) ? 'active' : ''}
                                                        onClick={(e) => onClickVoteHandler(e, id)}
                                                        disabled={validVoteBtn(id)}>
                                                        <Page.Checked />
                                                        투표
                                                    </Page.VoteButton>
                                                )}
                                            </Arccordion.Head>
                                            <Arccordion.Body>
                                                <TextFigk.Container style={{ padding: 0, border: 0 }}>
                                                    <h2
                                                        className='pointer underline'
                                                        style={{ marginBottom: '12px' }}
                                                        onClick={() => window.open(link)}>
                                                        {에디터특수기호변경(subTitle)}
                                                    </h2>
                                                    <p>{에디터특수기호변경(content)}</p>
                                                    <TextFigk.HashtagBox>
                                                        <Hashtag tags={tag} />
                                                    </TextFigk.HashtagBox>
                                                    <TextFigk.Footer>
                                                        <span>{에디터특수기호변경(authorName)}</span>
                                                    </TextFigk.Footer>
                                                </TextFigk.Container>
                                            </Arccordion.Body>
                                            {media.mobile && (
                                                <Flex padding={trigger === index + 1 ? '30px 0 0' : '20px 0 0 '}>
                                                    <Page.VoteButton
                                                        className={votedFigk?.includes(id) ? 'active' : ''}
                                                        onClick={(e) => onClickVoteHandler(e, id)}
                                                        disabled={validVoteBtn(id)}>
                                                        <Page.Checked />
                                                        투표하기
                                                    </Page.VoteButton>
                                                </Flex>
                                            )}
                                        </Arccordion.Contents>
                                    </Arccordion.Container>
                                )
                            })}
                    </Flex>
                </Page.Container>
            </Section>
        </MainLayout>
    )
}

export default Voting
