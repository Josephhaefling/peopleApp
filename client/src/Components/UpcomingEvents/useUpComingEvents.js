import Event from '../Event/Event';
import { getAllEvents } from '../../api';

export const getEvents = async () => {
    const events = await getAllEvents() 
    return events   
}

export const createEvents = (events, isAdmin, userName) => {
    console.log(userName)
    const upComingEvents = events.map(event => <Event eventInfo={ event } isAdmin={isAdmin} userName={userName} />)
    return upComingEvents
}