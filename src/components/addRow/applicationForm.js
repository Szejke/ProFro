import React, { useState } from 'react';
import './../../styles/content.less'
import 'antd/dist/antd.css';
import './../../styles/aplicationForm.less'
import Tags from './tags'
import { Button, TextField } from '@material-ui/core';


function FormApplication() {

  const MAX_NAME_LENGTH = 45
  const MAX_TELEPGONE_LENGTH = 10
  const MIN_NAME_LENGTH = 2

  const [firstName, setFirstName] = useState("");
  const [nameError, setNameError] = useState(false)

  const firstNameValidate = (value) => {
    const validValue = value && value.replace(/\s{2,}/g, ' ')
    if (value !== validValue) {
      setFirstName(validValue)
    }
    const isError = !validValue || validValue.length < MIN_NAME_LENGTH
    setNameError(isError)
    return isError
  }


  const setValidFrirstName = (value) => {
    if (value.length < MAX_NAME_LENGTH) {
      setFirstName(value)
    }
  }


  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const lastNameValidate = (value) => {
    const validValue = value && value.replace(/\s{2,}/g, ' ')
    if (value !== validValue) {
      setLastName(validValue)
    }
    const isError = !validValue || validValue.length < MIN_NAME_LENGTH
    setLastNameError(isError)
    return isError
  }
  const setValidLastName = (value) => {
    if (value.length < MAX_NAME_LENGTH) {
      setLastName(value)
    }
  }



  const [telephone, setTelephone] = useState('');
  const [telephoneError, setTelephoneError] = useState(false)

  const telephoneValidate = (value) => {
    value = Number(value)
    setTelephone(value)
    const isError = value < 0
    setTelephoneError(isError)
    return isError
  }
  const setValidLTelephone = (value) => {
    if (value.length < MAX_TELEPGONE_LENGTH) {
      setTelephone(value)
    }
  }


  const inputs = [
    {
      label: "FirstName",
      value: firstName,
      onChange: setValidFrirstName,
      error: nameError,
      validate: firstNameValidate,
      helperText: 'Zbyt krótka nazwa. minimum 4 znaki'
    },
    {
      label: "LastName",
      value: lastName,
      onChange: setValidLastName,
      error: lastNameError,
      validate: lastNameValidate,
      helperText: 'Zbyt krótka nazwa. minimum 4 znaki'
    },
    {
      label: "telephon",
      value: telephone,
      onChange: setValidLTelephone,
      error: telephoneError,
      validate: telephoneValidate,
      helperText: 'Podaj numer telefonu',
      type: 'number'
    }

  ]

  const [tags, setTags] = useState([])

  const acceptPerson = () => {


    if (!nameError && !lastNameError && !telephoneError) {

      const form = {
        firstName,
        lastName,
        tags: tags.map(e => e.tag),
        telephone,
      }

      fetch('http://localhost:8080/insert-dane-person', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })
        .then(response => response.json())
        .then(form => {
          console.log('Success:', form);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      setFirstName('')
      setLastName('')
      setTelephone('')
      setTags([])
    }
  }

  return (
    <div className='content' >

    <div className='aplication-form'>
      <h1>add a new candidate</h1>

      {inputs.map(input => (
        <TextField className='input'
          key={input.label}
          variant='outlined'
          label={input.label}
          value={input.value}
          error={input.error}
          helperText={input.error && input.helperText}
          onChange={evt => {
            input.onChange(evt.target.value)
            if (input.error) {
              input.validate(evt.target.value)
            }
          }}
          onBlur={() => input.validate(input.value)}
          type={input.type || 'text'}
        />
      ))}
      <Tags className='tags' key='tags'
       tags={tags}
      setTags={setTags}
      />

      <Button variant="contained" color="secondary" onClick={acceptPerson} >
        Accept
      </Button>

      </div>
    </div>
  );
}


export default FormApplication;
