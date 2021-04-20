import { editEvent, editUser } from '../../api';

export const updateEvent = (user, event) => {
        const { title, description, time, date, attending, _id } = event
        const userInfo = { id: user._id, name: user.firstName, email: user.email, image: user.image }
        editEvent(_id, {title, description, time, date, attending: [...attending, userInfo ]})
        return {title, description, time, date, attending: [...attending, userInfo], _id}
}

export const updateUser = (user, currentEvent) => {
    const { email, events, firstName, isAdmin, lastName, password, userName, image, _id } = user
    editUser(user._id, {email, events: [...events, currentEvent._id], firstName, isAdmin, lastName, password, userName, image})
    return {email, events: [...events, currentEvent._id], firstName, isAdmin, lastName, password, userName, image, _id}
}

export const getIsAttending = (currentEvent, currentUser) => currentUser.events.includes(currentEvent)

export const updateEvents = (events, setEvents, updatedEvent) => {
    const eventIndex = events.indexOf(events.find(event => event._id === updatedEvent._id))
    events[eventIndex] = updatedEvent
    setEvents(events)
}