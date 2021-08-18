import React, { useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { AppBar, Button } from '@material-ui/core';
import freeple from '../../Assets/ColoradoFreeple.png';
import useStyles from './styles';

const Header = (props) => {

    const history = useHistory()
    const { currentUser, setCurrentUser, setCurrentEvent } = props
    const styles = useStyles()
    const { button, navBar, logo } = styles

    const logOut = () => {
        setCurrentUser('')
        history.push('/')
        localStorage.clear()
    }

    const getButtonType = () => {
       if (currentUser) {
           return (
               <div>

               <Link
               style={{textDecoration: 'none', color: '#25291C'}}
               to='/edit_profile'
               >
                <Button className={button}>
                    Profile
                </Button>   
            </Link>
            <Button className={button} onClick={ logOut } >
                log out
            </Button>   
            </div>
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
                className={logo}
                onClick={ clearCurrentEvent }
                style={{textDecoration: 'none', color: '#FEFEFE'}}
                to='/'
            >
                <h1>Peeple</h1>
            </Link>
            { getButtonType() }
        </AppBar>
    )
}

export default Header