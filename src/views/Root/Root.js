import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import { Provider } from 'react-redux';
import store from 'store';
import About from 'views/About/About';
import Home from 'views/Home/Home';
import SystemEmails from 'views/SystemEmails/SystemEmails';
import Workers from 'views/Workers/Workers';

function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/system-emails" component={SystemEmails} />
            <Route exact path="/workers" component={Workers} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </Provider>
  );
}

export default Root;
