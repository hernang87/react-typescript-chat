import React from 'react';
import { TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import './MessageInput.scss';

type Props = {
  onInput: () => void;
  onSend: (message: string) => void;
}

type State = { 
  message: string;
}

class MessageInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      message: ''
    }

    this.onSend = this.onSend.bind(this);
  }

  onSend() {
    this.props.onSend(this.state.message);
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <div className="message-input">
        <TextField 
          multiline
          className="message-input__textfield"
          variant="outlined"
          label="Message"
          value={this.state.message}
          onKeyUp={(ev) => {
            if (ev.keyCode === 13 && this.state.message !== '') {
              ev.preventDefault()
              this.onSend();
            }
          }}
          onChange={(ev) => {
            this.setState({
              message: ev.target.value
            });
            this.props.onInput();
          }}
        />
        <Button variant="contained" disabled={this.state.message === ''} color="primary" onClick={this.onSend}>
          <SendIcon />
        </Button>
      </div>
    )
  }
}

export default MessageInput;