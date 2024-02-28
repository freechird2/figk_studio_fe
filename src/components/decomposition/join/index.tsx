import Checkbox from 'components/common/Checkbox'
import { TermModel } from 'model/join'
import React from 'react'
import { returnTermTypeToLabel } from 'shared/convert/join'

interface Props {
    data: TermModel
    onChange: (e: React.ChangeEvent<HTMLInputElement>, i: string) => void
    checked: (p: string) => boolean
    showTerm: (c: string) => void
}

const TermCheckBoxHandler = ({ data, onChange, checked, showTerm }: Props) => {
    return (
        <div className='row-checkbox'>
            <Checkbox
                checkboxStyle='line'
                id={`term${data.id}`}
                label={returnTermTypeToLabel(data.type)}
                onChange={(e) => onChange(e, `term${data.type}`)}
                checked={checked(`term${data.type}`)}
            />
            <button
                type='button'
                onClick={() => showTerm(data.content)}>
                약관보기
            </button>
        </div>
    )
}

export default TermCheckBoxHandler
