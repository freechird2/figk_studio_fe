import * as icons from 'components/common/GlobalModal/icon'
import { ReactElement } from 'react'
export type IconType = keyof typeof icons
export const iconTypes: IconType[] = Object.keys(icons) as IconType[]
export interface IconProps {
    icon: IconType
}
function CloseIcon({ icon }: IconProps): ReactElement {
    const SVGIcon = icons[icon]
    return <SVGIcon />
}

export default CloseIcon
