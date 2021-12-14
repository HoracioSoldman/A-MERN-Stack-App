import Reservation from '../models/reservation.model.js'

export const create= async (req, res)=>{
    const {name, store, status}= req.body
    if(!name || !store || !status){
        return res.sendStatus(400).json({
            status: 'failure',
            message: 'Invalid input'
        })
    }

    try {
        
        const resa= new Reservation({name, store, status})
        await resa.save()
        return res.send({
            status: 'success',
            message: 'New reservation saved',
            data: resa
        })
    } catch (error) {
        return res.sendStatus(500).message({
            status: 'failure',
            message: error.message ? error.message : 'Unable to save new reservation',
            data: error
        })
    }

}

export const read= async (req, res)=>{
    try {
        const list= await Reservation.find()
        return res.send({
            status: 'success',
            message: 'Reservations list',
            data: list
        })
        
    } catch (error) {
        return res.sendStatus(500).message({
            status: 'failure',
            message: error.message ? error.message : 'Unable to read reservation',
            data: error
        })
    }
}

export const update= async (req, res)=>{
    try {
        const {_id, name, store, status}= req.body
        const resa= await Reservation.findOneAndUpdate({_id}, {name, store, status, updated_at: new Date()}, {
            returnOriginal: false
        })

        return res.send({
            status: 'success',
            message: 'Reservation updated',
            data: resa
        })

    } catch (error) {
        return res.sendStatus(500).message({
            status: 'failure',
            message: error.message ? error.message : 'Unable to update reservation',
            data: error
        })
    }
}


export const deleteResa= async (req, res)=>{

    const {_id, name}= req.body
    try {
        
        await Reservation.deleteOne({_id})
        const list= await Reservation.find()
        return res.send({
            status: 'success',
            message: `Reservation: "${name}" deleted`,
            data: list
        })

    } catch (error) {
        return res.sendStatus(500).message({
            status: 'failure',
            message: error.message ? error.message : `Unable to delete reservation "${name}"`,
            data: error
        })   
    }
        
}
