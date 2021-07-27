import React, { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import LogIn from '../../LogIn/Login';
import SignUp from '../../SignUp/SignUp';

const LoginView = (props) => {

    const { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn, isRegistered, setIsRegistered } = props
    const styles = useStyles()
    const { loginPage } = styles
    
    return (
        <div className={loginPage}>
            { isRegistered ? 
            ( 
            <LogIn 
                currentUser={ currentUser } 
                setCurrentUser={ setCurrentUser } 
                isRegistered={ isRegistered }
                setIsRegistered={ setIsRegistered }
                isLoggedIn= { isLoggedIn }
                setIsLoggedIn={ setIsLoggedIn }
            />
            ) : 
            ( 
            <SignUp 
                isLoggedIn={isLoggedIn} 
                setIsLoggedIn={setIsLoggedIn} 
                isRegistered={ isRegistered }
                setIsRegistered={ setIsRegistered }
            /> 
            )
            }
        </div>
    )
}

export default LoginView