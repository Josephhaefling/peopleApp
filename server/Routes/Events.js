import express from 'express';
import {getEvents} from '../Controllers/Events.js';

const router = express.Router()
router.get('/events', getUsers)

export default router 