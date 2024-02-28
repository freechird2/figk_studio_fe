import { FilterContainer, FilterReset, FilterResetWrapper } from 'components/template/Filter/index.styled'
import { ComponentPropsWithRef, PropsWithChildren } from 'react'
import { useRecoilState } from 'recoil'
import { $globalReset } from 'recoil/filter/globalReset'

interface ContainerProps extends ComponentPropsWithRef<'div'>, PropsWithChildren {
    filterSearch?: React.ReactNode
}
const Filter = ({ filterSearch, children, ...rest }: ContainerProps) => {
    const [globalReset, setGlobalReset] = useRecoilState($globalReset)

    const onReset = () => {
        if (globalReset) return

        setGlobalReset(true)

        setTimeout(() => {
            setGlobalReset(false)
        }, 500)
    }

    return (
        <FilterContainer
            {...rest}
            className={''}>
            <div className='FilterBox'>{children}</div>
            {filterSearch}
            <FilterResetWrapper
                onClick={onReset}
                className='reset'>
                <FilterReset>초기화</FilterReset>
            </FilterResetWrapper>
        </FilterContainer>
    )
}
export default Filter
