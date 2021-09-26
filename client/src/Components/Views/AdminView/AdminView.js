import React from 'react';
import Description from '../../Description/Description';
import UpComingEvents from '../../UpcomingEvents/UpcomingEvents';
import Members from '../../Members/Members';
import Photos from '../../Photos/Photos';
import Discussion from '../../Discussion/Discussion';
// import { getAllUsers } from '../../../api';
// import { getAllEvents } from '../../../api';
import useStyles from './styles';

const AdminView = (props) => {

    const { 
        users,
        currentUser, 
        setEvents, 
        events, 
        description, 
        setDescription, 
        currentEvent, 
        setCurrentEvent 
    } = props

    const styles = useStyles()
    const { adminPage, column1, column2} = styles

    return (
        <div className={adminPage}>
            <div className={column1}>
                <Description 
                    admin={currentUser.isAdmin} 
                    description={description} 
                    setDescription={setDescription} 
                />
                <Members users={ users } />
                <Photos />
                <Discussion />  
            </div>
            <div className={column2}>
                <div>
                    <UpComingEvents 
                        currentEvent={ currentEvent }
                        setCurrentEvent={ setCurrentEvent }  
                        currentUser={ currentUser } 
                        setEvents={ setEvents } 
                        events={ events } 
                    />
                </div>
            </div>
        </div>
    )
}

export default AdminView