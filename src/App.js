import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeContainer from './containers/HomeContainer/HomeContainer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <HomeContainer />
      </Fragment>
    );
  }
}

export default App;
