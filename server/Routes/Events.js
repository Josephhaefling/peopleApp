import express from 'express';

import {createEvent, getEvents, updateEvent} from '../Controllers/Events.js';

const router = express.Router()

router.get('/', getEvents)
router.post('/', createEvent)
router.put('/:id', updateEvent )

export default router 