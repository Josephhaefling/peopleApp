import React, { useState, useEffect } from 'react';
import Description from '../../Description/Description';
import UpComingEvents from '../../UpcomingEvents/UpcomingEvents';
import Members from '../../Members/Members';
import Photos from '../../Photos/Photos';
import Discussion from '../../Discussion/Discussion';
import { getAllUsers } from '../../../api';
import useStyles from './styles';

const AdminView = (props) => {

    const { currentUser, setEvents, events, description, setDescription } = props
    const styles = useStyles()
    const { adminPage, column1, column2} = styles

    return (
        <div className={adminPage}>
            <div className={column1}>
                <h1>I am the admin view</h1>
                <Description 
                    admin={currentUser.admin} 
                    description={description} 
                    setDescription={setDescription} 
                />
                <Members />
                <Photos />
                <Discussion />  
            </div>
            <div className={column2}>
                <div>
                    <UpComingEvents 
                        currentUser={ currentUser } 
                        setEvents={ setEvents } 
                        events={ events} 
                    />
                </div>
            </div>
        </div>
    )
}

export default AdminView