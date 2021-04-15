import React, {useEffect, useState, useCallback} from 'react';
import { Button, formatMs, TextField, Typography, FormControl } from '@material-ui/core';
import { createNewUser } from '../../api';
import { isMatchingPassword } from './useSignUp';
import { makeStyles } from '@material-ui/core';
import FileBase from 'react-file-base64';


const useStyles = makeStyles({
   signUpBox: {
        alignItems: 'center',
        borderRadius: 3,
        boxShadow: '0px 0px 2px 2px rgba(45, 46, 46, .2)',
        display: 'flex',
        flexDirection: 'column',
        height: '75vh',
        justifyContent: 'space-around',
        width: '50vh',
    },
    boxTitle: {
        fontFamily: 'Libre Franklin',
    },
    button: {
        marginTop: '5px',
        marginBottom: '5px'
    },
    font: {
        fontFamily: 'Open Sans',
    },
    text: {
        textTransform: 'capitalize',
        '&:hover': {
        backgroundColor: 'transparent',
        color: '#5D98E9'
        },
    },
});


const SignUp = (props) => {

    const { isLoggedIn, setIsLoggedIn } = props
    const classes = useStyles();
    const [ userName, setUserName ] = useState('')
    const [ choosePassword, setChoosePassword ] = useState('')
    const [ confirmPassword, setConfirmPassword ] = useState('')
    const [ firstName, setFirstName ] = useState('')
    const [ lastName, setLastName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [isComplete, setIsComplete] = useState()
    const [ image, setImage ] = useState()

    const onChange = (e) => {
        //There is a probably a dynaimc way to handle text input changes
    }
        const clearForm = useCallback(() => {
        setChoosePassword('')
        setConfirmPassword('')
        setEmail('')
        setUserName('')
        setFirstName('')
        setLastName('')
    },[])

    const handleClick = useCallback((e) => {
        // I am gonna sign a user up
        const newUser = { userName, password: choosePassword, firstName, lastName, email, isAdmin: false, image }
        isMatchingPassword(choosePassword, confirmPassword)
        createNewUser(newUser)
        clearForm()
    },[choosePassword, clearForm, confirmPassword, email, firstName, lastName, userName, image])

    useEffect(() => {
         if (userName && choosePassword && confirmPassword && firstName) {
            setIsComplete(true);
        } 
    },[choosePassword, confirmPassword, firstName, userName])

    return (
        <FormControl classes={{ root: classes.signUpBox }} component='div'>
                <Typography classes={{ root: classes.boxTitle }}>Sign Up</Typography>
                <TextField 
                InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    required
                    id='standard-required'
                    label='Choose User Name'
                    value={ userName }
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField 
                 InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    required
                    id='standard-required'
                    label='Choose Password'
                    defaultValue='ex: cff123!'
                    value={ choosePassword }
                    onChange={(e) => setChoosePassword(e.target.value)}
                />
                <TextField 
                 InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    required
                    id='standard-required'
                    label='Confirm Password'
                    defaultValue='ex: cff123!'
                    value={ confirmPassword }
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <div>
                   <FileBase 
                    type="file" 
                    multiple={false} 
                    onDone={({ base64 }) => 
                    setImage(base64 )} 
                    />
                </div>
                <TextField 
                 InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    required
                    id='standard-required'
                    label='First Name'
                    defaultValue='ex: cff123!'
                    value={ firstName }
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <TextField 
                 InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    id='standard-required'
                    label='Last Name'
                    defaultValue='ex: cff123!'
                    value={ lastName }
                    onChange={(e) => setLastName(e.target.value)}
                />
                <TextField 
                 InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    id='standard-required'
                    label='Email'
                    defaultValue='ex: joe@protonmail.com'
                    value={ email }
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Button classes={{ root: `${classes.text} ${classes.font}` }} onClick={() => setIsLoggedIn(!isLoggedIn)}>Back</Button>
                <Button href='/' classes={{ root: `${classes.font} ${classes.button}` }} onClick={(e) => handleClick(e)} variant='contained' disabled={!isComplete}> 
                    Sign Up
                </Button>
            </FormControl>
    )
}

export default SignUp