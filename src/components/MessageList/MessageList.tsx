import React from 'react';
import SingleMessage from '../SingleMessage/SingleMessage';
import { Message } from '../../types';

import './MessageList.scss'

type Props = {
  user: string;
  isTyping: JSX.Element | null;
  messages: Message[];
}

const MessageList: React.FC<Props> = (props: Props) => {  
  const messagesToShow = props.messages.filter((m: Message) => (
    (m.user === props.user) || (m.sent && m.read)
  )).map((m: Message, index: number) => (
    <SingleMessage key={index} me={props.user} message={m}/>
  ));

  return (
    <div className="message-list">
      { messagesToShow }
      { props.isTyping }
    </div>
  )
}

export default MessageList;