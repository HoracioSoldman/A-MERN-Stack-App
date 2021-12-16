import * as dotenv from 'dotenv'
dotenv.config()
import app from './app.js'

const port= process.env.PORT || 3005

app.listen(port, ()=>{
    console.log('The server is alive on', port)
})
