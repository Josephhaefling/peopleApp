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
    const { eventPage, eventHeader, mediatorContainer, images, imageContainer, titleStyles, timeStyles, container, buttonContainer, largeTitle, button } = styles
    const { users, eventInfo, currentEvent } = props
    const { attending, date, description, time, title,  } = eventInfo

    return (
        <div className={ eventPage }>
            <div className={ eventHeader }>
                <Typography className={ timeStyles } component='body1' >Tues January 1st 2020</Typography>
                <Typography className={ titleStyles} component='h2' > { title } </Typography>
            </div>
            <div className={ container }>
                <h3 className={ largeTitle }>Details</h3>
                <Typography component='body1'>{ description }</Typography>
            </div>
            <div className={ container } >
                <div className={mediatorContainer}>
                    <h3 className={ largeTitle } component='h3' > { `Moderator` } </h3>
                    <div className={ imageContainer }>
                        <img className={ images } src={ bagHead } alt={ 'person with a brown bag on their head'} />
                        <Typography component='h5'>{ attending[0].userName }</Typography>
                    </div>
                </div>
                <Members users={ attending } currentEvent={ currentEvent } /> 
            </div>
            <div className={ buttonContainer }>
                <Link to='/' style={ { textDecoration: 'none' } }>
                    <Button className={ button } variant='outlined' color='#79bec3'>
                        Back
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default EventView