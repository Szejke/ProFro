import React from 'react';
import { withRouter } from 'react-router-dom'
import './../styles/topBar.less'
import { Button } from '@material-ui/core';

function TopBar(props) {

  const handleButtonClick = (path) => {
    props.history.push(path)
  }


  return (
    <div className='top-bar'>
      <h1>Nice Logo</h1>
      <div className='headerOptions'>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleButtonClick("/")}
        >
          HOME
              </Button>
        <Button
          color="primary"
          variant="contained"
          onClick={() => handleButtonClick("/form")}
        >
          New Person
              </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleButtonClick("/about")}
        >
          ABOUT
              </Button>
      </div>

    </div>
  );
};

export default withRouter(TopBar);
