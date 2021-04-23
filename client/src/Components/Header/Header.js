import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Typography, Button } from '@material-ui/core';
import freeple from '../../Assets/freeple.JPG';
import useStyles from './styles';

const Header = (props) => {

    const { isLoggedIn, setCurrentEvent } = props
    const styles = useStyles()
    const { header, button, navBar, logo } = styles

    const getButtonType = () => {
       if (isLoggedIn) {
           return (
               <Link
               style={{textDecoration: 'none', color: '#25291C'}}
               to='/login'
               >
                <Button className={button}>
                    Profile
                </Button>   
            </Link>
            )
        } else {
          return (
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
    }

    const clearCurrentEvent = useCallback(() => {
        setCurrentEvent('')
    }, [ setCurrentEvent ])

    return (
        <AppBar
            className={navBar}
            position='static'
            color='inherit'
        >
            <Link
                onClick={ clearCurrentEvent }
                style={{textDecoration: 'none', color: '#FEFEFE'}}
                to='/'
            >
                <img className={logo} src={freeple} />
            </Link>
            { getButtonType() }
        </AppBar>
    )
}

export default Header