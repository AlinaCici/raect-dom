import React, { Component } from 'react';
import Index from './index/index'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Index}/>
      </div>
    );
  }
}

export default App;
