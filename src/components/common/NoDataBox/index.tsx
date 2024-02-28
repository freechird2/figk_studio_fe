import noDataImg from 'assets/img/nodata.png'
import { ComponentPropsWithoutRef } from 'react'
import { NoDataBoxContainer } from './index.styled'

interface Props extends ComponentPropsWithoutRef<'div'> {
    children: React.ReactNode
}
const NoDataBox = ({ children }: Props) => {
    return (
        <NoDataBoxContainer>
            <img
                src={noDataImg}
                alt='노데이터 이미지'
            />
            {children}
        </NoDataBoxContainer>
    )
}

export default NoDataBox
