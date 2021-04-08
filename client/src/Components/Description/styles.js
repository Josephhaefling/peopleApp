import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    descriptionContainer: {
        fontFamily: 'Open Sans',
        maxHeight: '30vh',
        overflow: 'hidden',
        paddingLeft: theme.spacing(1) //8px
    }, 
    fullDescription: {
        minHeight: 'auto',
        fontFamily: 'Open Sans',
    },
    header: {
        color: '#3F84E5',
        fontFamily: 'Libre Franklin',
    },
    button: {
        fontFamily: 'Open Sans'
    }
}))