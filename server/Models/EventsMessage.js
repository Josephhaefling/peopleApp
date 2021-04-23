import mongoose from 'mongoose';

const eventsSchema = mongoose.Schema({   
        title: String, 
        description: String, 
        attending:[Object],
        date: String,
        time: Object
})

const eventsMessage = mongoose.model('eventsSchema', eventsSchema)

export default eventsMessage