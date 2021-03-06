
import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { PortalWrapper } from './confirm.style'

import {AiFillWarning} from 'react-icons/ai'
const ConfirmDialog = ({title, text, confirmText, cancelText, ...rest}) => {

    //to close dialog on escape-key pressed
    const onKeydwn = ev=>{
        if(ev.keyCode && ev.keyCode === 27) 
            rest.onCancel()
    }
    useEffect(()=>{
        window.addEventListener('keydown', onKeydwn)
        return ()=>{
            window.removeEventListener('keydown', onKeydwn);
        }
    }, [])


    const onDialogConfirm= ev=>{
        rest.onConfirm(rest.item)
    }

    const onDialogCancel= ev=>{
        rest.onCancel()
    }

    const portalElement = document.getElementById('portal')
    const component = (
        <PortalWrapper>
            <div className="confirm-dialog">
                <h3> 
                    <AiFillWarning color={'#cd0808'} size={22}/> 
                    <span className="dialog-title">
                        {title}
                    </span>
                </h3>
                <p>{text}</p>
                <div className="confirm-dialog__footer">
                    <div className="delete-btn btn" onClick={onDialogConfirm}>
                        {confirmText}
                    </div>
                    <div className="cancel-btn  btn" onClick={onDialogCancel}>
                        {cancelText}
                    </div>
                </div>
            </div>
        </PortalWrapper>
    )

    return createPortal(component, portalElement)
}
export default ConfirmDialog