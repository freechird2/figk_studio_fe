import { NoticeResponse } from 'model/common'
import { useNavigate } from 'react-router-dom'
import { ROUTER_PATH } from 'router'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

const StyledLastNotice = styled.div`
    display: flex;
    align-items: center;
    gap: 1.1rem;
    padding-bottom: 34px;
    cursor: pointer;
    em {
        font-style: italic;
        font-weight: 600;
        font-size: 1.4rem;
        color: ${(p) => p.theme.palette.black20};
    }
    .ellipsis {
        font-size: 1.2rem;
        color: ${(p) => p.theme.textColor.textColor80};
    }
    ${mediaQuery('maxTablet')} {
        padding-bottom: 40px;
    }
`

interface Props {
    data?: NoticeResponse
}

const LastNotice = ({ data }: Props) => {
    const navigate = useNavigate()
    return (
        <StyledLastNotice onClick={() => navigate(ROUTER_PATH.NOTICE_BOARD)}>
            <em className='font_work'>notice</em>
            <span className='ellipsis'>{data?.title}</span>
        </StyledLastNotice>
    )
}
export default LastNotice
