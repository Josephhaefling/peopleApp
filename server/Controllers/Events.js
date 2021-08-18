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

    if(!req.userName) return res.json({ message: 'Unauthenticated'})
    try {
        if(req.userName) {
            await newEventMessage.save();
            res.status(201).json(newEventMessage );
        } else {
            res.status(409),json(`Something went wrong.`)
        }
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEvent = async (req, res) => {
    const { id } = req.params
    const { title, description, time, date, attending} = req.body
    await eventMessage.findById(id)
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`)
    const updatedEvent = { _id: id, title, time, description, attending}
    await eventsMessage.findByIdAndUpdate(id, { title, description, time, attending})
    res.json(updatedEvent)
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No event with id: ${id}`);
    await eventMessage.findByIdAndRemove(id);
    res.json({ message: "Event deleted successfully." });
}
 