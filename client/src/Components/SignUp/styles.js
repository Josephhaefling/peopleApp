import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    signUpBox: {
        alignItems: 'center',
        borderRadius: '10px',
        boxShadow: '0px 0px 2px 2px rgba(45, 46, 46, .2)',
        display: 'flex',
        flexDirection: 'column',
        height: '75vh',
        justifyContent: 'space-around',
        width: '50vh'
    },
    boxTitle: {
        fontFamily: 'Libre Franklin'
    }
}))