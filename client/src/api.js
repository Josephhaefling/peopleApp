import axios from 'axios';

const usersUrl = 'http://localhost:5001/users';
const loginUrl = 'http://localhost:5001/login';
const eventsUrl = 'https://coloradofreeple.herokuapp.com/events';
const descriptionUrl = 'https://coloradofreeple.herokuapp.com/descriptions';
const descriptionId = '606e26dc0e99b7224ccb8fa0'

export const createNewUser = (newUser) => axios.post(usersUrl, newUser)

export const getAllUsers = () => axios.get(usersUrl)

export const editUser = (id, newUser) => axios.put(`${usersUrl}/${id}`, newUser)

export const getAllEvents = () => axios.get(eventsUrl)

export const createEvent = (newEvent) => axios.post(eventsUrl, newEvent)

export const editEvent = (id, editedEvent) => axios.put(`${eventsUrl}/${id}`, editedEvent)

export const deleteEvent = (id) => axios.delete(`${eventsUrl}/${id}`)

export const fetchDescription = () => axios.get(`${descriptionUrl}/${descriptionId}`)

export const editDescription = (descriptionUrl, newDescription) => axios.put(descriptionUrl, newDescription)

export const signIn = (formData) => axios.post(usersUrl, formData)

export const signUp = (formData) => axios.post(`${loginUrl}/signup`, formData)


