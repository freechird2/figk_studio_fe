import EditorHtmlParser from 'components/common/EditorHtmlParser'
import { TermModel } from 'model/join'

export const TermsHandler = (data: TermModel) => {
    return <EditorHtmlParser dangerouslySetInnerHTML={data.content} />
}
