import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    eventHeader: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    eventPage: {
        flexDirection: 'column',
        height: '80vh',
        marginTop: '5vh'
    }, 
    titleStyles: {
        marginLeft: '5vw',
        marginRight: '5vw',
        fontSize: 28,
    },
    timeStyles : {
        marginLeft: '5vw',
    },
    mediatorContainer: {
        alignItems: 'center',
        display: 'flex',
        height: '10vh',
        justifyContent: 'space-around',
        marginLeft: '3vw',
        objectFit: 'cover',
        width: '30vw'
    }, 
    imageContainer: {
        height: '7vh',
        overflow: 'hidden',
        width: '5vw',
    },
    images: {
        height: '100%',
        objectFit: 'contain',
        objectPosition: 'center',
        width: '100%',
    },
    container: {
        marginTop: '5vh',
        marginLeft: '5vw',
        marginRight: '5vw',
        minHeight: '35vh' 
    }
}))