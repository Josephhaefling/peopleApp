import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './Routes/Users.js';
import eventRoutes from './Routes/Events.js';
import descriptionRoutes from './Routes/Description.js';

const app = express()
dotenv.config()
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors())

app.use('/descriptions', descriptionRoutes)
app.use('/users', userRoutes)
app.use('/events', eventRoutes)

app.get('/', (req, res) => {
    res.send('Hello there Freeple admin')
})

const PORT = process.env.PORT || 5001
console.log('port: ', process.env.PORT)

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.warn(error.message))

mongoose.set('useFindAndModify', false)