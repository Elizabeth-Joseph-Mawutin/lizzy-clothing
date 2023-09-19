import {rootReducer} from './root-reducer'

import {legacy_createStore, compose, applyMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';

const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(rootReducer, undefined, composedEnhancers);

export default store;