import React from 'react';
import useStyles from './styles';

const Photos = () => {

    const styles = useStyles()
    const { photosContainer, header } = styles

    return (
        <div className={photosContainer}>
            <h3 className={header}>Photos</h3>
            <p>photo</p>
            <p>photo</p>
            <p>photo</p>
            <p>photo</p>
            <p>photo</p>
            <p>photo</p>
        </div>
    )
}

export default Photos