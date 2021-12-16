import express from 'express'
import bodyParser from 'body-parser'
import resaRouter from './routes/reservation.routes.js'
import './database/connection.js'
import cors from 'cors'

const app= express()

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(`/api/${process.env.API_VERSION || 'v1'}/reservation/`, resaRouter)

export default app