import userMessage from '../Models/UserMessage.js';

export const getUsers = async (req, res) => {
    try {
        const userMessage = await userMessage.find()
        res.status(200).json(userMessage)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    try {
        const userMessage = await userMessage.find()
        res.status(200).json(userMessage)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}