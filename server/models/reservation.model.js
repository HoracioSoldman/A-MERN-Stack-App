import mongoose from 'mongoose'
const {Schema, model} = mongoose

const reservationSchema= new Schema({
    name: {type: String, required: true, trim: true},
    store: {type: String, required: true},
    status: {type: String, required: true},
    created_at: {type: Date, default: new Date()},
    updated_at: {type: Date, default: new Date()}
}, {collection: 'reservations'})

export default model("Reservation", reservationSchema)
