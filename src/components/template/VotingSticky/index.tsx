import Section from 'components/common/Section'
import { ComponentPropsWithoutRef } from 'react'
import styled from 'styled-components'
import { mediaQuery } from 'theme/mediaQuery'

const Sticky = styled.div`
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    height: ${(p) => p.theme.layout.headerHeight};
    background-color: ${(p) => p.theme.bgColor.bg1};
    z-index: 10;
    .contents {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .buttonBox {
            width: 130px;
        }
    }
    ${mediaQuery('mobile')} {
        height: 66px;
        top: ${(p) => p.theme.layout.mobileHeaderHeight};
    }
`

const StickyLine = styled.div`
    --changePositionForm: 13px;
    position: sticky;
    top: ${(p) => `calc(${p.theme.layout.headerHeight} - var(--changePositionForm))`};
    padding-top: var(--changePositionForm);
    border-bottom: 1px solid ${(p) => p.theme.lineColor.line2};
    ${mediaQuery('mobile')} {
        top: ${(p) => `calc(66px + ${p.theme.layout.mobileHeaderHeight} - var(--changePositionForm))`};
    }
`

const VotingCount = styled.dl`
    display: flex;
    align-items: center;
    gap: 12px;
    dt {
        font-size: 1.3rem;
        font-weight: 600;
        color: ${(p) => p.theme.textColor.textColor40};
    }
    dd {
        display: flex;
        align-items: center;
        font-weight: 400;
        font-size: 1.4rem;
        strong {
            font-size: 1.8rem;
            font-weight: 600;
            color: ${(p) => p.theme.palette.point1};
        }
    }
`

interface VotingStickyProps extends ComponentPropsWithoutRef<'div'> {
    votingCount: number
}
const VotingSticky = ({ votingCount, children, ...rest }: VotingStickyProps) => {
    return (
        <>
            <Sticky {...rest}>
                <Section>
                    <div className='contents'>
                        <VotingCount>
                            <dt>투표 수 :</dt>
                            <dd>
                                <strong>{votingCount}</strong> / 7개
                            </dd>
                        </VotingCount>
                        <div className='buttonBox'>{children}</div>
                    </div>
                </Section>
            </Sticky>
            <StickyLine />
        </>
    )
}

export default VotingSticky
