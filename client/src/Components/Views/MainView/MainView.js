import React, { useState, useEffect, useCallback } from 'react';
import Description from '../../Description/Description';
import UpComingEvents from '../../UpcomingEvents/UpcomingEvents';
import Members from '../../Members/Members';
import Photos from '../../Photos/Photos';
import Discussion from '../../Discussion/Discussion';

import useStyles from './styles';

const MainView = (props) => {

    const { 
        users,
        currentUser, 
        setEvents, 
        events, 
        description, 
        setDescription, 
        currentEvent, 
        setCurrentEvent, 
        setCurrentUser
    } = props
    
    const styles = useStyles()
    const { mainPage, column1, column2} = styles
    
    return (
        <div className={mainPage}>
            <div className={column1}>
                <Description 
                    admin={currentUser.isAdmin} 
                    description={description} 
                    setDescription={setDescription} 
                />
                <Members users={ users } />
                {/* <Photos /> */}
                {/* <Discussion />   */}
            </div>
            <div className={column2}>
                <div>
                    <UpComingEvents 
                        currentEvent={ currentEvent }
                        setCurrentEvent={setCurrentEvent}
                        currentUser={ currentUser } 
                        setCurrentUser={ setCurrentUser }
                        setEvents={ setEvents } 
                        events={ events} 
                    />
                </div>
            </div>
        </div>
    )
}

export default MainView