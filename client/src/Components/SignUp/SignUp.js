import React, {useEffect, useState, useCallback} from 'react';
import { Button, TextField, Typography, FormControl } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { createNewUser } from '../../api';
import { isMatchingPassword } from './useSignUp';
import { makeStyles } from '@material-ui/core';
import FileBase from 'react-file-base64';


const useStyles = makeStyles({
   signUpBox: {
        alignItems: 'center',
        borderRadius: '10px',
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
        textDecoration: 'none',
    },
    text: {
        textTransform: 'capitalize',
        '&:hover': {
        backgroundColor: 'transparent',
        color: '#79BEC3'
        },
    },
});


const SignUp = (props) => {

    const { currentUser, isRegistered, setIsRegistered } = props
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
        e.preventDefault()
        const newUser = { userName, password: choosePassword, firstName, lastName, email, isAdmin: false, image }
        isMatchingPassword(choosePassword, confirmPassword)
        createNewUser(newUser)
        setIsRegistered(true)
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
                    label={ currentUser ? 'Update User Name' : 'Choose User Name'}
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
                    label={ currentUser ? 'Change Password' : 'Choose Password' }
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
                {/* <div>
                   <FileBase 
                    type="file" 
                    multiple={false} 
                    onDone={({ base64 }) => setImage(base64)} 
                    />
                </div> */}
                <TextField 
                 InputLabelProps={{
                    style: {
                    fontFamily: 'Open Sans',
                    },
                }}
                    required
                    id='standard-required'
                    label={ currentUser ? 'Change First Name' : 'First Name' }
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
                    label={ currentUser ? 'Change Last Name' : 'Last Name' }
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
                    label={ currentUser ? 'Update Email Address' : 'Email Address' }
                    defaultValue='ex: joe@protonmail.com'
                    value={ email }
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Link to={ currentUser ? '/' : '/login' }  style={{ textDecoration: 'none' }}>
                    <Button 
                        classes={{ root: `${classes.text} ${classes.font}` }} 
                        onClick={() => setIsRegistered(true)}
                    >
                        Back
                    </Button>
                </Link>
                <Link to='/login'>
                    <Button 
                        href='/' 
                        classes={{ root: `${classes.font} ${classes.button}` }} 
                        onClick={(e) => handleClick(e)} 
                        variant='contained' 
                        disabled={!isComplete}
                        > 
                        {currentUser ? 'Update Info' : 'Sign Up'}
                    </Button>
                    </Link>
            </FormControl>
    )
}

export default SignUp