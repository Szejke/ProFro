import React, { useState } from 'react';

import { TextField, Fab, Typography, Paper, IconButton} from '@material-ui/core';

import {
    DeleteOutlined ,
    PlusOutlined,
  } from '@ant-design/icons';


  const Tags = props => {

    const MAX_NAME_LENGTH = 30
    const [tag, setTag] = useState('')
    const [tagError, setTagError] = useState(false)
    const setValidTag = string => {
        if(string.length < MAX_NAME_LENGTH ){
            setTag(string)
        }
    }

    const tagtValidate = value => {
        const validValue = value && value.replace(/\s{2,}/g,' ')
        if(value !== validValue){
            setTag(validValue)
        }
        const isError = !validValue || validValue.length < 1
        setTagError(isError)
        return isError
    }

    const onSubmit = () => {
        const tagError = tagtValidate(tag)
        if(!tagError){
            props.setTags([
                ...props.tags, 
                {
                tag: tag.toLowerCase()
            }])
            setTag('')
        }
    }

    const deleteTag = index =>{
        props.setTags(props.tags.filter((e,i) => index !== i ))

    }

    return (

        <div >
            <TextField
                key='Tag'
                variant='outlined'
                label='Tag'
                value={tag}
                error={tagError}
                helperText='Podaj Tag'
                onChange={evt => {
                    setValidTag(evt.target.value)
                }}
            />
            <Fab
            size = 'small'
            color = 'primary'
            onClick={onSubmit}
            >

            <PlusOutlined />
            </Fab> 
            {
                props.tags.length > 0 &&
            <Paper >
                <Typography>
                    Tags
                </Typography>
                {
                    props.tags.map((tag, index) =>(
                        <div key={tag+index}>
                            <Typography>
                                {index+1}. {tag.tag}
                            </Typography>
                            <IconButton
                            onClick={()=>deleteTag(index)}
                            >
                                <DeleteOutlined/>
                                </IconButton>

                        </div>
                    ))
                }
            </Paper>
            }
        </div>
    );
}

export default Tags;
