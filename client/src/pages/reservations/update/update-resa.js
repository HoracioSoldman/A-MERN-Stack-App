import React from 'react'
import { useSelector } from 'react-redux'
import FormResa from '../form-resa/form-resa'

export default function UpdateResa() {
    const {reservation} = useSelector(state => state.itemToEdit)
    

    return (
        <>
            <FormResa reservation={reservation} />
        </>
    )
}
