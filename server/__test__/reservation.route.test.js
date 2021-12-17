import app from '../app.js'
import supertest from 'supertest'
import { STATUS_IN_PROGRESS, STATUS_READY, STATUS_TODO } from '../models/constants.js'

describe('Testing the controller', ()=>{
    it('lists available reservations from the DB', async ()=>{
        const {statusCode, body}= await supertest(app).get('/api/v1/reservation').send()
        expect(statusCode).toEqual(200)
        expect(body.status).toEqual('success')
        expect(body.data).toBeDefined()
    })
    
    it('creates a new reservation', async ()=>{
        const resa= {
            name: 'Resa_0',
            store: 'AMS',
            status: STATUS_READY
        }
        const {body, statusCode}= await supertest(app).post('/api/v1/reservation/create').send(resa)
        expect(statusCode).toEqual(200)
        expect(body.status).toEqual('success')
        expect(body.data).toBeDefined()
        expect(body.data.name).toBeDefined()
        expect(body.data.name).toEqual(resa.name)
    })
    
    it('creates, update and delete a reservation', async ()=>{
        const resa= {
            name: 'Resa_Test_0',
            store: 'AMS',
            status: STATUS_TODO
        }
        const resa1= {
            name: 'Resa_Test_1',
            store: 'AMS',
            status: STATUS_IN_PROGRESS
        }
        //create
        const {statusCode, body}= await supertest(app).post('/api/v1/reservation/create').send(resa)
        expect(statusCode).toEqual(200)
        expect(body.status).toEqual('success')
        expect(body.data._id).toBeDefined() 
        
        resa1._id= body.data._id

        //update
        const response= await supertest(app).put('/api/v1/reservation/update').send(resa1)
        expect(response.statusCode).toEqual(200)
        expect(response.body.status).toEqual('success')
        expect(response.body.data.name).toBeDefined()
        expect(response.body.data.name).toEqual(resa1.name)
        

        //delete
        const resp= await supertest(app).delete('/api/v1/reservation/delete').send(resa1)
        expect(resp.statusCode).toEqual(200)
        expect(resp.body.status).toEqual('success')
        expect(resp.body.data).toBeDefined()


        //delete not-found a reservation
        const res= await supertest(app).delete('/api/v1/reservation/delete').send({_id: 'anything', name: 'anything'})
        expect(res.statusCode).toEqual(500)
        
    })


})