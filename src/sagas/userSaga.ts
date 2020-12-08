import { USER_TYPES } from '../actions/actionTypes';
import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

function* getUser(action) {
  const { idx, isServer } = action.payload;
  const { data } = yield call(
    axios.get,
    `https://jsonplaceholder.typicode.com/users/${idx}`
  );

  const payload = {
    data,
    isServer,
  };
  yield put({ type: USER_TYPES.GET_USER, payload });
}

export function* getUserSaga() {
  yield takeEvery(USER_TYPES.GET_USER_SAGA, getUser);
}
