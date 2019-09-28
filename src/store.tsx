import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './reducers';
import epics from './epics';

import { ChatAction, StoreState } from './types';

const epicMiddleware = createEpicMiddleware();

const store = createStore<StoreState, ChatAction, any, any>(
  reducers,
  {},
  applyMiddleware(
    thunk, 
    logger,
    epicMiddleware
  )
);

epicMiddleware.run(epics);

export default store;