import React from 'react';
import useStyles from './styles';
import Event from '../Event/Event';

const UpcomingEvents = () => {

    const styles = useStyles()
    const {eventsContainer} = styles

    return (    
        <div className={eventsContainer}>
            <h3>Upcoming Events</h3>
            <Event />
            <Event />
            <Event />
            <Event />
            <Event />
        </div>
    )   
}

export default UpcomingEvents