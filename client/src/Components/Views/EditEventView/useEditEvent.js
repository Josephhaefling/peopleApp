export const findCurrentEvent = (currentEvent, events) => {
    const { _id } = currentEvent
    const event = events.find(event => event._id === _id)
    const index = events.indexOf(event)
    events[index] = currentEvent
    return currentEvent
}

export const removeCurrentEvent = (currentEvent, events) => {
    const { _id } = currentEvent
    const modifiedEvents = events.filter(event => event._id !== _id)
    return modifiedEvents
}