import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    users: [Object]
})

const userMessage = mongoose.model('userSchema', userSchema)

export default userMessage