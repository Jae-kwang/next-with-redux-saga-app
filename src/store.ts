import { createStore, applyMiddleware, Store } from 'redux';
import { MakeStore, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware, { Task } from 'redux-saga';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

export interface SagaStore extends Store {
  sagaTask: Task;
}

export const makeStore: MakeStore = () => {
  // 1: 미들웨어 생성
  const sagaMiddleware = createSagaMiddleware();

  // 2: 미들웨어 적용을 위한 추가 파라미터 설정
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  // 3: 서버에서 사가 실행
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  // 4: 스토어 리턴
  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
