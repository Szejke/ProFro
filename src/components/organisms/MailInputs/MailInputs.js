import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addPersonAction } from 'actions';
import DropZoneFiles from 'components/molecules/DropZoneFiles/DropZoneFiles';

const StyledWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  background: white;
  padding: 2%;
`;

const StyledDropZone = styled.div`
  padding: 1rem;
`;

const StyledButton = styled.div`
  padding: 3%;
`;

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
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

const MailInputs = ({ handleClose, addPerson }) => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values, e) => {
    const form = {
      ...values,
    };
    addPerson(form);
    e.target.reset();
    handleClose();
  };

  return (
    <StyledWrapper>
      <StyledForm>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledInputs>
            <Input id="title" name="title" inputRef={register()} label="Title" variant="outlined" />
            <Input
              id="reply-adress"
              name="Reply Adress"
              inputRef={register()}
              label="Reply Adres"
              variant="outlined"
            />
            <Input
              id="areaInput"
              name=""
              multiline
              inputRef={register()}
              label="Message content"
              variant="outlined"
            />
          </StyledInputs>
          <StyledButton>
            <Button type="submit">Send Mail</Button>
          </StyledButton>
        </form>
      </StyledForm>
      <StyledDropZone>
        <DropZoneFiles />
      </StyledDropZone>
    </StyledWrapper>
  );
};

MailInputs.propTypes = {
  handleClose: PropTypes.func.isRequired,
  addPerson: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addPerson: (itemContent) => dispatch(addPersonAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(MailInputs);
