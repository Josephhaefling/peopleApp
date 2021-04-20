import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    eventHeader: {
        borderBottom: '1px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    eventPage: {
        border: '1px solid red',
        height: '80vh'
    }, 
    titleStyles: {
        marginLeft: '7vw',
        fontSize: 28,
    },
    timeStyles : {
        marginLeft: '7vw',
    },
    mediatorContainer: {
        alignItems: 'center',
        display: 'flex',
        height: '10vh',
        justifyContent: 'space-around',
        // marginLeft: '5vw',
        width: '25vw'
    }, 
    imageContainer: {
        borderRadius: 50,        
        boxShadow: '0px 0px 2px 2px rgba(45, 46, 46, .2)',
        height: '7vh',
        overflow: 'hidden',
        width: '7vw',
    },
    images: {
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
    },
    descriptionStyles: {
        border: '1px solid green',
        minHeight: '35vh' 
    }
}))