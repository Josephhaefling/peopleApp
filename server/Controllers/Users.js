import userMessage from '../Models/UserMessage.js';

export const getUsers = async (req, res) => {
    try {
        const userMessages = await userMessage.find()
        res.status(200).json(userMessages)
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createUser = async (req, res) => {
    const { id, userName, firstName, lastName, email, image, admin, events, password } = req.body;
    const newUserMessage = new userMessage({ id, userName, firstName, lastName, email, image, admin, events, password })

    try {
        await newUserMessage.save();
        res.status(201).json(newUserMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}