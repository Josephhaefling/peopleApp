import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, Select, MenuItem, FormControl, FormHelperText } from '@material-ui/core';
import { findCurrentEvent, removeCurrentEvent } from './useEditEvent';
import useStyles from './styles';
import { editEvent, createEvent, deleteEvent } from '../../../api';
import moment from 'moment';

const EditEventView = (props) => {

    const [ eventTitle, setEventTitle ] = useState()
    const [ eventDescription, setEventDescription] = useState()
    const [ eventTime, setEventTime ] = useState()
    const [ eventDate, setEventDate ] = useState()
    const [ hour, setHour ] = useState('choose hour')
    const [ minute, setMinute ] = useState('choose minute')
    const [ timeOfDay, setTimeOfDay ] = useState('choose AM/PM')
    const { setCurrentEvent, currentEvent, events, setEvents, currentUser }= props
    const { date, description, time, title, _id, attending } = currentEvent
    const styles = useStyles()
    const { eventContainer, titleInput, descriptionInput, timeContainer } = styles


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
            setCurrentEvent('')
        } else {
            updatedEvent.attending = [ currentUser._id]
            createEvent(updatedEvent)
            setEvents([...events, updatedEvent])
        }
    }, [ setCurrentEvent, events, _id, attending, eventDate, eventDescription, eventTime, eventTitle, setEvents ])

console.log(moment().format('MM/DD/YYYY'))

return (
        <div className={ eventContainer }>
            <div className={ timeContainer }>
                <FormControl>
                    <Select  defaultText={ hour } >
                        <MenuItem value={ 1 }>1</MenuItem>
                        <MenuItem value={ 2 }>2</MenuItem>
                        <MenuItem value={ 3 }>3</MenuItem>
                        <MenuItem value={ 4 }>4</MenuItem>
                        <MenuItem value={ 5 }>5</MenuItem>
                        <MenuItem value={ 6 }>6</MenuItem>
                        <MenuItem value={ 7 }>7</MenuItem>
                        <MenuItem value={ 8 }>8</MenuItem>
                        <MenuItem value={ 9 }>9</MenuItem>
                        <MenuItem value={ 10 }>10</MenuItem>
                        <MenuItem value={ 11 }>11</MenuItem>
                        <MenuItem value={ 12 }>12</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <Select>
                        <MenuItem value={moment().format('MM/DD/YYYY')}>00</MenuItem>
                        <MenuItem value={moment().format('MM/DD/YYYY')} >30</MenuItem>
                    </Select>
                </FormControl>
                <FormControl>
                    <Select>
                        <MenuItem value={moment().format('MM/DD/YYYY')}>AM</MenuItem>
                        <MenuItem value={moment().format('MM/DD/YYYY')}>PM</MenuItem>
                    </Select>
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