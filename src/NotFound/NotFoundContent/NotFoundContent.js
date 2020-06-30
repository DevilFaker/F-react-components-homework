import React, { Component } from 'react';
import './NotFoundContent.scss';
import { Link } from 'react-router-dom';

class NotFoundContent extends Component {
  render() {
    return (
      <section className="NotFoundContent">
        <div className="logo">Comming Soon...</div>

        <Link to="/welcome">Back to Home</Link>
      </section>
    );
  }
}

export default NotFoundContent;
