import React, {useState} from 'react';
import useStyles from './styles';
import { Button, Typography } from '@material-ui/core';
 
const Description = () => {

    const [viewMore, setViewMore] = useState(false)
    const styles = useStyles()
    const {description, fullDescription, header} = styles

    const handleClick = () => setViewMore(!viewMore)

    return (
        <div>
            <div className={ viewMore ? fullDescription : description }>
                <h3 className={header}>
                    What we are about
                </h3>
                <p> 
                    Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet. Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet. 
                    Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet. Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet.Colorado Freedom Family is dope AF and you can kick us off of Meetup but we are still on the internet. 
                </p>
            </div>
            <Button onClick={handleClick}>{!viewMore ? 'Read more' : 'Read less'}</Button>
        </div>
    )
}

export default Description