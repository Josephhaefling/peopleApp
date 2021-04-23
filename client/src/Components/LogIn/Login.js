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
            backgroundColor: '#79bec3'
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
    const { isLoggedIn, setIsLoggedIn, setCurrentUser } = props
    const classes = useStyles();

    const handleClick = useCallback(() => setIsLoggedIn(!isLoggedIn),[isLoggedIn, setIsLoggedIn])

    const onSubmit = async (e, name, passcode) => {
        const currentUser = await getCurrentUser(name, passcode)
        setIsUser(!isUser)
        setCurrentUser(currentUser)
        setIsLoggedIn(true)
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
                <Link 
                    to={isUser ? '/' : '/login'} 
                    onClick={(e) => onSubmit(e, userName, password)}
                    style={ {textDecoration: 'none', border: '1px solid red'} }
                >
                    <Button 
                        disabled={!isComplete} 
                        variant='contained' 
                        classes={{ root: `${classes.button} ${classes.font}` }}
                    > 
                        Log In
                    </Button>
                </Link>
                <Button 
                    onClick={handleClick} 
                    classes={{ root: `${classes.text} ${classes.font}` }}
                > 
                    Sign up
                </Button>
            </FormControl>     
    )
}

export default LogIn