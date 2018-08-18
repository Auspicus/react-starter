import React, { Component } from 'react';
import Helmet from 'react-helmet';

import ExampleComponent from '../../components/ExampleComponent';

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet title="React Starter" />
        <ExampleComponent />
      </React.Fragment>
    );
  }
}

export default Home;
