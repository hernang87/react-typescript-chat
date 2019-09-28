import Crypto from 'crypto';
import { ChatAction } from "../types";

export const TYPING_MESSAGE_START = 'TYPING_MESSAGE_START';
export const TYPING_MESSAGE_END = 'TYPING_MESSAGE_END';
export const SEND_MESSAGE_LOADING = 'SEND_MESSAGE_LOADING';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';

export const typing = (user: string): ChatAction => ({
  type: TYPING_MESSAGE_START,
  payload: {
    user
  }
});

export const send = (user: string, message: string): ChatAction => ({
  type: SEND_MESSAGE_LOADING,
  payload: {   
    id: Crypto.createHash('sha1').digest('hex'),
    user,
    message
  }
});