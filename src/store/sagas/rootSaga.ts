import { all } from 'redux-saga/effects';

import { getUserSaga } from './user';

export default function* rootSaga() {
  yield all([getUserSaga()]);
}
