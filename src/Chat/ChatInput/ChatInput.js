import React, { Component } from 'react';
import './ChatInput.scss';

class ChatInput extends Component {
  onClickHandler = () => {
    const text = document.getElementById('text').value;
    this.props.chat(text);
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" id="text" />
        <button type="button" onClick={this.onClickHandler}>
          Send
        </button>
      </footer>
    );
  }
}

export default ChatInput;
