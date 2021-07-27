import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    member: {
        alignItems: 'center',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Open Sans',
        margin: '2vh',
        width: '75px',
        
    }, 
    imageContainer: {
        height: '10vh',
        width: '7vw',

    },
    imageStyles: {
        height: '100%',
        width: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
    },
    nameStyles: {
        margin: 0
    }
}))