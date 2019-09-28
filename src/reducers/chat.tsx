import Crypto from 'crypto';
import moment from 'moment';

import {
  TYPING_MESSAGE_START,
  TYPING_MESSAGE_END,
  SEND_MESSAGE_LOADING,
  SEND_MESSAGE_SUCCESS
} from '../actions';

import {
  ChatAction,
  ChatState,
  Message
} from '../types';

const initialState: ChatState = {
  messages: [],
  isTyping: null
};

export default function (state: ChatState = initialState, action: ChatAction) {
  switch (action.type) {
    case TYPING_MESSAGE_START:
      return {
        ...state,
        isTyping: action.payload.user
      }
    case TYPING_MESSAGE_END:
      return {
        ...state,
        isTyping: null
      }
    case SEND_MESSAGE_LOADING:
      let message: Message = {
        id: action.payload.id || Crypto.createHash('sha1').digest('hex'),
        user: action.payload.user,
        text: action.payload.message || '',
        read: false,
        sent: true,
        time: moment().format('HH:mm')
      }

      return {
        ...state,
        messages: [...state.messages, message]
      };
    case SEND_MESSAGE_SUCCESS:                  
      const messages: Message[] = state.messages.map((e: Message) => {
        if (e.id === action.payload.id) {
          return {
            ...e,
            read: true
          }
        }
        return e;
      });            

      return {
        ...state,
        messages
      }
      
    default:
      return state;
  }
}