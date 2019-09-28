import React from 'react';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Message } from '../../types';

import './SingleMessage.scss';

type Props = {
  message: Message;
  me: string;
}

const SingleMessage: React.FC<Props> = (props: Props) => {
  const classNames = props.message.user === props.me 
    ? 'single-message single-message--mine'
    : 'single-message';
  const icon = props.message.sent && props.message.read
    ? <DoneAllIcon />
    : <DoneIcon />;

  return (
    <div className={classNames}>
      <div className="single-message__metadata">
        <div className="single-message__user">{props.message.user}</div>
        <div className="single-message__time">{props.message.time}</div>
      </div>
      <div className="single-message__main">
        <div className="single-message__text">{props.message.text}</div>
        { icon }
      </div>
    </div>
  );
}

export default SingleMessage;