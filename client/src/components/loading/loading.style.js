import styled from 'styled-components'

export const LoadingWrapper = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes loading {
        0% {
            transform: rotate(0);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    .icon {
        color: #0056b3;
        animation: loading 1.5s linear infinite;
    }
`