import { Arccordion } from 'components/common/Arccordion/index.styled'
import EditorHtmlParser from 'components/common/EditorHtmlParser'
import Flex from 'components/common/Flex'
import { NoticeList } from 'model/Notice'
import { calNewNotice, convertDateYYYYMMDD } from 'shared/function'

interface NoticeArccordionProps {
    data?: NoticeList
}
const NoticeArccordion = ({ data }: NoticeArccordionProps) => {
    return (
        <div>
            <Flex
                direction='column'
                gap={12}>
                {data &&
                    data?.list.map((item, index) => {
                        const { id, title, registeredAt, content } = item
                        return (
                            <Arccordion.Container key={id}>
                                <Arccordion.Contents>
                                    <Arccordion.Head
                                        head_title={title}
                                        is_new_title={calNewNotice(registeredAt)}
                                    />
                                    <Arccordion.Body>
                                        <div
                                            className='arccordion_date'
                                            style={{ paddingBottom: '8px' }}>
                                            {convertDateYYYYMMDD(registeredAt)}
                                        </div>
                                        <EditorHtmlParser dangerouslySetInnerHTML={content} />
                                    </Arccordion.Body>
                                </Arccordion.Contents>
                            </Arccordion.Container>
                        )
                    })}
            </Flex>
        </div>
    )
}

export default NoticeArccordion
