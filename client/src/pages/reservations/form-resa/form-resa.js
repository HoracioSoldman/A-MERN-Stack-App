import React, { useEffect, useState } from 'react'
import { STATUS_IN_PROGRESS, STATUS_READY, STATUS_TODO } from '../../../constants/status'
import { AVAILABE_STORES } from '../../../constants/stores'
import { CreateWrapper } from '../form-resa/form-resa.style'
import { useNavigate } from 'react-router-dom'
import { useAxios } from '../../../hooks/useAxios'
import Loading from '../../../components/loading/loading'

export default function FormResa({reservation}) {
    let navigate= useNavigate()
    const initialFormValues= reservation ? {...reservation} : {name: '', store: '', status: ''}
    const submitRequestParams= reservation ? {
        method: 'put',
        url: '/reservation/update'
    } : {
        method: 'post',
        url: '/reservation/create'
    }

    const [input, setinput] = useState(initialFormValues)
    const stores= [...AVAILABE_STORES]
    const [errorMessage, setErrorMessage] = useState('')
    const {
        response: submitResponse, error: submitError, loading:submitLoading, 
        setParameters: setSubmitParameters 
    } = useAxios(null)

    const onInputChange= ev=>{
        setinput({...input, [ev.target.name]: ev.target.value})
    }

    useEffect(() => {
        if(errorMessage)
            setErrorMessage('')
    }, [input])

    useEffect(() => {
        
        if(submitResponse && !submitError && !submitLoading){
            const {status}= submitResponse
            if(status === 'success'){
                navigate('/')
            }
        }
        if(submitError){
            setErrorMessage(submitError.message || 'An error occured while submitting the form.')
        }
    }, [submitResponse, submitLoading, submitError])


    const validateInput= ()=>{
        const validation= {result: true, field: ''}
        Object.entries(input).forEach((entry)=>{
            
            if(typeof entry[1] === 'string' && !entry[1].trim()){
                validation.result= false
                validation.field= entry[0]
            }
        })

        return validation
    }

    const resetForm= ev=>{
        setinput(reservation ? {...reservation} : {...initialFormValues})
    }

    const submitForm= ev=>{
        ev.preventDefault()
        const isValid= validateInput()
        
        if(!isValid.result){
            setErrorMessage(`The field "${isValid.field}" is invalid.`)
            return
        }

        submitRequestParams['data']= {...input}
        setSubmitParameters(submitRequestParams)

    }

    return (
        <CreateWrapper>
            <div className="container">
                {
                    submitLoading ? 
                    <Loading /> :

                    <form name="resa-form" onSubmit={submitForm}>
                        <div className="form-input">
                            <label htmlFor="name">Reservation name</label>
                            <input type="text" id="name" name="name" className="simple-input" value={input.name} onChange={onInputChange} required/>
                        </div>
                        <div className="form-input">
                            <label htmlFor="store">Store</label>
                            <select id="store" name="store" onChange={onInputChange} defaultValue={input.store} required>
                                <option></option>
                                {
                                    stores.map((store, index)=>(
                                        <option key={index} >{store}</option>
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
                            errorMessage && <p className="error-message">{errorMessage}</p>
                        }
                        
                        <div className="form-btns">
                            <button className="btn reset-btn" type="reset" onClick={resetForm}>Cancel</button>
                            <button className="btn submit-btn" type="submit">{reservation ? 'Update' : 'Save'}</button>
                        </div>
                    </form>
                }
            </div>
        </CreateWrapper>
    )
}
