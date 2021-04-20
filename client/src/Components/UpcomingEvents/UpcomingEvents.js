import React, { useEffect, useCallback } from 'react';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import { getEvents, createEvents } from './useUpComingEvents';

const useStyles = makeStyles({
    title: {
        fontFamily: 'Libre Franklin',
    }
});

const UpcomingEvents = (props) => {

    const { 
            setEvents, 
            events, 
            currentUser, 
            currentEvent, 
            setCurrentEvent, 
            setCurrentUser
          } = props
          
    const classes = useStyles();
    const eventsList = events && createEvents(events, setCurrentEvent, currentEvent, currentUser, setCurrentUser, setEvents)

    return (    
        <div className={classes.eventsContainer}>
            <Typography classes={{ root: classes.title }}>Upcoming Events</Typography>
            {
                currentUser.isAdmin && 
                <Link 
                    to='/create_event' 
                    style={{textDecoration: 'none'}}
                >
                    <Button>
                        Create Event
                    </Button>
                </Link>
            }
            <div>
                {eventsList}
            </div>
        </div>
    )   
}

export default UpcomingEvents