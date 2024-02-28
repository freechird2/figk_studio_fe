import API from 'api'
import Section from 'components/common/Section'
import MainLayout from 'components/template/MainLayout'
import WritingForm from 'components/template/WritingForm'
import useGetQuery from 'hook/useTQuery'
import { getQuery } from 'shared/common'
import { returnTextFigkDetailOption } from 'shared/queryOption/textFigk'

const Writing = () => {
    const textId = getQuery()['i']
    const isEdit = getQuery()['e']

    const { data: textFigkDetail } = useGetQuery(['@getTextFigkPrevData'], () => API.TextFigk.getTextDetail(textId), returnTextFigkDetailOption(textId))

    return (
        <MainLayout>
            <Section>
                <WritingForm
                    data={textId ? textFigkDetail : undefined}
                    isEdit={isEdit === 'y'}
                />
            </Section>
        </MainLayout>
    )
}

export default Writing
