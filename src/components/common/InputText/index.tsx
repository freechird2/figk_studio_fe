import { Control, FieldPath, FieldValues, RegisterOptions, UseFormRegisterReturn, useController } from 'react-hook-form'
import { S } from './index.styled'

export interface TControl<T extends FieldValues> {
    register?: UseFormRegisterReturn
    control: Control<T>
    name: FieldPath<T>
    type?: string
    rules?: Omit<RegisterOptions<T>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>
    placeholder?: string
    errorMessage: string
    children?: React.ReactNode
}

const InputText = ({ control, name, rules, placeholder, errorMessage, children, type = 'text' }: TControl<any>) => {
    const {
        field: { value, onChange, onBlur, ref },
    } = useController({ name, rules, control })

    const onClickDelete = () => {
        onChange('')
    }
    // const [isFocus, setIsFocus] = useState<boolean>(false);
    return (
        <S.Container>
            <S.Wrapper className={errorMessage ? 'error' : ''}>
                <S.InputText
                    ref={ref}
                    type={type}
                    value={value}
                    onChange={onChange}
                    onBlur={() => {
                        onBlur()
                        // setIsFocus(false);
                    }}
                    onFocus={() => {}}
                    placeholder={placeholder}
                    spellCheck={false}
                />
                {value.length > 0 && (
                    <S.Delete
                        className='delete'
                        role='button'
                        onClick={onClickDelete}
                    />
                )}
                {children}
            </S.Wrapper>
            {errorMessage && <S.HelperMsg>{errorMessage}</S.HelperMsg>}
        </S.Container>
    )
}

export default InputText
