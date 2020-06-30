import React, { Component } from 'react';
import './WelcomeBackground.scss';

class WelcomeBackground extends Component {
  render() {
    const { shop } = this.props;
    const logoStyle = {
      backgroundImage: `url(${shop.logo})`,
    };
    return (
      <section className="WelcomeBackground">
        <div className="logo" style={logoStyle} />
        <div>starbucks星巴克</div>
      </section>
    );
  }
}

export default WelcomeBackground;
