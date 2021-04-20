import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, FormControl } from '@material-ui/core';
import { findCurrentEvent, removeCurrentEvent } from './useEditEvent';
import useStyles from './styles';
import { editEvent, createEvent, deleteEvent } from '../../../api';
import moment from 'moment';

const EditEventView = (props) => {

    const [ eventTitle, setEventTitle ] = useState()
    const [ eventDescription, setEventDescription] = useState()
    const [ eventTime, setEventTime ] = useState()
    const [ eventDate, setEventDate ] = useState()
    const { setCurrentEvent, currentEvent, events, setEvents }= props
    const { date, description, time, title, _id, attending } = currentEvent
    const styles = useStyles()
    const { eventContainer, titleInput, descriptionInput } = styles


    const handleClick = useCallback(async (e) => {
        const updatedEvent = { attending, _id, title: eventTitle, description: eventDescription, time: eventTime, date: eventDate }

        const { innerText } = e.target
        if (innerText === 'SUBMIT') {
            const editedEvent = findCurrentEvent(updatedEvent, events)
            editEvent(_id, editedEvent)
            setCurrentEvent('')
        } else if(innerText === 'DELETE'){
            const eventToDelete = findCurrentEvent(updatedEvent, events)
            const modifiedEvents = removeCurrentEvent(updatedEvent, events)
            console.log(eventToDelete)
            deleteEvent(eventToDelete._id)
            setEvents(modifiedEvents)
        } else {
            updatedEvent.attending = [ _id]
            createEvent(updatedEvent)
            setEvents([...events, updatedEvent])
        }
    }, [ setCurrentEvent, events, _id, attending, eventDate, eventDescription, eventTime, eventTitle, setEvents ])

console.log(moment().format('MM/DD/YYYY'))

return (
        <div className={ eventContainer }>
              <FormControl>
              <Select value={moment().format('MM/DD/YYYY')}>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>1</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>2</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>3</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>4</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>5</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>6</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>7</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>8</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>9</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>10</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>11</MenuItem>
                  <MenuItem value={moment().format('MM/DD/YYYY')}>12</MenuItem>
                  </Select>
                  </FormControl>
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