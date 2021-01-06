import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { Provider } from 'react-redux';
import store from 'store';
import About from 'views/About/About';
import Home from 'views/Home/Home';
import SystemEmails from 'views/SystemEmails/SystemEmails';
import SettingsMail from 'views/SettingsMail/SettingsMail';
import Employees from 'views/Employees/Employees';
import LeftSidebar from 'components/organisms/LeftSidebar/LeftSidebar';
import styled from 'styled-components/macro';

const StyledEmails = styled.div`
  display: flex;
`;

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/Employees" component={Employees} />
            <StyledEmails>
              <LeftSidebar />
              <Route exact path="/system-emails" component={SystemEmails} />
              <Route exact path="/setting-emails" component={SettingsMail} />
            </StyledEmails>
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
