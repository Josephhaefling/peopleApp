import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    mainPage: {
        color: '#25291C',
        display: 'flex',
        height: 'auto',
        justifyContent: 'space-around',
        marginTop: '2vh',
    }, 
    column1: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: '35vw'
    }, 
    column2: {
        display: 'flex',
        justifyContent: 'center',
        width: '50vw'
    }
}))