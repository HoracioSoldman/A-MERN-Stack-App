import express from 'express'
import bodyParser from 'body-parser'
import resaRouter from './routes/reservation.routes.js'
import './database/connection.js'

const app= express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(`/api/${process.env.API_VERSION}/reservation/`, resaRouter)

export default app