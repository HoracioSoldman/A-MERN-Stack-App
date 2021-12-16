import styled from 'styled-components'

export const CreateWrapper= styled.div`

    .form-input, .form-btns {
        max-width: 400px;
    }
    .form-input {
        display: grid;
        margin: 1rem 0;
        
        select, input {
            height: 2rem;
        }
    }

    .form-status {
        display: grid;
        
        label.label-status {
            display: flex;
            align-items: center;
        }
    }

    .form-btns {
        display: flex;
        justify-content: space-between;
    
        .btn {
            padding: .6rem 3rem;
        }

        .reset-btn {
            background-color: #837e7e;
            border: none;
            :hover {
                background-color: #595454;
            }
        }
        
        .submit-btn {
            background-color: #198d39;
            border: none;
            :hover{
                background-color: #286539;
            }
        }
    }


`