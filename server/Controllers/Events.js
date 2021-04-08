import eventMessage from '../Models/EventsMessage.js';
import mongoose from 'mongoose';
import eventsMessage from '../Models/EventsMessage.js';

export const getEvents = async (req, res) => {
    try {
        const eventMessages = await eventMessage.find()
        res.status(200).json(eventMessages)
    } catch(error) {
        res.status(404).json({ message: error.message })
    } 
}

export const createEvent = async (req, res) => {
    const { title, description, attending, date, time } = req.body;
    const newEventMessage = new eventMessage({ title, description, attending, date, time })
    try {
        await newEventMessage.save();
        res.status(201).json(newEventMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params
    const { description, time, attending} = res.body
    const event = await eventMessage.findById(id)
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`)
    const updatedEvent = { _id: id, time, description, attending}
    await eventsMessage.findByIdAndUpdate(id, { description: description, time: time, attending: attending})
    res.json(updatedEvent)
}
 