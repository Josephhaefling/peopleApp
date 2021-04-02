import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles'

const Event = () => {

    const [ attending, setAttending ] = useState(1)
    const styles = useStyles()
    const {attendeesContainer, event, header} = styles

    const handleClick = () => {
        setAttending(attending + 1)
    }

    return (
        <div className={ event }>
            <Link
                style={{textDecoration: 'none', color: '#25291C'}}
                to='/event'
            >
                <h4 className={ header } >Wed, Apr 1, 5:30 PM MST</h4>
                <h3>Event Title</h3>
                <p>Events description</p>
                <div className={ attendeesContainer }>
                    <h4>Attendees: { attending }</h4>
                    <Button onClick={ handleClick }>Attend</Button>
                </div>
            </Link>
        </div>
    )
}

export default Event