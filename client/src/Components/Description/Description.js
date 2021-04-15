import React, {useEffect, useState, useCallback} from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getDescription } from'./useDescription';
 
const Description = (props) => {
    const { description, setDescription } = props
    const [viewMore, setViewMore] = useState(false)
    const styles = useStyles()
    const {descriptionContainer, fullDescription, header, button} = styles

    const handleClick = () => setViewMore(!viewMore)

    const createDescription = useCallback(async () => {
        const currentDescription = await getDescription()
        setDescription(currentDescription)
    }, [ setDescription ])

    useEffect(() => {
        createDescription()
    },[ createDescription ])

    return (
        <div>
            <div className={ viewMore ? fullDescription : descriptionContainer }>
                <h3 className={header}>
                    What we are about
                </h3>
                <p> 
                    {description}
                </p>
            </div>
            <Button className={button} onClick={handleClick}>
                {!viewMore ? 'Read more' : 'Read less'}
            </Button>
            <Link to='/edit_description' style={{textDecoration: 'none'}}>
                <Button className={button}>
                    Edit
                </Button>
            </Link>
        </div>
    )
}

export default Description