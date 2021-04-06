import React, { useState } from 'react';
import { Box, TextField, Button } from '@material-ui/core';
import useStyles from './styles';
import LogIn from '../../LogIn/Login';
import SignUp from '../../SignUp/SignUp';

const LoginView = (props) => {

    const { setCurrentUser } = props
    const [ logIn, setLogIn ] = useState(true)
    const styles = useStyles()
    const { loginPage } = styles

    return (
        <div className={loginPage}>
            {logIn ? ( <LogIn setCurrentUser={setCurrentUser} logIn={logIn} setLogIn={setLogIn} />) : ( <SignUp /> )}
        </div>
    )
}

export default LoginView