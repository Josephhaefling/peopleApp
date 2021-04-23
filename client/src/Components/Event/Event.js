import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { updateEvent, getIsAttending, updateUser, updateEvents } from './useEvent';
import moment from 'moment';
import useStyles from './styles';

const Event = (props) => {

    const [ isAttending, setIsAttending ] = useState()
    const { events, setCurrentEvent, currentUser, setCurrentUser, eventInfo, currentEvent, setEvents } = props
    const { firstName, isAdmin } = currentUser
    const { title, attending, description, date, time } = eventInfo
    const styles = useStyles()
    const {attendeesContainer, eventContainer, header, button, descriptionContainer} = styles
    const formattedTime = new moment(time).format('dddd, MMMM Do YYYY, h:mm a')

    const isAdministrator = () => {
        if(isAdmin) {
            return (
                <Link 
                    to={`/edit:${ title }`} 
                    style={{textDecoration: 'none'}}
                    onClick={(e) => handleClick(e) } 
                >
                    <Button 
                        className={ button } 
                        variant='contained'
                    >
                        Edit Event
                    </Button>
                </Link>
            )
        } else {
            return (
                <Button 
                    className={ button } 
                    onClick={(e) => handleClick(e) } 
                    variant='contained'
                >
                    Attend
                </Button>
            )
        }
    }

    const isLoggedIn = () => {
        if(currentUser) {
            return (
                <Link
                    onClick={ () => setCurrentEvent(eventInfo) }
                    style={ {textDecoration: 'none', color: '#25291C'} }
                    to='/event'
                >
                    <h4 className={ header } >{formattedTime}</h4>
                    <h3>{ title }</h3>
                    <div>
                        <p className={ descriptionContainer } >{ firstName ? description : 'Please sign in for more info' }</p>
                    </div>
                </Link>
            )
        } else {
            return (
                <div>
                    <h4 className={ header } >{formattedTime}</h4>
                    <h3>{ title }</h3>
                    <div>
                        <p className={ descriptionContainer } >{ firstName ? description : 'Please sign in for more info' }</p>
                    </div> 
                </div>
            )
        }
    }

    const handleClick = useCallback((e) => {
        if(!isAdmin) {
            e.preventDefault()
            const updatedUser = updateUser(currentUser, eventInfo)
            const updatedEvent = updateEvent(currentUser, eventInfo)
            updateEvents(events, setEvents, updatedEvent) 
            setCurrentEvent(eventInfo)
            setCurrentUser(updatedUser)
        } else {
            setCurrentEvent(eventInfo)
        }
    },[ currentUser, events, setEvents, setCurrentUser, eventInfo, isAdmin, setCurrentEvent ])

    useEffect(() => {
        const userAttending = currentUser && getIsAttending(eventInfo, currentUser)
        setIsAttending(userAttending)
    }, [currentUser, eventInfo])

    return (
        <div className={ eventContainer }>
                { isLoggedIn() }
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