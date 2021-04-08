import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core'
import { editDescription } from '../../api';

const EditDescription = (props) => {

    const { description, setDescription } = props
    const [ descriptionValue, setDescriptionValue ] = useState(description)

    const onClick = (e) => {
        const descriptionUrl = 'http://localhost:5001/descriptions/606e26dc0e99b7224ccb8fa0'
        e.preventDefault()
        setDescription(descriptionValue)
        editDescription(descriptionUrl, {content: descriptionValue})
    }

    return (
        <div>
            <form>
                <TextField 
                    multiline
                    rows={500}
                    defaultValue={description}
                    variant='outlined'
                    onChange={(e) => setDescriptionValue(e.target.value)}
                />
                <Button
                    onClick={(e) => onClick(e)}
                >
                    Update
                </Button>
            </form>
        </div>
    )
}

export default EditDescription