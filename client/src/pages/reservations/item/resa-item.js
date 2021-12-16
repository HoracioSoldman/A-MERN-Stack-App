import React from 'react'
import { ItemWrapper } from './resa-item.style'

export default function ResaItem({reservation, onDelete, onEdit}) {
    const {name, store, status, _id}= reservation

    const askDelete= ev=>{
        onDelete(reservation)
    }

        
    return (
        <ItemWrapper status={status}>
            <h3>{name}</h3>
            <div className="right-side">
                <span className="status-label">{status}</span>
                <div className="btns">
                    <button className="edit-btn btn">Edit</button>
                    <button className="delete-btn btn" onClick={askDelete}>Delete</button>
                </div>
            </div>
        </ItemWrapper>
    )
}
