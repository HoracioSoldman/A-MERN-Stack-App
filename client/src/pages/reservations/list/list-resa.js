import React, { useEffect, useState } from 'react'
import ConfirmDialog from '../../../components/dialog/confirm'
import Loading from '../../../components/loading/loading'
import { useAxios } from '../../../hooks/useAxios'
import ResaItem from '../item/resa-item'
import { ListWrapper } from './list-resa.style'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateToEdit } from '../../../redux/actions/toedit-actions'

export function ListResa() {
    const listRequestParams= {
        method: 'get',
        url: '/reservation'
    }
    const deleteRequestParams= {
        method: 'delete',
        url: '/reservation/delete'
    }
    const emptyDialogData= {title: '', text: '', resaItem: null }
    const {
        response: listResponse, error: listError, loading:listLoading, 
        setParameters: setListParameters 
    } = useAxios(listRequestParams)
    
    const {
        response: deleteResponse, error: deleteError, loading:deleteLoading, 
        setParameters: setDeleteParameters 
    } = useAxios(null)

    const [list, setlist] = useState([])
    const [showDialog, setshowDialog] = useState(false)
    const [dialogData, setdialogData] = useState(emptyDialogData)
    const [errorMessage, seterrorMessage] = useState('')
    let navigate= useNavigate()
    const dispatch = useDispatch()

    //After requesting the reservation list
    useEffect(() => {
        
        if(listResponse && !listError && !listLoading){
            const {data, status}= listResponse
            if(status === 'success'){
                setlist([...data])
            }
        }
        if(listError){
            seterrorMessage(listError.message || 'An error occured while fetching the list')
        }
    }, [listResponse, listLoading, listError])


    //After deleting a reservation
    useEffect(() => {
        if(deleteResponse && !deleteError && !deleteLoading){
            const {data, status}= deleteResponse
            if(status === 'success'){
                setlist([...data])
            }
        }
        if(deleteError){
            seterrorMessage(deleteError.message || 'An error occured while deleting a reservation')
        }
    }, [deleteResponse, deleteLoading, deleteError])


    //Delete a reservation
    const onDialogConfirm= data=>{
        deleteRequestParams['data']= {_id: data._id}
        seterrorMessage('')
        setDeleteParameters(deleteRequestParams)
        onDialogCancel()
    }


    const onDialogCancel= ()=>{
        setshowDialog(false)
        setdialogData({...emptyDialogData})
    }

    const askDeleteConfirmation= item=>{
        const newDialogData= {
            title: 'Delete reservation',
            text: `You are about to delete the reservation '${item.name}'. If you proceed with this action the item will be permanently deleted.`,
            confirmText: 'Delete',
            cancelText: 'Cancel',
            item: {...item}
        }
        setdialogData(newDialogData)
        setshowDialog(true)
    }

    const askEdit= item=> {
        dispatch(updateToEdit(item))
        navigate('/update')
    }


    return (
        <ListWrapper>
            <div className="container">
                
                {
                    (listLoading || deleteLoading) ? 
                    <Loading /> :
                    errorMessage ? 
                    <p>{errorMessage}</p> :
                    list.length ?
                    list.map((resa=>(
                            <ResaItem key={resa._id} reservation={resa} onDelete={askDeleteConfirmation} onEdit={askEdit}/>
                        ))) :
                    <p>There are no reservations</p>
                }
                
                
            </div>
            {
                showDialog && <ConfirmDialog {...dialogData} onCancel={onDialogCancel} onConfirm={onDialogConfirm}/>
            }
            
        </ListWrapper>
    )
}
