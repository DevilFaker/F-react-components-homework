import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  customerMessage = (message) => {
    const replyMessage = answersData.find((answer) => answer.tags.includes(message));

    if (replyMessage !== undefined) {
      const tempMessage = this.state.messages.concat({ text: message, role: 'CUSTOMER' });

      const robotMessage = tempMessage.concat(replyMessage);

      setTimeout(() => {
        this.setState({
          shop: shopData,
          messages: robotMessage,
        });
      }, 1000);
    } else {
      this.setState((prev) => {
        const temp = prev.messages.concat({ text: message, role: 'CUSTOMER' });

        return { messages: temp };
      });
    }
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput chat={this.customerMessage} />
      </main>
    );
  }
}

export default Chat;
