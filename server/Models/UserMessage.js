import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
        userName: String,
        firstName: String,
        lastName: String,
        email: String,
        isAdmin: Boolean,
        events: [Object],
        password: String,
        image: String
})

const userMessage = mongoose.model('userSchema', userSchema)

export default userMessage