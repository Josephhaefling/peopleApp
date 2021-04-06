import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles'

const Event = (props) => {

    const { title, attending, description, date, time } = props.eventInfo
    const styles = useStyles()
    const {attendeesContainer, eventContainer, header, button} = styles

    const handleClick = () => {
        // setPeopleAttending(attending + 1)
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
                <p>{description}</p>
            </Link>
                <div className={ attendeesContainer }>
                    <h4>Attendees: { attending.length }</h4>
                    <Button className={button} onClick={ handleClick } variant='contained'>Attend</Button>
                </div>
        </div>
    )
}

export default Event