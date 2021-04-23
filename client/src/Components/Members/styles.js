import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    membersContainer: {
        flexWrap: 'wrap',
        paddingLeft: '1vh',
        fontFamily: 'Open Sans',
        height: 'auto'
    },
    header: {
        color: '#79bec3',
        fontFamily: 'Libre Franklin'
    }, 
    imageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        height: 'auto',
        marginTop: '1vh',
        maxWidth: '50vw'
    }
}))