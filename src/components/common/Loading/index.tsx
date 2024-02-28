import { useRecoilValue } from 'recoil'
import { loadingState } from 'recoil/loading/loading'
import styled from 'styled-components'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    .dim {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        filter: blur(10px);
        background-color: rgba(255, 255, 255, 0.94);
        z-index: 1;
    }
    span {
        position: relative;
        z-index: 2;
        color: ${(p) => p.theme.textColor.textColor70};
        font-size: 1.3rem;
    }
`

const Spinner = styled.div`
    position: relative;
    z-index: 2;
    width: 25px;
    height: 25px;
    --c: radial-gradient(farthest-side, #0f0f0f 92%, #0000);
    background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%, var(--c) 0 50%;
    background-size: 6px 6px;
    background-repeat: no-repeat;
    animation: s7 1s infinite;

    @keyframes s7 {
        to {
            transform: rotate(0.5turn);
        }
    }
`
const Loading = () => {
    const loading = useRecoilValue(loadingState)

    return (
        <>
            {loading && (
                <StyledContainer className='loader'>
                    <Spinner />
                    <div className='dim'></div>
                    <span>메일 전송중입니다.</span>
                </StyledContainer>
            )}
        </>
    )
}

export default Loading
