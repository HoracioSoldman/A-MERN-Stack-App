import styled from 'styled-components'

export const HeaderWrapper = styled.header`
    padding: 1em 0;
    background-color: #555;
    text-align: center;
    color: #fff;
    width: 100%;
    top: 0;
    
    .container {
        display: flex;
        justify-content: space-between;
    }

    h1 {
        font-weight: 400;
        margin-bottom: 0;
        margin-top: 5px;
    }

    .page-title {
        color: #fff;
        text-decoration: none;
    }

    ul.menu {
        list-style: none;
        .menu-item{
            color: #fff;
            text-decoration: none;
            border-bottom: 1px solid;
            :hover {
                font-weight: bold;
            }
        }
    }

    @media (max-width: 425px) {
        h1 {
            font-size: 1.8rem;
            text-align:left;
        }
    }

`