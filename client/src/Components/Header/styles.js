import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    navBar: {
        alignItems: 'center',
        backgroundColor: '#25291C',
        display: 'flex',
        flexDirection: 'row',
        height: '15vh',
        justifyContent: 'space-between',
        // textAlign: 'center'
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
    },
    logo: {
        fontFamily: 'Libre Franklin',
        paddingLeft: '50px',
    }
}))