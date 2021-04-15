import React from 'react';
import useStyles from './styles';

const Member = (props) => {

    const styles = useStyles()
    const { member, name, image } = styles

    const { id } = props.member
    return (
        <div className={member} key={id}>
            <img src={image} />
            <h1 className={name} >{props.member.userName}</h1>
        </div>
    )
}

export default Member