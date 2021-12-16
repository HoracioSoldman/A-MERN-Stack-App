import {Router} from 'express'
import {create, read, update, deleteResa} from '../controllers/reservation.controllers.js'

const router= new Router()

router.get('/', read)

router.post('/create', create)

router.put('/update', update)

router.delete('/delete', deleteResa)

export default router