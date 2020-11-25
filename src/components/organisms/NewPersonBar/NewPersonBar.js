import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import InputArray from 'components/molecules/InputArray/InputArray';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addPersonAction } from 'actions';

const StyledWrapper = styled.div`
  display: flex;
  background: white;
  padding: 2%;
  flex-direction: column;
`;

const StyledButton = styled.div`
  padding: 3%;
`;

const Styledh1 = styled.h1`
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledInputs = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled(TextField)`
  && {
    margin: 2rem 2rem 0 0;
  }
`;

const NewPersonBar = ({ handleClose, addPerson }) => {
  const id = 'id';
  const [relationWords, setRelationWords] = useState([]);
  const label = 'Word Relation';
  const variant = 'outlined';

  const { handleSubmit, register } = useForm();

  const onSubmit = (values, e) => {
    const form = {
      ...values,
      relationWords,
    };
    addPerson(form);
    relationWords.length = 0;
    e.target.reset();
    handleClose();
  };

  return (
    <StyledWrapper>
      <Styledh1> Create New Worker </Styledh1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInputs>
          <Input id="title" name="title" inputRef={register()} label="Title" variant="outlined" />

          <Input
            id="awatar-url"
            name="awatarUrl"
            inputRef={register()}
            label="Awatar Url"
            variant="outlined"
          />
          <Input
            id="mail"
            label="Mail"
            variant="outlined"
            name="mail"
            inputRef={register({ required: true })}
          />
          <Input
            id="positionJob"
            label="Position Job"
            variant="outlined"
            name="positionJob"
            inputRef={register({ required: true })}
          />
          <InputArray
            id={id}
            label={label}
            tags={relationWords}
            setTags={setRelationWords}
            variant={variant}
          />
          <StyledButton>
            <Button type="submit">Add Person</Button>
          </StyledButton>
        </StyledInputs>
      </form>
    </StyledWrapper>
  );
};

NewPersonBar.propTypes = {
  handleClose: PropTypes.func.isRequired,
  addPerson: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addPerson: (itemContent) => dispatch(addPersonAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(NewPersonBar);
