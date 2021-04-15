import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { findCurrentEvent } from './useEditEvent';
import useStyles from './styles';
import { editEvent, createEvent } from '../../../api';


const EditEventView = (props) => {

    const [ attendingEvent, setAttendingEvent] = useState()
    const [ eventTitle, setEventTitle ] = useState()
    const [ eventDescription, setEventDescription] = useState()
    const [ eventTime, setEventTime ] = useState()
    const [ eventDate, setEventDate ] = useState()
    const { setCurrentEvent, currentEvent, events, setEvents, currentUser }= props
    const { date, description, time, title, _id, attending } = currentEvent
    const styles = useStyles()
    const { eventContainer } = styles

    const updatedEvent = {
            attending: attendingEvent,
            _id,
            title: eventTitle,
            description: eventDescription,
            time: eventTime,
            date: eventDate
        }

    const handleClick = (e) => {
        const { innerText } = e.target
        if (innerText === 'SUBMIT') {
            editEvent(_id, updatedEvent)
            findCurrentEvent(updatedEvent, events, setEvents)
            setCurrentEvent('')
        } else {
            attendingEvent.push(currentUser)
            createEvent(updatedEvent)
        }
    }

    useEffect(() => {
        setAttendingEvent([])
        setEventTitle(title)
        setEventDescription(description)
        setEventTime(time)
        setEventDate(date)
    }, [])

    return (
        <div className={ eventContainer }>
            <TextField 
                    multiline
                    rows={2}
                    defaultValue={eventTitle}
                    variant='outlined'
                    label='event name'
                    onChange={(e) => setEventTitle(e.target.value)}
                />
            <TextField 
                    multiline
                    rows={20}
                    defaultValue={eventDescription}
                    variant='outlined'
                    label='event description'
                    onChange={(e) => setEventDescription(e.target.value)}
            />
            <Link 
                to={'/'} 
                style={ {textDecoration: 'none'} }
                onClick={(e) => handleClick(e)
                }
            >
                <Button>
                    {currentEvent ? 'Submit' : 'Create Event'}
                </Button>
            </Link>
        </div>
    )
}

export default EditEventView