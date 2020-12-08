import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { IAction } from '../actions';
import userReducer from './user';

interface IStoreState {
  user: object;
}

const combinedReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state: IStoreState, action: IAction) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

export default rootReducer;
