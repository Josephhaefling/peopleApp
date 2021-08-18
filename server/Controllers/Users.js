import userMessage from '../Models/UserMessage.js';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const getUsers = async (req, res) => {
    try {
        const userMessages = await userMessage.find()
        res.status(200).json(userMessages)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    const { id, userName, firstName, lastName, email, image, isAdmin, events, password } = req.body;
    const newUserMessage = new userMessage({ id, userName, firstName, lastName, email, image, isAdmin, events, password })

    try {
        await newUserMessage.save();
        res.status(201).json(newUserMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { userName, firstName, lastName, email, isAdmin, events, password, image } = req.body;
    const user = await userMessage.findById(id);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedUser = {  _id: id, userName, firstName, lastName, email, isAdmin, events, password, image };
    await userMessage.findByIdAndUpdate(id, { userName, firstName, lastName, email, isAdmin, events, password, image,});
    res.json(updatedUser);
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);
    await userMessage.findByIdAndRemove(id);
    res.json({ message: "User deleted successfully." });
}

export const signin = async (req, res) => {
    const { email, password } = req.body
    try { 
        const existingUser = await userMessage.findOne({ email })
        if(!existingUser) return res.status(404).json({ message: `User doesn't exist`})
        // const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        const isPasswordCorrect = password === existingUser.password
        if(!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credintials' })
        const token = jwt.sign({ userName: existingUser.userName}, 'test', { expiresIn: '1h' })
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

    export const authenticateUser = async (req, res) => {
        const { userName, password } = req.body
        console.log('hi')
        // const { userName, password } = req.body
        const newUserMessage = new userMessage({ 
            userName: userName, firstName: '', lastName: '', email: '', events: [], image: ''  })
        await newUserMessage.findOne({userName: userName}, (err, user) => {
            if(err) {
                console.log('yo')
                return done(err)
            } else if (!user) {
                return done(null, false)
            } else if(user.password !== password) {
                return done(false)
            } else {
                return done(err, user)
            }
        })
        try {
            // await newLogInMessage.save();
            res.status(201).json(newUserMessage);
        } catch (error) {
            res.status(409).json({ message: error.message });
       }
    }