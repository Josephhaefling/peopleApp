import DescriptionMessage from '../Models/DescriptionMessage.js';
import mongoose from 'mongoose';

export const getDescriptions = async (req, res) => {
    try {
        const descriptions = await DescriptionMessage.find()
        res.status(200).json(descriptions)
    } catch (err) {
        res.status(404).json({message: error.message})
    }
}

export const getDescription = async (req, res) => { 
    const { id } = req.params;
    try {
        const description = await DescriptionMessage.findById(id);
        res.status(200).json(description);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createDescription = async (req, res) => {
    const { id, content } = req.body
    const newDescriptionMessage = new DescriptionMessage({ id, content })
    try {
        await newDescriptionMessage.save();
        res.status(201).json(newDescriptionMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateDescription = async (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const description = await DescriptionMessage.findById(id);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedDescription = {  _id: id, content: content };
    await DescriptionMessage.findByIdAndUpdate(id, { content: content});
    res.json(updatedDescription);
}

export const deleteDescription = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No description with id: ${id}`);
    await DescriptionMessage.findByIdAndRemove(id)
    res.json({ message: "Description deleted successfully." });
}
