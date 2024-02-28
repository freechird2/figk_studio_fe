import { PropsWithChildren, useEffect, useState } from 'react'

const DeferredComponent = ({ children }: PropsWithChildren) => {
    const [isDeferred, setIsDeferred] = useState<boolean>(false)

    const DEFERRED_MILLISEC = 1000

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsDeferred(true)
        }, DEFERRED_MILLISEC)

        return () => clearTimeout(timeoutId)
    }, [])

    if (!isDeferred) return null

    return <>{children}</>
}

export default DeferredComponent
