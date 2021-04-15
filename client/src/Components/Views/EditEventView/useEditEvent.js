export const findCurrentEvent = (currentEvent, events, setEvents) => {
    const { _id } = currentEvent
    const thing = events.find(event => event._id === _id)
    const index = events.indexOf(thing)
    events[index] = currentEvent
    setEvents(events)
}