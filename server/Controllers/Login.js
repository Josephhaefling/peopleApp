import logInMessage from '../Models/LoginMessage.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import userMessage from '../Models/UserMessage.js';

export const signin = async (req, res) => {
    const { email, password } = req.body
    console.log('I am in the sign in')

    try { 
        const existingUser = await userMessage.findOne({ email })
        if(!existingUser) return res.status(404).json({ message: `User doesn't exist`})
        isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credintials' })
        const token = jwt.sign({ userName: existingUser.userName}, 'test', { expiresIn: '1h' })
        console.log('existing user: ', existingUser)
        res.status(200).json({ result: existingUser, token })
    } catch (err){
        res.status(500).json({ message: 'Something went wrong.' })
    }
}

export const signup = async (req, res) => {
    console.log('sign up ran')
    const { email, password, confirmPassword, userName, firstName, lastName, isAdmin, image } = req.body

    try {
        const existingUser = await User.findOne({ userName })
        if(!existingUser) return res.status(404).json({ message: `User already exists`})
        if(password !== confirmPassword) return res.status(400).json({ message: `Passwords don't match`})
        const hashedPassword = await bcrypt.hash(password, 12)

        const result = await User.create({ email, password: hashedPassword, userName, firstName, lastName, isAdmin, image})

        const token = jwt.sign({ email: result.email }, 'test', { expiresIn: '1h' })
        res.status(200).json({ result: existingUser, token })
    } catch (err) {
        res.status(500).json({ message: 'Something went wrong.' })
    }
}