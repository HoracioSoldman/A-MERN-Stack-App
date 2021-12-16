import React from 'react'
import { LoadingWrapper } from './loading.style'
import {FiLoader} from 'react-icons/fi'

export default function Loading({size}) {
    return (
        <LoadingWrapper>
            <FiLoader className="icon" size={size ? size : 30}/>
        </LoadingWrapper>
    )
}
