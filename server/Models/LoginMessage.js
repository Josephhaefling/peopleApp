import mongoose from 'mongoose';

const loginSchema = mongoose.Schema({ _id: String,userName: String, password: String, firstName: String, lastName: String, email:String, events: [], image: String } )

const loginMessage = mongoose.model('loginSchema', loginSchema)

export default loginMessage