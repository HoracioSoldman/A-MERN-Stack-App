import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    padding: 1em 0;
    background-color: #555;
    text-align: center;
    color: #fff;
    width: 100%;
    top: 0;
    

    h1 {
        font-weight: 400;
        margin-bottom: 0;
        margin-top: 5px;
    }

    p {
        min-height: 20px;
        margin: 0;
    }
    @media (max-width: 425px) {
        h1 {
            font-size: 1.8rem;
            text-align:left;
        }
    }

`