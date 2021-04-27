import React, { useEffect, useState } from 'react';
import { createMembers } from './useMembers';
import useStyles from './styles';

const Members = (props) => {

    const { users, setUsers, currentEvent } = props
    const members = users && (createMembers(users))
    const styles = useStyles()
    const { membersContainer, header, imageContainer } = styles

    return (
        <div className={membersContainer}>
            <h3 className={ header }>{ currentEvent ? `Attendees (${users && users.length})` : `Members (${users && users.length})` }</h3>
            <div className={ imageContainer } >
                { members }
            </div>
        </div>
    )
}

export default Members