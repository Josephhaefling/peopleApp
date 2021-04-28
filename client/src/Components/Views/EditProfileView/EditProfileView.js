import React from 'react';
import SignUp from '../../SignUp/SignUp';

const EditProfileView = (props) => {

    const { isLoggedIn, setIsLoggedIn, user } = props

    return (
        <div>
            <SignUp currentUser={ user } isLoggedIn={ isLoggedIn } setIsLoggedIn={ setIsLoggedIn } />
        </div>
    )
}

export default EditProfileView