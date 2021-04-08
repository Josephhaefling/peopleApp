import axios from 'axios';

const usersUrl = 'http://localhost:5001/users';
const eventsUrl = 'http://localhost:5001/events';
const descriptionUrl = 'http://localhost:5001/descriptions';
const descriptionId = '606e26dc0e99b7224ccb8fa0'

export const createNewUser = (newUser) => axios.post(usersUrl, newUser)

export const getAllUsers = () => axios.get(usersUrl)
    .then(res => res.data)
    .catch(err => console.warn)

export const getAllEvents = () => axios.get(eventsUrl)

export const createEvent = (newEvent) => axios.post(eventsUrl, newEvent)

export const editEvent = (id, editedEvent) => axios.put(`${eventsUrl}/${id}`, editedEvent)

export const fetchDescription = (id) => axios.get(`${descriptionUrl}/${descriptionId}`)

export const editDescription = (descriptionUrl, newDescription) => axios.put(descriptionUrl, newDescription)