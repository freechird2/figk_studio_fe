import { Outlet } from 'react-router-dom'
import { DatePickerStyle } from 'theme/datepicker'
import { CommonStyle } from './theme/commonStyle'
import { GlobalFont } from './theme/globalFont'
import { GlobalStyle } from './theme/globalStyle'
export const Root = () => {
    return (
        <>
            <Outlet />
        </>
    )
}
const App = () => {
    return (
        <>
            <GlobalFont />
            <GlobalStyle />
            <CommonStyle />
            <DatePickerStyle />
        </>
    )
}

export default App
