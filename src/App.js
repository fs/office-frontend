import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthContainer from './containers/Auth/AuthContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <AuthContainer />
      </Fragment>
    );
  }
}

export default App;
