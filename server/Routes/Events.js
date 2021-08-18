import express from 'express';

import {getEvents, createEvent, updateEvent, deleteEvent} from '../Controllers/Events.js';

import auth from'../middleware/auth.js';

const router = express.Router()

router.get('/', getEvents)
router.post('/', auth, createEvent)
router.put('/:id', auth, updateEvent )
router.delete('/:id', auth, deleteEvent)

export default router 