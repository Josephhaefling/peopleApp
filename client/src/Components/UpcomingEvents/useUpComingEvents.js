import Event from '../Event/Event';
// import { getAllEvents } from '../../api';

// export const getEvents = async () => {
//     const events = await getAllEvents() 
//     return events.data
// }

export const createEvents = (events, setCurrentEvent, currentEvent, currentUser, setCurrentUser, setEvents) => {
    // const { firstName, isAdmin } = currentUser
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