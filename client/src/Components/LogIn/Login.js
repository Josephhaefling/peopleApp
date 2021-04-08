import React, { useState, useEffect, useCallback } from 'react';
import { TextField, Button, FormControl, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom'
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
    },
    button: {
        backgroundColor: '#3F84E5',
        color: '#FFF',
        '&:hover': {
            backgroundColor: '#5D98E9'
        },
    },
      text: {
        textTransform: 'capitalize',
        '&:hover': {
        backgroundColor: 'transparent',
        color: '#5D98E9'
        },
    },
});

const LogIn = (props) => {

    const [ userName, setUserName ] = useState()
    const [ password, setPassword ] = useState()
    const [ isUser, setIsUser ] = useState(false)
    const [ isComplete, setIsComplete ] = useState()
    const { logIn, setLogIn, setCurrentUser } = props
    const classes = useStyles();
    // const [isComplete, setIsComplete] = useState();

    const handleClick = useCallback(() => setLogIn(!logIn),[])

    const onSubmit = async (e, name, passcode) => {
        e.preventDefault()
        const currentUser = await getCurrentUser(name, passcode)
        setIsUser(!isUser)
        setCurrentUser(currentUser)
    }

      useEffect(() => {
         if (userName && password) {
            setIsComplete(true)
        } else {
            setIsComplete(false)
        }
    },[userName, password])

    return (
            <FormControl classes={{ root: `${classes.font} ${classes.loginBox}` }} component='div'>
                <Typography classes={{ root: classes.titleFont }}>
                    Welcome to Freeple!
                </Typography>
                <TextField 
                 InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    required
                    classes={{ label: classes.label }} // style not working
                    label='User Name'
                    placeholder='ex: theBean'
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField 
                 InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    required
                    classes={{ label: classes.label }} // style not working
                    label='Password'
                    placeholder='ex: cff123!'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                href={isUser ? '/' : '/login'} 
                disabled={!isComplete} onClick={(e) => onSubmit(e, userName, password)} variant='contained' classes={{ root: `${classes.button} ${classes.font}` }}> 
                    Log In
                </Button>
                <Button onClick={handleClick} classes={{ root: `${classes.text} ${classes.font}` }}> 
                    Sign up
                </Button>
            </FormControl>     
    )
}

export default LogIn