import React from 'react';
import useStyles from './styles';

const Members = () => {

    const styles = useStyles()
    const { membersContainer, header } = styles

    return (
        <div className={membersContainer}>
            <h3 className={header}>Members (4)</h3>
            <p>Member</p>
            <p>Member</p>
            <p>Member</p>
            <p>Member</p>
        </div>
    )
}

export default Members