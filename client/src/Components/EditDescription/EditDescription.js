import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TextField, Button, FormControl } from '@material-ui/core'
import { editDescription } from '../../api';
import useStyles from './styles';


const EditDescription = (props) => {
    const history = useHistory()
    const Styles = useStyles()

    const { description, setDescription } = props
    const [ descriptionValue, setDescriptionValue ] = useState(description)

    const onClick = (e) => {
        const descriptionUrl = 'http://localhost:5001/descriptions/606e26dc0e99b7224ccb8fa0'
        e.preventDefault()
        console.log('I am an event', descriptionValue)
        setDescription(descriptionValue)
        editDescription(descriptionUrl, {content: descriptionValue})
        history.push('/')
    }

    return (
        <div className={Styles.mainPage}>
            <FormControl className={Styles.formContainer}>
                    <TextField 
                        className={ Styles.titleInput }
                        multiline
                        rows={30}
                        defaultValue={description}
                        variant='outlined'
                        label='group description'
                        onChange={(e) => setDescriptionValue(e.target.value)}
                    />
                <Button
                    onClick={(e) => onClick(e)}
                >
                    Update
                </Button>
            </FormControl>
        </div>
    )
}

export default EditDescription