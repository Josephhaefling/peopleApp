import userMessage from '../Models/UserMessage.js';
import mongoose from 'mongoose';
import passport from 'passport';

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