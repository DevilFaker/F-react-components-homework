import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from '../Welcome-page/Welcome';
import NotFound from '../NotFound/NotFound';
import Chat from '../Chat/Chat';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <Router>
          <Switch>
            <Route path="/not-found" component={NotFound} />
            <Route path="/chat" component={Chat} />
            <Route path="/" component={Welcome} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
