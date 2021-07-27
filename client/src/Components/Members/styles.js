import { makeStyles } from '@material-ui/core';
import { blue, red } from '@material-ui/core/colors';

export default makeStyles(() => ({
    membersContainer: {
        flexWrap: 'wrap',
        fontFamily: 'Open Sans',
        height: 'auto',
        padding: '10px'
    },
    header: {
        color: '#79bec3',
        fontFamily: 'Libre Franklin'
    }, 

    imageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        justifyContent: 'space-around', 
        marginTop: '1vh',
        maxHeight: '250px',
        maxWidth: '50vw',
        overflow: 'hidden',
    },
  
    fullImageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        minHeight: 'auto',
        fontFamily: 'Open Sans',
        justifyContent: 'space-around', 
    },
    button: {
        fontFamily: 'Open Sans'
    }
}))