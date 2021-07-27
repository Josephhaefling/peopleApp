import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    formContainer: {
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: '0px 0px 3px 2px rgba(45, 46, 46, .3)',
        display: 'flex',
        justifyContent: 'center',
        marginTop: '5vh',
        width: '70vw'
    },
    eventContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }, 
    titleInput: {
        marginBottom: '2vh',
        width: '65vw'
    },
    descriptionInput: {
        marginBottom: '2vh',
        width: '65vw'
    },
    timeContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '2vh',
        width: '60vw'
    },
    selector: {
    }, 
    timeDateInput: {
        cursor: 'pointer',
        marginTop: '2vh',
        marginBottom: '2vh'
    }, 
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '2vh',
        width: '70vw'
    }
}))