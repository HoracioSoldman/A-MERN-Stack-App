import express from 'express'
import 'dotenv/config'

const app= express()
const port= process.env.PORT

app.use('/', (req, res)=>{
    res.send({message: 'Hi there!'})
})

app.listen(port, ()=>{
    console.log('The server is alive on', port)
})
