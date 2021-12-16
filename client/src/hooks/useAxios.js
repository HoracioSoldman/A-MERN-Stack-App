import { useEffect, useState } from 'react'
import axios from 'axios'

axios.defaults.baseURL= `${process.env.REACT_APP_API_BASE_URL}/${process.env.REACT_APP_API_VERSION}`

export const useAxios= params=> {
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [parameters, setParameters] = useState(params)

    const fetchData = async reqParams => {
        setLoading(true)
        try {
            const result = await axios.request(reqParams)
            setResponse(result.data)
        } catch( error ) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }
  
    useEffect(() => {
        
        if(parameters){
            fetchData(parameters)
        }

    }, [parameters])

    return { response, error, loading,  setParameters}
}
