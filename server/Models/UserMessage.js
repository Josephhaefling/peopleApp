import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
        id: String,
        userName: String,
        firstName: String,
        lastName: String,
        email: String,
        image: String,
        admin: Boolean,
        events: [],
        password: String
})

const userMessage = mongoose.model('userSchema', userSchema)

export default userMessage