import express from 'express';

import {createDescription, getDescription, updateDescription} from '../Controllers/Description.js';

const router = express.Router()

router.get('/:id', getDescription)
router.post('/', createDescription)
router.put('/:id', updateDescription)

export default router 