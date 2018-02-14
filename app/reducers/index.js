// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import library from './library';
import select_game from './select_game';

const rootReducer = combineReducers({
  library,
  select_game,
  router
});

export default rootReducer;
