import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';
import Photos from '../../Photos/Photos';
import Coments from '../../Discussion/Discussion';
import Members from '../../Members/Members';

import bagHead from '../../../Assets/baghead.jpeg';
import useStyles from './styles';

const EventView = (props) => {

    const styles = useStyles()
    const { eventPage, eventHeader, mediatorContainer, images, imageContainer, titleStyles, timeStyles, descriptionStyles } = styles
    const { users, eventInfo } = props
    const { attending, date, description, time, title,  } = eventInfo

    return (
        <div className={ eventPage }>
            <div className={ eventHeader }>
                <Typography className={ timeStyles } component='body1' >Tues January 1st 2020</Typography>
                <Typography className={ titleStyles} component='h2' > { title } </Typography>
                <div className={mediatorContainer}>
                    <div className={ imageContainer }>
                        <img className={ images } src={ bagHead } />
                    </div>
                    <Typography component='h6' > { `Moderator: ${attending[0]}` } </Typography>
            </div>
            <div className={ descriptionStyles }>
                <Typography component='h6'>Details</Typography>
                <Typography component='body1'>{ description }</Typography>
            </div>
                <Members users={ attending } /> 
            </div>

            <Link to='/'>
                <Button>
                Back
                </Button>
            </Link>
        </div>
    )
}

export default EventView