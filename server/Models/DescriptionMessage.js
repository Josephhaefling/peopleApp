import mongoose from 'mongoose';

const descriptionSchema = mongoose.Schema({content: String})

const descriptionMessage = mongoose.model('descriptionSchema', descriptionSchema)

export default descriptionMessage