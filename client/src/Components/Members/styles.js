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
        justifyContent: 'space-between', 
        marginTop: '1vh',
        maxWidth: '50vw',
    },
    
    fullImageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        maxHeight: '150px',
        minHeight: 'auto',
        fontFamily: 'Open Sans',
        justifyContent: 'space-between', 
        overflow: 'hidden',
    },
    button: {
        fontFamily: 'Open Sans'
        
    }
}))