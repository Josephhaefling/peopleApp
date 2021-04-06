import React, { useState, useEffect } from 'react';
import Description from '../../Description/Description';
import UpComingEvents from '../../UpcomingEvents/UpcomingEvents';
import Members from '../../Members/Members';
import Photos from '../../Photos/Photos';
import Discussion from '../../Discussion/Discussion';
import { getAllUsers } from '../../../api';
import useStyles from './styles';

const MainView = (props) => {

    const { currentUser, setEvents, events } = props
    const styles = useStyles()
    const { mainPage, column1, column2} = styles

    return (
        <div className={mainPage}>
            <div className={column1}>
                <Description />
                <Members />
                <Photos />
                <Discussion />  
            </div>
            <div className={column2}>
                <div>
                    <UpComingEvents setEvents={setEvents} events={events} />
                </div>
            </div>
        </div>
    )
}

export default MainView