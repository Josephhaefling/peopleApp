import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Typography, Container,  } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { GoogleLogin } from 'react-google-login'
import { signIn, signUp } from '../../api';
import Icon from './icon'
import Input from './input';
import useStyles from './styles';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '', 
    confirmPassword: '',
}

const Login = (props) => {

    const classes = useStyles()
    const { setCurrentUser, users } = props
    const [ isSignUp, setIsSignUp ] = useState(false)
    const [ auth, setAuth ] = useState()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ formData, setFormData ] = useState(initialState)
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!isSignUp) {
            const userInfo = await signIn(formData)
            setCurrentUser(userInfo.data.result)
            history.push('/')
        } else {
            console.log('Oops something went wrong')
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp )
        handleShowPassword(false)
    }

    const googleSuccess = async (res) =>    {
        const result = res?.profileObj 
        const token = res?.tokenId

        try {
            setAuth({ result, token })
            localStorage.setItem('profile', JSON.stringify({ result, token}))
            const validUser = users.find(user => user.email === result.email )
            setCurrentUser(validUser)
            history.push('/')
        } catch(err) {
            console.log(err)
        }
    }

    const googleFailure = () => {
        console.log('Google Sign In was unseccessful. Try Again Later')
    }
    return (
            <Container component='main' maxWidth='xs'>
                <Paper className={classes.paper} elevation={3} >
                    <Avatar className={classes.avatar} >
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>
                       {isSignUp ?  'Sign Up' : 'Sign In'} 
                    </Typography>
                    <form className={ classes.form } onSubmit={ handleSubmit}>
                        <Grid style={{ 
                            height: '40vh', 
                            display: 'flex',
                            justifyContent: 'center',
                            }} container spacing={3}>
                            {isSignUp ? (
                                <div 
                                    styles={{   height: '50vh', 
                               }} 
                                >
                                    <Input 
                                        name='firstName'
                                        label='firstName'
                                        handleChange={ handleChange }
                                        autoFocus 
                                        half
                                    />
                                    <Input 
                                        name='lastName' 
                                        label='lastName' 
                                        handleChange={ handleChange }
                                        half
                                    />
                                    <Input 
                                        name='email' 
                                        label='email' 
                                        handleChange={ handleChange }
                                        half
                                        type='email'
                                    />
                                    <Input 
                                        name='password' 
                                        label='password' 
                                        handleChange={ handleChange }
                                        type={showPassword ? 'text' : 'password'}
                                        handleShowPassword={ handleShowPassword }
                                    />
                                    { isSignUp && 
                                        <Input 
                                            name='confirmPassword' 
                                            label=' confirm password' 
                                            handleChange={ handleChange }
                                            type={showPassword ? 'text'     : 'password'}
                                            handleShowPassword={    handleShowPassword }
                                        />
                                    }
                                </div>
                            ) : (
                            <div style={
                                {
                                    height: '200px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }
                            } >
                                <Input 
                                    name='email' 
                                    label='email' 
                                    handleChange={ handleChange }
                                    type='email'
                                    styled={{marginTop: '20px'}}
                                />
                                <Input 
                                    name='password' 
                                    label='password' 
                                    handleChange={ handleChange }
                                    type={showPassword ? 'text' : 'password'}
                                    handleShowPassword={ handleShowPassword }
                                />

                            </div>
                            )}
                        </Grid>
                        <GoogleLogin 
                            clientId='367353688875-fo9tdv3esucsi1uf3fasei2v9q0avtg3.apps.googleusercontent.com'
                            render={(renderProps) => (
                                <Button 
                                    className={classes.googleButton} 
                                    fullwidth 
                                    onClick={ renderProps.onClick } 
                                    // disabled={ renderProps.disabled }
                                    startIcon={<Icon />}
                                    variant='contained'
                                    style={{marginBottom: '20px'}}
                                >
                                    Google Sign In
                                </Button>
                            )}
                            onSuccess={ googleSuccess }
                            onFailure={ googleFailure }
                            cookiePolicy='single_host_origin'
                        />
                        <Button 
                            className={ classes.submit }
                            type='submit' 
                            fullwidth 
                            variant='contained' 
                        >
                                {isSignUp ? 'Sign Up' : 'Sign In'}
                        </Button>
                        <Grid container justify='flex-end'>
                            <Grid  item>
                                    <Button
                                        onClick={ switchMode }
                                    >
                                        {isSignUp ? 'Already Have an ACcount? Sign In' : "Don't have an account? Sign Up"}
                                    </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
    )
}

export default Login