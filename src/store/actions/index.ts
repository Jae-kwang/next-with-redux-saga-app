import userAction from './userAction';

export interface IAction<T = {}> {
  type: string;
  payload?: T;
}

export { userAction };
