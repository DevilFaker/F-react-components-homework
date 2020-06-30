import React, { Component } from 'react';
import './WelcomeNav.scss';
import { Link } from 'react-router-dom';

class WelcomeNav extends Component {
  render() {
    return (
      <div className="WelcomeNav">
        <Link to="/chat">客服</Link>
        <Link to="/not-found">6.18活动</Link>
        <Link to="/not-found">关于我们</Link>
      </div>
    );
  }
}

export default WelcomeNav;
