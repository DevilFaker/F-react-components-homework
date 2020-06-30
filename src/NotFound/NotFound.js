import React, { Component } from 'react';
import './NotFound.scss';
import NotFoundHeader from './NotFoundHeader/NotFoundHeader';
import NotFoundContent from './NotFoundContent/NotFoundContent';

class NotFound extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <main className="NotFound">
        <NotFoundHeader />
        <NotFoundContent />
      </main>
    );
  }
}

export default NotFound;
