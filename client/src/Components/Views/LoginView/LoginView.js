import React, { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import LogIn from '../../LogIn/Login';
import SignUp from '../../SignUp/SignUp';

const LoginView = (props) => {

    const { currentUser, setCurrentUser } = props
    const [ isLoggedIn, setIsLoggedIn ] = useState(true)
    const styles = useStyles()
    const { loginPage } = styles

    return (
        <div className={loginPage}>
            {isLoggedIn ? ( <LogIn user={currentUser} setCurrentUser={setCurrentUser} logIn={isLoggedIn} setLogIn={setIsLoggedIn} />) : ( <SignUp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> )}
        </div>
    )
}

export default LoginView