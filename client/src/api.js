import axios from 'axios';

const usersUrl = 'http://localhost:5001/users';
const eventsUrl = 'http://localhost:5001/events';


export const createNewUser = (newUser) => axios.post(usersUrl, newUser)

export const getAllUsers = () => axios.get(usersUrl)
    .then(res => res.data)
    .catch(err => console.warn)

export const getAllEvents = () => axios.get(eventsUrl)