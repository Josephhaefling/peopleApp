import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import Event from '../Event/Event';
import { makeStyles } from '@material-ui/core';
import { getEvents, createEvents } from './useUpComingEvents';
import { getAllEvents } from '../../api';

const useStyles = makeStyles({
    title: {
        fontFamily: 'Libre Franklin',
    }
});

const UpcomingEvents = (props) => {

    const { setEvents, events } = props
    const classes = useStyles();
    const eventsList = events && createEvents(events)

    const setAllEvents = async () => {
        const events = await getAllEvents()
        setEvents(events.data)
    }

    useEffect(() => {
        setAllEvents()
    }, [])

    return (    
        <div className={classes.eventsContainer}>
            <Typography classes={{ root: classes.title }}>Upcoming Events</Typography>
            <div>
                {eventsList}
            </div>
        </div>
    )   
}

export default UpcomingEvents