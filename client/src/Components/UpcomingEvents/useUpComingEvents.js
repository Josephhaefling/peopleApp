import Event from '../Event/Event';
import { getAllEvents } from '../../api';

export const getEvents = async () => {
    const events = await getAllEvents() 
    return events   
}

export const createEvents = (events) => {
    const upComingEvents = events.map(event => <Event eventInfo={ event } />)
    return upComingEvents
}