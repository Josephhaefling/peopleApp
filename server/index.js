import express, { request } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import session from 'express-session';
import passport from 'passport';
// import ObjectId from 'mongodb';
import LocalStrategy from 'passport-local';

import userRoutes from './Routes/Users.js';
import eventRoutes from './Routes/Events.js';
import loginRoutes from './Routes/Login.js';
import descriptionRoutes from './Routes/Description.js';

const app = express()
dotenv.config()
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({limit: '30mb', extended: true}))
app.use(cors())
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/descriptions', descriptionRoutes)
app.use('/users', userRoutes)
app.use('/events', eventRoutes)
app.use('/login', loginRoutes)

const PORT = process.env.PORT || 5001
console.log('port: ', process.env.PORT)


mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {

    passport.serializeUser((user, done) => {
    done(error, user._id)
})
//I think that the problem is with the db.collection
//perhaps db is undefined?
    passport.deserializeUser((userId, done) => {
        mongoose.connection.db.collection('users').findOne(
            {_id: new ObjectId(userId)},
            (error, doc) => {
               done(error, doc)
            }
        )
    })  

    // Create verification strategy
    let findUserDocument = new LocalStrategy(
        (userName, password, done) => {
            mongoose.connection.db.collection('users').findOne(
                {userName: userName},
                (err, user) => {
                    if(err) {
                        console.log('yo')
                        return done(err)
                    } else if (!user) {
                        return done(null, false)
                    } else if(user.password !== password) {
                        return done(false)
                    } else {
                        return done(err, user)
                    }
               } 
            )
        }
    )


    //use verification strategy
passport.use(findUserDocument)

    // let db = 
    // app.get('/', (req, res) => {
    //     console.log('hi')
    //     res.send('Hello there Peeple admin')
    // })

    console.log(`Server running on port ${PORT}`)}
    ))
.catch((error) => console.warn(error.message))

mongoose.set('useFindAndModify', false)