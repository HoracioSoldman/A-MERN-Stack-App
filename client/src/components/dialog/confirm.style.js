import styled from 'styled-components'

export const PortalWrapper= styled.div`

    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1000000;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  
    .confirm-dialog {
        background-color: #fff;
        padding: 1rem;
        border-radius: 6px;
        max-width: 450px;

        span.dialog-title {
          margin-left: 0.5rem;
        }
    }
  
  .portal-overlay .confirm-dialog {
    z-index: 1000000000000111;
    padding: 16px;
    background-color: white;
    width: 400px;
    position: absolute;
    top: 200px;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  
  .portal-overlay .confirm-dialog__footer {
    display: flex;
    justify-content: flex-end;
    margin-top:20px;
  }
    .confirm-dialog__footer {
        display: flex;
        justify-content: flex-end;
        margin-top: 1rem;

        .btn {
            padding: 0.5rem 0.8rem;
        }
    }

    @media(max-width: 768px){
      .confirm-dialog{
        max-width: 70%;
      }
    }

  
`
