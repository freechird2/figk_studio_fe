import { AuthProvider } from 'AuthProvider'
import GlobalModal from 'components/common/GlobalModal'
import GlobalNotice from 'components/common/GlobalNotice'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from 'styled-components'
import App from './App'
import { router } from './router'
import theme from './theme'
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RecoilRoot>
                <AuthProvider>
                    <ThemeProvider theme={theme}>
                        <App />
                        <GlobalModal />
                        <GlobalNotice />
                        <RouterProvider router={router} />
                    </ThemeProvider>
                </AuthProvider>
            </RecoilRoot>
        </QueryClientProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
