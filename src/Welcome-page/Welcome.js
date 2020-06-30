import React, { Component } from 'react';
import './Welcome.scss';
import WelcomeHeader from './WelcomeHeader/WelcomeHeader';
import WelcomeBackground from './WelcomeBackground/WelcomeBackground';
import shopData from '../data/shop.json';
import WelcomeNav from './WelcomeNav/WelcomeNav';

class Welcome extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: shopData,
    };
  }

  render() {
    const { shop } = this.state;
    return (
      <main className="Welcome">
        <WelcomeHeader />
        <WelcomeBackground shop={shop} />
        <WelcomeNav />
      </main>
    );
  }
}

export default Welcome;
