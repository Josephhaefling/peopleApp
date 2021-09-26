import express from 'express';

import {
    createDescription, 
    getDescription, 
    updateDescription, 
    deleteDescription, 
    getDescriptions
} from '../Controllers/Description.js';

import auth from'../middleware/auth.js';


const router = express.Router()

router.get('/', getDescriptions)
router.get('/:id', getDescription)
router.post('/', createDescription)
router.put('/:id', updateDescription)
router.delete('/:id', deleteDescription)

export default router 