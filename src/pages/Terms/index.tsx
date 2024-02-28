import API from 'api'
import EditorHtmlParser from 'components/common/EditorHtmlParser'
import Section from 'components/common/Section'
import Select from 'components/common/Select'
import MainLayout from 'components/template/MainLayout'
import useGetQuery from 'hook/useTQuery'
import { TermFilterOption } from 'model/term'
import { S } from 'pages/Terms/index.styled'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { returnTermOption, returnTermVersionOption } from 'shared/queryOption/term'

/**
 * 개인정보처리방침 : privacy-policy
 * 저작권정책: copyright-policy
 * 이용약관: terms-of-Use
 * 마케팅수신동의: marketing-opt-in
 */

const TermsPage = () => {
    const [searchParams] = useSearchParams()
    const query = searchParams.get('type')
    const [termParam, setTermParam] = useState<TermFilterOption>({
        id: undefined,
        termType: query === '이용약관' ? 1 : query === '개인정보처리방침' ? 2 : query === '저작권정책' ? 3 : 4,
    })

    const { data: version } = useGetQuery(
        ['@getTermVersion', JSON.stringify(termParam.termType)],
        () => API.Term.getTermVersion(termParam),
        returnTermVersionOption
    )

    const { data: term } = useGetQuery(['@getTerm', JSON.stringify(termParam)], () => API.Term.getTerm(termParam), returnTermOption)

    const onChange = (e: string) => {
        setTermParam({ ...termParam, id: e })
    }

    useEffect(() => {
        setTermParam({
            id: undefined,
            termType: query === '이용약관' ? 1 : query === '개인정보처리방침' ? 2 : query === '저작권정책' ? 3 : 4,
        })
    }, [query])

    return (
        <MainLayout>
            <Section>
                <S.Title>
                    <h1>{query}</h1>
                    {/* "Ver.1  2023. 02. 02", "Ver.2  2023. 02. 02" */}
                    {version && (
                        <Select
                            options={version}
                            getOption={(e) => onChange(e)}
                        />
                    )}
                </S.Title>
                <EditorHtmlParser dangerouslySetInnerHTML={term ? term.content : ''} />
            </Section>
        </MainLayout>
    )
}

export default TermsPage
