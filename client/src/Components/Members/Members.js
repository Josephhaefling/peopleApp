import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../api';
import { createMembers } from './useMembers';
import useStyles from './styles';

const Members = (props) => {

    const [ users, setUsers ] = useState()
    const members = users && (createMembers(users))
    const styles = useStyles()
    const { membersContainer, header, imageContainer } = styles

    const getUsers = async () => {
        const allUsers = await getAllUsers()
        setUsers(allUsers.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className={membersContainer}>
            <h3 className={header}>Members ({users && users.length})</h3>
            <div className={imageContainer} >
                {members}
            </div>
        </div>
    )
}

export default Members