import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button } from '@material-ui/core';
import useStyles from './styles';

const Header = (props) => {

    const { isLoggedIn } = props
    const styles = useStyles()
    const { header, button, navBar } = styles

    const getButtonType = () => {
       return isLoggedIn ?
        (
            <Link
                style={{textDecoration: 'none', color: '#25291C'}}
                to='/login'
            >
                <Button className={button}>
                    Profile
                </Button>   
            </Link>
        ) :
        (
            <Link
                style={{textDecoration: 'none', color: '#25291C'}}
                to='/login'
            >
                <Button className={button}>
                    Log In
                </Button>   
            </Link>
        )

    }

    return (
        <AppBar
            className={navBar}
            position='static'
            color='inherit'
        >
            <Typography className={header} element='h1'>
                <Link
                style={{textDecoration: 'none', color: '#FEFEFE'}}
                to='/'
            >
                People
            </Link>
            </Typography>
            { getButtonType() }
        </AppBar>
    )
}

export default Header