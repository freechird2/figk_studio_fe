import { TagModel } from 'model/common'
import { StyledHashtag } from './index.styled'

interface HashtagProps {
    tags?: TagModel[]
}

const Hashtag = ({ tags }: HashtagProps) => {
    // 태그 갯수 제한 : 5개
    const SIZE = 5
    const TAG = tags ? tags.slice(0, SIZE) : []
    return (
        <StyledHashtag>
            {TAG.map((hashtag) => {
                return <li key={`${hashtag}_${hashtag.id}`}>{hashtag.name}</li>
            })}
        </StyledHashtag>
    )
}

export default Hashtag
