import React, {useEffect, useState} from 'react';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getDescription } from'./useDescription';
 
const Description = (props) => {
    const { admin, description, setDescription } = props
    const [viewMore, setViewMore] = useState(false)
    const styles = useStyles()
    const {descriptionContainer, fullDescription, header, button} = styles

    const handleClick = () => setViewMore(!viewMore)

    const createDescription = async () => {
        const currentDescription = await getDescription()
        setDescription(currentDescription)
    }

    useEffect(() => {
        createDescription()
    },[])

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