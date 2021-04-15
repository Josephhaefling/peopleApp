import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { updateEvent, getIsAttending, updateUser, updateEvents } from './useEvent';
import useStyles from './styles';

const Event = (props) => {

    const [ isAttending, setIsAttending ] = useState()
    const { events, setCurrentEvent, currentUser, setCurrentUser, eventInfo, currentEvent, setEvents } = props
    const { firstName, isAdmin } = currentUser
    const { title, attending, description, date, time } = eventInfo
    const styles = useStyles()
    const {attendeesContainer, eventContainer, header, button} = styles
    
    const isAdministrator = () => {
        return isAdmin ?
        <Link 
            to={`/edit:${ title }`} 
            style={{textDecoration: 'none'}}
            onClick={() => handleClick() } 
        >
            <Button 
                className={ button } 
                variant='contained'
            >
                Edit Event
            </Button>
        </Link> :
        <Button 
            className={ button } 
            onClick={(e) => handleClick(e) } 
            variant='contained'
         >
            Attend
        </Button>
    }

    const handleClick = useCallback((e) => {
        e.preventDefault()
        const updatedUser = updateUser(currentUser, currentEvent)
        const updatedEvent = updateEvent(currentUser, currentEvent)
        updateEvents(events, setEvents, updatedEvent) 
        setCurrentUser(updatedUser)
    },[ currentEvent, currentUser, events, setEvents, setCurrentUser ])

    useEffect(() => {
        const userAttending = currentUser && getIsAttending(eventInfo, currentUser)
        setIsAttending(userAttending)
    }, [currentUser, eventInfo])

    useEffect(() => {
        setCurrentEvent(eventInfo)      
    }, [ currentEvent, setCurrentEvent, eventInfo ])

    return (
        <div className={ eventContainer }>
            <Link
                style={ {textDecoration: 'none', color: '#25291C'} }
                to='/event'
            >
                <h4 className={ header } >{`${date} ${time}`}</h4>
                <h3>{ title }</h3>
                <p>{ firstName ? description : 'Please sign in for more info' }</p>
            </Link>
                <div className={ attendeesContainer }>
                    {
                        firstName &&
                        <h4>Attendees: { attending.length }</h4> 
                    }
                    { firstName && isAdministrator() }
                </div>
        </div>
    )
}

export default Event