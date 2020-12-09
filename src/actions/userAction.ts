import { USER_TYPES } from './actionTypes';

export const getUserSaga = ({ idx = 0, isServer = false }) => ({
  type: USER_TYPES.GET_USER_SAGA,
  payload: { idx, isServer },
});

export default {
  getUserSaga,
};
