import React from 'react';
import styled from 'styled-components/macro';
// import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addPersonAction } from 'actions';
import DropZoneFiles from 'components/molecules/DropZoneFiles/DropZoneFiles';

const StyledWrapper = styled.div`
  margin-top: 20px;
  background: white;
  padding: 2%;
`;

const StyledDropZone = styled.div`
  display: flex;
  width: 100%;
  align-self: center;
`;

const StyledForm = styled.form`
  display: flex;
`;
const StyledInputs = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const StyledButton = styled.div`
  align-self: flex-end;
  padding-left: 5rem;
`;

const Input = styled(TextField)`
  && {
    margin: 2rem 2rem 0 0;
  }
`;

const MailInputs = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values, e) => {
    const form = {
      ...values,
    };
    console.log(form);
    // addPerson(form);
    e.target.reset();
    // handleClose();
  };

  return (
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
            name="Area Input"
            multiline
            inputRef={register()}
            label="Message content"
            variant="outlined"
            rows={10}
            rowsMin={10}
          />
        </StyledInputs>
        <StyledDropZone>
          <DropZoneFiles />
          <StyledButton>
            <Button type="submit"> PDF Analysis </Button>
          </StyledButton>
        </StyledDropZone>
      </StyledForm>
    </StyledWrapper>
  );
};

MailInputs.propTypes = {
  // handleClose: PropTypes.func.isRequired,
  // addPerson: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addPerson: (itemContent) => dispatch(addPersonAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(MailInputs);
