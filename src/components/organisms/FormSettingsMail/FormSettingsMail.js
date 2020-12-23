import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import Button from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { addPersonAction } from 'actions';

const StyledWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  background: white;
  padding: 2%;
  width: 50%;
  flex-direction: column;
`;

const StyledButton = styled.div`
  padding: 3%;
`;

const Styledh1 = styled.h1`
  color: ${({ theme }) => theme.colorPrimary};
`;

const StyledInputs = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
`;

const Input = styled(TextField)`
  && {
    margin: 2rem 2rem 0 0;
  }
`;

const FormSettingsMail = ({ handleClose, addPerson }) => {
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
      <Styledh1> Settings Mail (SMTP) </Styledh1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StyledInputs>
          <Input
            id="hostAddres"
            name="host Address"
            inputRef={register()}
            label="Host Address"
            variant="outlined"
          />
          <Input
            id="login"
            name="Login"
            inputRef={register()}
            label="Login Mail"
            variant="outlined"
          />
          <Input
            id="password"
            name="Password"
            inputRef={register()}
            label="Password"
            variant="outlined"
          />
          <Input
            id="port"
            name=""
            multiline
            inputRef={register()}
            label="Port"
            variant="outlined"
          />
          <StyledButton>
            <Button type="submit">Send Mail</Button>
          </StyledButton>
        </StyledInputs>
      </form>
    </StyledWrapper>
  );
};

FormSettingsMail.propTypes = {
  handleClose: PropTypes.func.isRequired,
  addPerson: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addPerson: (itemContent) => dispatch(addPersonAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(FormSettingsMail);
