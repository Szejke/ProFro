import React, { useState } from 'react';
import styled from 'styled-components';
import ListPersonNote from 'components/organisms/ListPersonNote/ListPersonNote';
import Add from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import NewPersonBar from 'components/organisms/NewPersonBar/NewPersonBar';

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledButton = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  margin-bottom: 20px;
  margin-right: 20px;
  z-index: 800;
`;

const StyledNewPersonBar = styled.div`
  z-index: 500;
  position: fixed;
  display: flex;
  padding: 100px 50px;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 40%;
  background-color: white;
  box-shadow: 0 8px 100px rgba(36, 36, 36, 0.11);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.5s ease-in-out;
`;

const Home = () => {
  const [personBarVisible, setPersonBarVisible] = useState(false);
  const handleNewPersonBarToggle = () => setPersonBarVisible(!personBarVisible);

  return (
    <StyledWrapper>
      <ListPersonNote />
      <StyledButton>
        <Fab color="primary" aria-label="add" onClick={handleNewPersonBarToggle}>
          <Add fontSize="large" />
        </Fab>
      </StyledButton>
      <StyledNewPersonBar isVisible={personBarVisible}>
        <NewPersonBar handleClose={handleNewPersonBarToggle} />
      </StyledNewPersonBar>
    </StyledWrapper>
  );
};

export default Home;
