import * as DOMPurify from 'dompurify'
import styled from 'styled-components'

const StyledEditorHtmlParser = styled.div`
    line-height: 1.7 !important;
    font-size: 1.3rem;
    color: ${(p) => p.theme.textColor.textColor70};
    /* font-weight: 400; */
    strong {
        font-weight: bold !important;
    }
    * {
        font-weight: inherit;
        word-break: break-all;
    }
`

interface IeditorHtmlParser {
    dangerouslySetInnerHTML: string
}

//html parser
const EditorHtmlParser = ({ dangerouslySetInnerHTML }: IeditorHtmlParser) => {
    return (
        <StyledEditorHtmlParser
            className='editorArea'
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(dangerouslySetInnerHTML) }}
        />
    )
}

export default EditorHtmlParser
