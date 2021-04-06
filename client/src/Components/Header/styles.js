import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    navBar: {
        alignItems: 'center',
        backgroundColor: '#3F84E5',
        display: 'flex',
        flexDirection: 'row',
        height: '15vh',
        justifyContent: 'space-around',
        // textAlign: 'center'
    },
    logo: {
        fontSize: 60,
        justifyContent: 'center',
        width: '40vw'
    }, 
    header: {
        color: '#FEFEFE',
        fontSize: 60,
        width: '60vw',
        fontFamily: 'Libre Franklin',
    }, 
    button: {
        color: '#FEFEFE',
        width: '10vw',
        fontFamily: 'Libre Franklin',
        textTransform: 'capitalize'
    }
}))