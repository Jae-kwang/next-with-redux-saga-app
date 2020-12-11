import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import userReducer from './user';

const combinedReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state: any, action: any) => {
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

export type RootState = ReturnType<typeof rootReducer>;
