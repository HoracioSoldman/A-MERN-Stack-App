import mongoose from 'mongoose'

mongoose.connect(`${process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/bijenkorf' }`, {
    useNewUrlParser: true
  })
.then(()=>{
    console.log('Connected to the Database')
})
.catch(error=>{
    console.error('Failed to connect to the Database', error)
})