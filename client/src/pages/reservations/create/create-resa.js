import React, { useEffect, useState } from 'react'
import { STATUS_IN_PROGRESS, STATUS_READY, STATUS_TODO } from '../../../constants/status'
import { AVAILABE_STORES } from '../../../constants/stores'
import { CreateWrapper } from './create-resa.style'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../../hooks/useAxios'

export default function CreateResa({}) {
    let navigate= useNavigate()
    const emptyFormValues= {name: '', store: '', status: ''}
    const createRequestParams= {
        method: 'post',
        url: '/reservation/create'
    }

    const [input, setinput] = useState(emptyFormValues)
    const stores= [...AVAILABE_STORES]
    const [errorMessage, setErrorMessage] = useState('')
    const {
        response: createResponse, error: createError, loading:createLoading, 
        setParameters: setCreateParameters 
    } = useAxios(null)

    const onInputChange= ev=>{
        setinput({...input, [ev.target.name]: ev.target.value})
    }

    useEffect(() => {
        if(errorMessage)
            setErrorMessage('')
    }, [input])

    useEffect(() => {
        
        if(createResponse && !createError && !createLoading){
            const {status}= createResponse
            if(status === 'success'){
                navigate('/')
            }
        }
        if(createError){
            setErrorMessage(createError.message || 'An error occured while fetching the list')
        }
    }, [createResponse, createLoading, createError])


    const validateInput= ()=>{
        Object.entries(input).forEach((entry)=>{
            if(!entry[1].trim()){
                return {result: false, field: entry[0]}
            }
        })
        return {result: true, field: ''}
    }

    const resetForm= ev=>{
        setinput({...emptyFormValues})
    }

    const submitForm= ev=>{
        ev.preventDefault()
        const isValid= validateInput()
        if(!isValid.result){
            setErrorMessage(`The field "${isValid.field}" is invalid.`)
            return
        }

        createRequestParams['data']= {...input}
        setCreateParameters(createRequestParams)

    }

    return (
        <CreateWrapper>
            <div className="container">
                <form name="resa-form" onSubmit={submitForm}>
                    <div className="form-input">
                        <label htmlFor="name">Reservation name</label>
                        <input type="text" id="name" name="name" className="simple-input" value={input.name} onChange={onInputChange} required/>
                    </div>
                    <div className="form-input">
                        <label htmlFor="store">Store</label>
                        <select id="store" name="store" onChange={onInputChange} required>
                            <option></option>
                            {
                                stores.map((store, index)=>(
                                    <option key={index}>{store}</option>
                                ))
                            }
                            
                        </select>
                        
                    </div>
                    <div className="form-input">
                        <label htmlFor="status">Status</label>
                        <div  name="status" className="form-status" required>
                            <label className="label-status">
                                <input type="radio" value={STATUS_TODO} name="status" checked={input.status === STATUS_TODO} onChange={onInputChange}/> {STATUS_TODO}
                            </label>
                            <label className="label-status">
                                <input type="radio" value={STATUS_IN_PROGRESS} name="status" checked={input.status === STATUS_IN_PROGRESS} onChange={onInputChange}/> {STATUS_IN_PROGRESS}
                            </label>
                            <label className="label-status">
                                <input type="radio" value={STATUS_READY} name="status" checked={input.status === STATUS_READY} onChange={onInputChange}/> {STATUS_READY}
                            </label>
                        </div>
                    </div>
                    {
                        errorMessage && <p>{errorMessage}</p>
                    }
                    
                    <div className="form-btns">
                        <button className="btn reset-btn" type="reset" onClick={resetForm}>Cancel</button>
                        <button className="btn submit-btn" type="submit">Save</button>
                    </div>
                </form>
            </div>
        </CreateWrapper>
    )
}
