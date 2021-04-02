import React from 'react';
import useStyles from './styles';

const Discussion = () => {

    const styles = useStyles()
    const { discussionContainer, header } = styles
    return(
        <div className={discussionContainer}>
            <h3 className={header}>Discussion</h3>
            <p>comment</p>
            <p>comment</p>
            <p>comment</p>
            <p>comment</p>
        </div>
    )
}

export default Discussion