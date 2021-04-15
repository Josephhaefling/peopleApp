import { editEvent, editUser } from '../../api';

export const updateEvent = (user, event) => {
        const { title, description, time, date, attending, _id } = event
        editEvent(_id, {title, description, time, date, attending: [...attending, user._id ]})
        return {title, description, time, date, attending: [...attending, user ], _id}
}

export const updateUser = (user, currentEvent) => {
    const { email, events, firstName, isAdmin, lastName, password, userName, image, _id } = user
    editUser(user._id, {email, events: [...events, currentEvent._id], firstName, isAdmin, lastName, password, userName, image})
    return {email, events: [...events, currentEvent], firstName, isAdmin, lastName, password, userName, image, _id}
}

export const getIsAttending = (currentEvent, currentUser) => currentUser.events.includes(currentEvent)

export const updateEvents = (events, setEvents, updatedEvent) => {
    const eventIndex = events.indexOf(events.find(event => event._id === updatedEvent._id))
    events[eventIndex] = updatedEvent
    setEvents(events)
}