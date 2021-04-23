import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, FormControl } from '@material-ui/core';
import { findCurrentEvent, removeCurrentEvent } from './useEditEvent';
import useStyles from './styles';
import { editEvent, createEvent, deleteEvent } from '../../../api';
import moment from 'moment';

const EditEventView = (props) => {
    const [ eventTitle, setEventTitle ] = useState()
    const [ eventDescription, setEventDescription] = useState()
    const [ eventTime, setEventTime ] = useState()
    const [ eventDate, setEventDate ] = useState()
    const [ timeDate, setTimeDate ] = useState()
    
    const { setCurrentEvent, currentEvent, events, setEvents, currentUser }= props
    const { date, description, time, title, _id, attending } = currentEvent && currentEvent
    const styles = useStyles()
    const { eventContainer, titleInput, descriptionInput, timeContainer } = styles

    const createEventTime = useCallback((e) => {
        e.preventDefault()
        e.target.id === 'date' ? setEventDate(e.target.value) : setEventTime(e.target.value)
        if(eventTime && eventDate) {
        const newMoment = new moment(`${eventDate} ${eventTime}`)
        setTimeDate(newMoment)
        }
    }, [ setTimeDate , eventDate, eventTime ])

    const handleClick = useCallback(async (e) => {
        const updatedEvent = { attending, _id, title: eventTitle, description: eventDescription, time: timeDate, date: eventDate }
        const { innerText } = e.target
        if (innerText === 'SUBMIT') {
            console.log('time and date')
            const editedEvent = findCurrentEvent(updatedEvent, events)
            editEvent(_id, editedEvent)
            setCurrentEvent('')
        } else if(innerText === 'DELETE'){
            const eventToDelete = findCurrentEvent(updatedEvent, events)
            const modifiedEvents = removeCurrentEvent(updatedEvent, events)
            deleteEvent(eventToDelete._id)
            setEvents(modifiedEvents)
            setCurrentEvent('')
        } else {
            updatedEvent.attending = [ currentUser._id]
            createEvent(updatedEvent)            
            setEvents([...events, updatedEvent])
        }
    }, [ setCurrentEvent, events, _id, attending, eventDate, eventDescription, eventTitle, setEvents, currentUser._id, timeDate ])

    //use effect is not setting eventDate or eventTime
    useEffect(() => {
        if(currentEvent) {
            console.log('hi')
            const currentEventDate = new moment(time).format('DD/MM/YYYY')
            const currentEventTime = new moment(time).format('hh:mm a')
            setEventDate(currentEventDate)
            setEventTime(currentEventTime)
            console.log('event date:', eventDate)
            console.log('event time', eventTime)
        }
    }, [])


return (
        <div className={ eventContainer }>
            <div className={ timeContainer }>
                <FormControl>
                    <TextField
                        id="date"
                        label="Date"
                        type="date"
                        defaultValue={ eventDate }
                        value={ eventDate }
                        onChange={ (e) => createEventTime(e)}
                        InputLabelProps={{
                        shrink: true,
                    }}
                    />
                    <TextField
                        id="time"
                        label="Time"
                        type="time"
                        defaultValue={ eventTime }
                        value={ eventTime }
                        onChange={ (e) => createEventTime(e)}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 300, // 5 min
                        }}
                    />                  
                    
                </FormControl>
            </div>
            <TextField 
                    className={ titleInput }
                    multiline
                    rows={2}
                    defaultValue={currentEvent && currentEvent.title}
                    variant='outlined'
                    label='event name'
                    onChange={(e) => setEventTitle(e.target.value)}
                />
            <TextField 
                    className={ descriptionInput }
                    multiline
                    rows={20}
                    defaultValue={currentEvent && currentEvent.description}
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
            <Link 
                to={'/'} 
                style={ {textDecoration: 'none'} }
                onClick={(e) => handleClick(e)
                }
            >
                <Button>
                    {currentEvent && 'Delete'}
                </Button>
            </Link>
        </div>
    )
}

export default EditEventView