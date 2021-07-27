import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    eventContainer: {
        fontFamily: 'Open Sans',
        borderRadius: '10px',
        boxShadow: '0px 0px 3px 2px rgba(45, 46, 46, .3)',
        height: '30vh',
        padding: '10px',
        width: '44vw',
        '&:hover': {
            animationName: `$pop`,
            animationDuration: '.5s',
            animationTimingFunction: 'ease',
            animationFillMode: 'forwards'
        }    
    },
    header: {
        color: '#79bec3',
        fontFamily: 'Libre Franklin',
        margin: '0px',
    },
    button: {
        fontFamily: 'Open Sans',
        textTransform: 'capitalize',
        height: '30px'
    },
    attendeesContainer: {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        height: 'auto'
    },
    descriptionContainer: {
        height: '10vh',
        overflow: 'hidden'
    },
    '@keyframes pop': {
        '0%': {   
            boxShadow: '0px 0px 4px 2px rgba(45, 46, 46, .3)',
        },
        '100%': {   
            boxShadow: '0px 0px 4px 2px rgba(45, 46, 46, .5)',
        },
    },
}))