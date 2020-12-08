import { USER_TYPES } from './actionTypes';
import { IAction } from '../actions';

export const getUserSaga = ({ idx, isServer = false }) => ({
  type: USER_TYPES.GET_USER_SAGA,
  payload: { idx, isServer },
});

export default {
  getUserSaga,
};
