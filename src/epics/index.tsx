import { combineEpics } from 'redux-observable';
import { mapTo, debounceTime, delay, map } from 'rxjs/operators';
import {
  TYPING_MESSAGE_START,
  TYPING_MESSAGE_END,
  SEND_MESSAGE_LOADING,
  SEND_MESSAGE_SUCCESS
} from '../actions';
import { ChatAction } from '../types';

const typingEpic = (action$: any) =>
  action$
    .ofType(TYPING_MESSAGE_START)
    .pipe(
      debounceTime(1000),
      mapTo((dispatch: any) => 
        dispatch({ type: TYPING_MESSAGE_END })
      ));

const sendMessageEpic = (action$: any) =>
  action$
    .ofType(SEND_MESSAGE_LOADING)
    .pipe(
      delay(1000),
      map((action: ChatAction) => {
        console.log('a', action)
        return {
          type: SEND_MESSAGE_SUCCESS,
          payload: action.payload
        }
      })
    );
    
      


export default combineEpics(typingEpic, sendMessageEpic);