import { makeStyles } from '@material-ui/core';

export default makeStyles((theme) => ({
    description: {
        maxHeight: '30vh',
        overflow: 'hidden',
        paddingLeft: theme.spacing(1) //8px
    }, 
    fullDescription: {
        minHeight: 'auto'
    },
    header: {
        color: '#3F84E5'
    }
}))