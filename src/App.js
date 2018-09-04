import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthContainer from './containers/Auth/AuthContainer';
import HomeContainer from './containers/HomeContainer/HomeContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <AuthContainer />
        <HomeContainer />
      </Fragment>
    );
  }
}

export default App;
