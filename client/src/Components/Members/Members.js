import React, { useState } from 'react';
import { createMembers } from './useMembers';
import useStyles from './styles';
import { Button } from '@material-ui/core';

const Members = (props) => {

    const { users, setUsers, currentEvent } = props
    const members = users && (createMembers(users))
    const styles = useStyles()
    const { membersContainer, header, imageContainer, fullImageContainer } = styles
    const [viewMore, setViewMore] = useState(false)

    console.log('view more', viewMore)

    return (
        <div className={membersContainer}>
            <h3 className={ header }>{ currentEvent ? `Attendees (${users && users.length})` : `Members (${users && users.length})` }</h3>
            <div 
            className={ viewMore ? fullImageContainer : imageContainer }
            >
                { members }
            </div>
            <Button 
                onClick={() => setViewMore(!viewMore)}
            >
                {viewMore ? 'See More' : 'See Less'}
            </Button>
        </div>
    )
}

export default Members