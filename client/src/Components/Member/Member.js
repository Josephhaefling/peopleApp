import React from 'react';
import useStyles from './styles';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import BagHead from '../../Assets/baghead.jpeg';

const Member = (props) => {

    const styles = useStyles()
    const { member, imageStyles, imageContainer, nameStyles } = styles
    const { image, id, name } = props.member
    console.log('member in member', name)

    return (
        <div className={ member } key={id}>
            <div className={ imageContainer }>
                <img className={ imageStyles } src={ image || BagHead } alt='user' />
            </div>
            <h5 className={ nameStyles } >{ name && name}</h5>
        </div>
    )
}

export default Member