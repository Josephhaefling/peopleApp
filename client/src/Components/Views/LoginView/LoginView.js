import React, { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import LogIn from '../../LogIn/Login';
import SignUp from '../../SignUp/SignUp';

const LoginView = (props) => {

    const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn } = props
    const styles = useStyles()
    const { loginPage } = styles
    
    console.log('current user in login view: ', currentUser)
    return (
        <div className={loginPage}>
            { !isLoggedIn ? 
            ( 
            <LogIn currentUser={currentUser} setCurrentUser={setCurrentUser} />
            ) : 
            ( 
            <SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> 
            )
            }
        </div>
    )
}

export default LoginView