import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    eventHeader: {
        alignItems: 'center',
        color: '#79bec3',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2vh'
    },
    eventPage: {
        alignItems: 'center',
        borderRadius: '10px',
        backgroundColor: 'rgba(37, 41, 28, .9)',
        color: '#FEFEFE',
        boxShadow: '0px 0px 3px 2px rgba(45, 46, 46, .3)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Open Sans',
        height: 'auto',
        marginBottom: '5vh',
        marginTop: '5vh',
    }, 
    titleStyles: {
        color: '#FEFEFE',
        fontSize: 28,
    },
    timeStyles : {
        color: '#79bec3',
        // marginLeft: '5vw',
    },
    mediatorContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        marginBottom: '5vh',
        marginLeft: '1vw',
        objectFit: 'cover',
        width: '30vw'
    }, 
    imageContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'auto',
        marginTop: '2vh',
        width: '7vw'
    },
    images: {
        height: '100%',
        marginBottom: '1vh',
        objectFit: 'contain',
        objectPosition: 'center',
        width: '100%',
    },
    container: {
        height: 'auto',
        marginBottom: '5vh',
        marginLeft: '5vw',
        marginRight: '5vw',
        marginTop: '5vh',
        minHeight: '35vh' ,
        width: '80vw'
    },
    buttonContainer: {
        display: 'flex',
        height: 'auto',
        justifyContent: 'center',
        marginBottom: '2vh',
        marginLeft: '5vw',
        marginRight: '5vw',
        marginTop: '2vh',
        width: '80vw'
    }, 
    largeTitle: {
        color: '#79bec3',
    }, 
    button: {
        borderColor: '79bec3',
        color: '#79bec3'
    }
}))