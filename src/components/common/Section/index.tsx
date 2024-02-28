import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'
type SectionFormType = 'default' | 'full'
const StyledSection = styled.section<{ form: SectionFormType }>`
    width: ${(p) => `min(${p.theme.layout.containerWidth},calc(100% - calc(${p.theme.layout.defaultPadding} * 2)))`};
    margin: 0 auto;
    ${mediaQuery('mobile')} {
        width: ${(p) => `min(${p.theme.layout.containerWidth},calc(100% - calc(${p.theme.layout.mobilePadding} * 2)))`};
    }
`
interface SectionProps extends ComponentPropsWithoutRef<'section'> {
    form?: SectionFormType
}
const Section = ({ form = 'default', ...rest }: SectionProps) => {
    return (
        <StyledSection
            form={form}
            {...rest}></StyledSection>
    )
}

export default Section
