import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    membersContainer: {
        paddingLeft: '1vh',
        fontFamily: 'Open Sans',
        height: 'auto'
    },
    header: {
        color: '#3F84E5',
        fontFamily: 'Libre Franklin'
    }, 
    imageContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: '1vh'
    }
}))