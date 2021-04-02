import { makeStyles } from '@material-ui/core';

export default makeStyles(() => ({
    event: {
        borderRadius: 3,
        boxShadow: '0px 0px 3px 2px rgba(45, 46, 46, .3)',
        height: '25vh',
        width: '44vw',
        '&:hover': {
            animationName: `$pop`,
            animationDuration: '.5s',
            animationTimingFunction: 'ease',
            animationFillMode: 'forwards'
        }    
    },
    header: {
        color: '#3F84E5'
    },
    attendeesContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 'auto'
    },
    '@keyframes pop': {
        '0%': {   
            boxShadow: '0px 0px 4px 2px rgba(45, 46, 46, .3)',
            // height: '25vh',
            // width: '44vw' 
        },
        '100%': {   
            boxShadow: '0px 0px 4px 2px rgba(45, 46, 46, .5)',
            // height: '25.2vh',
            // width: '44.2vw' 
        },
    },
}))