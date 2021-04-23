import Event from '../Event/Event';

export const createEvents = (events, setCurrentEvent, currentEvent, currentUser, setCurrentUser, setEvents) => {
    const upComingEvents = events.map(event => {
    return (
        <Event 
            key={ event._id } 
            events={ events }
            eventInfo={ event } 
            currentEvent={ currentEvent } 
            setCurrentEvent={ setCurrentEvent } 
            currentUser={ currentUser } 
            setCurrentUser={ setCurrentUser } 
            setEvents={ setEvents } />
        )   
})
    return upComingEvents
}