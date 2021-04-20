import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    member: {
        alignItems: 'center',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Open Sans',
        marginTop: '2vh',
        
    }, 
    imageContainer: {
        height: '8vh',
        width: '7vw',

    },
    imageStyles: {
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
    },
    nameStyles: {
        margin: 0
    }
}))