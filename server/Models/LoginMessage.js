import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({
        userName: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: false },
        email: { type: String, required: false },
        isAdmin: { type: Boolean, required: true },
        events: [Object],
        password: { type: String, required: true },
        image: { type: String, required: false }
})

const loginMessage = mongoose.model('loginSchema', loginSchema)

export default loginMessage