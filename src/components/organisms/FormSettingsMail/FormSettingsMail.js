import React from 'react';
import styled from 'styled-components/macro';

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
  flex-direction: column;
`;

const StyledButton = styled.div`
  padding: 3%;
`;

const StyledH1 = styled.h1`
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

const FormSettingsMail = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values, e) => {
    const form = {
      ...values,
    };
    console.log(form);
    e.target.reset();
  };

  return (
    <StyledWrapper>
      <StyledH1> Settings Mail (SMTP) </StyledH1>
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
            name="Port"
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

FormSettingsMail.propTypes = {};

const mapDispatchToProps = (dispatch) => ({
  addPerson: (itemContent) => dispatch(addPersonAction(itemContent)),
});

export default connect(null, mapDispatchToProps)(FormSettingsMail);
