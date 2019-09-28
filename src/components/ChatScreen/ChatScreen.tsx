import React from 'react';
import { AppBar, Typography } from '@material-ui/core';

import MessageList from '../MessageList/MessageList';
import MessageInput from '../MessageInput/MessageInput';

import { Message } from '../../types';

import './ChatScreen.scss';

type Props = {
  user: string;
  messages: Message[];
  isTyping: string | null;
  onInput: (user: string) => void;
  onSend: (user: string, message: string) => void;
}

class ChatScreen extends React.Component<Props> {
  constructor(props: Props) {
    super(props);

    this.onInput = this.onInput.bind(this);
    this.onSend = this.onSend.bind(this);
  }

  onInput() {
    this.props.onInput(this.props.user);
  }

  onSend(message: string) {    
    this.props.onSend(this.props.user, message);
  }

  render() {
    const { isTyping, user } = this.props;
    const isTypingMessage = isTyping && isTyping !== user
      ? <p className="chat-screen__is-typing">{isTyping} is typing...</p>
      : null;

    return (
      <div className="chat-screen">
        <AppBar color="primary" position="static">
          <Typography>
            A Chat App
          </Typography>
        </AppBar>
        <MessageList
          isTyping={isTypingMessage}
          user={user}
          messages={this.props.messages}
        />
        <MessageInput
          onInput={this.onInput}
          onSend={this.onSend}
        />
      </div>
    );
  }
}

export default ChatScreen;