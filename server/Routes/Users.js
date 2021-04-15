import express from 'express';

import { createUser, getUsers, deleteUser, updateUser } from '../Controllers/Users.js';

const router = express.Router()

router.get('/', getUsers)
router.post('/', createUser)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router 