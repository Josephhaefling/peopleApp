import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const EventView = (props) => {
    return (
        <div>
            <Link to='/'>
                <h3>hi</h3>
                <Button>
                Back
                </Button>
            </Link>
        </div>
    )
}

export default EventView