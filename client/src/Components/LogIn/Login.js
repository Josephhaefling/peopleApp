import React, { useState } from 'react';
import { TextField, Button, FormControl, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { getCurrentUser } from './useLogIn';

const useStyles = makeStyles({
    loginBox: {
        alignItems: 'center',
        borderRadius: 3,
        boxShadow: '0px 0px 2px 2px rgba(45, 46, 46, .2)',
        display: 'flex',
        flexDirection: 'column',
        height: '60vh',
        justifyContent: 'space-around',
        width: '50vh',
    },
    font: {
        fontFamily: 'Open Sans',
    },
    titleFont: {
        fontFamily: 'Libre Franklin'
    }
});

const LogIn = (props) => {

    const [ userName, setUserName ] = useState()
    const [ password, setPassword ] = useState()
    const { logIn, setLogIn, setCurrentUser } = props
    const classes = useStyles();
    // const [isComplete, setIsComplete] = useState();

    const handleClick = () => {
        setLogIn(!logIn)
    }

    const onSubmit = async (name, passcode) => {
        const currentUser = await getCurrentUser(name, passcode)
        setCurrentUser(currentUser)
    }

    return (
            <FormControl classes={{ root: `${classes.font} ${classes.loginBox}` }} component='div'>
                <Typography classes={{ root: classes.titleFont }}>
                    Welcome to Freeple!
                </Typography>
                <TextField 
                required
                    classes={{ label: classes.label }} // style not working
                    label='User Name'
                    placeholder='ex: theBean'
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField 
                required
                    classes={{ label: classes.label }} // style not working
                    label='Password'
                    placeholder='ex: cff123!'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={() => onSubmit(userName, password)} variant='contained' classes={{ root: classes.font }}> 
                    Log In
                </Button>
                <Button onClick={handleClick} classes={{ root: classes.font }}> 
                    Sign up
                </Button>
            </FormControl>     
    )
}

export default LogIn