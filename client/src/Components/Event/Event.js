import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles'

const Event = (props) => {
    const { isAdmin, userName } = props
    const { title, attending, description, date, time } = props.eventInfo
    const styles = useStyles()
    const {attendeesContainer, eventContainer, header, button} = styles

    const handleClick = () => {
        // setPeopleAttending(attending + 1)
    }

    const isAdministrator = () => {
        return isAdmin ?
                        <Button 
                            href='/edit_event'
                            className={button} 
                            onClick={ handleClick } 
                            variant='contained'
                        >
                            Edit Event
                        </Button> :
                        <Button 
                            className={button} 
                            onClick={ handleClick } 
                            variant='contained'
                        >
                            Attend
                        </Button>
    }

    useEffect(() => {
        // attending && setPeopleAttending(attending)
    },[])

    return (
        <div className={ eventContainer }>
            <Link
                style={{textDecoration: 'none', color: '#25291C'}}
                to='/event'
            >
                <h4 className={ header } >{`${date} ${time}`}</h4>
                <h3>{title}</h3>
                <p>{userName ? description : 'Please sign in for more info'}</p>
            </Link>
                <div className={ attendeesContainer }>
                    {
                        userName &&
                        <h4>Attendees: { attending.length }</h4> 
                    }
                    { userName && isAdministrator() }
                </div>
        </div>
    )
}

export default Event