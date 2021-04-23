import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import userRoutes from './Routes/Users.js';
import eventRoutes from './Routes/Events.js';
import descriptionRoutes from './Routes/Description.js';
import dotenv from 'dotenv';

const app = express()
dotenv.config()

app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.use('/descriptions', descriptionRoutes)
app.use('/users', userRoutes)
app.use('/events', eventRoutes)

app.get('/', (req, res) => {
    res.send('hello to joe')
})

// const CONNECTION_URL = 'mongodb+srv://meanJosephBean:pe@chyPup79@cluster0.tnrqb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.Port || 5001

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.warn(error.message))

mongoose.set('useFindAndModify', false)