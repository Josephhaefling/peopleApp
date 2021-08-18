import express from 'express';

import { signup, signin, createUser, getUsers, deleteUser, updateUser} from '../Controllers/Users.js';

import auth from'../middleware/auth.js';

const router = express.Router()
router.post('/', signin)
router.post('/signup', signup)
router.post('/createUser', createUser)
router.get('/', getUsers)
router.delete('/:id', deleteUser)
router.put('/:id', updateUser)

export default router 