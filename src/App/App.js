import React, { Component } from 'react';
import './App.scss';
import Welcome from '../Welcome-page/Welcome';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
