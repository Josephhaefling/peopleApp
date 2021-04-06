import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    loginBox: {
        alignItems: 'center',
        borderRadius: 3,
        boxShadow: '0px 0px 2px 2px rgba(45, 46, 46, .2)',
        display: 'flex',
        flexDirection: 'column',
        height: '60vh',
        justifyContent: 'space-around',
        width: '50vh',
        fontFamily: 'Open Sans'
    },
    label: {
        fontFamily: 'Open Sans'
    }
}))