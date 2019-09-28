import React from 'react';
import { connect } from 'react-redux';
import { ChatScreen } from './components';
import { typing, send } from './actions';
import { StoreState, Message } from './types';

import './App.scss';

type Props = {
  isTyping: string | null;
  messages: Message[];
  typing: (user: string) => void;
  send: (user: string, message: string) => void;
}

const App: React.FC<Props> = (props: Props) => {
  return (
    <div className="App">
      <ChatScreen 
        user="Rob"
        messages={props.messages}
        isTyping={props.isTyping}
        onInput={props.typing}
        onSend={props.send}
      />
      <ChatScreen 
        user="Laura"
        messages={props.messages}
        isTyping={props.isTyping}
        onInput={props.typing}
        onSend={props.send}
      />
    </div>
  );
}

const mapStateToProps = (state: StoreState) => ({
  isTyping: state.chat.isTyping,
  messages: state.chat.messages
});

const mapDispatchToProps = {
  typing,
  send
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
