import styled from 'styled-components'
import { STATUS_IN_PROGRESS, STATUS_READY, STATUS_TODO } from '../../../constants/status';

export const ItemWrapper= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px dashed;
    margin-top: 1em;
    
    h3 {
        
    }

    .status-label {
        margin: 0 1rem;
        color: ${props=>{
            switch (props.status) {
                case STATUS_TODO:
                    return '#8b0000';
            
                case STATUS_IN_PROGRESS:
                    return '#cdad08';
            
                case STATUS_READY:
                    return '#20b518';
            
                default:
                    return '#8b0000';
            }
        }}
    }
    
    .right-side {
        display: flex;
        align-items: center;
    }

    .btns {
        display: grid;
    }

`