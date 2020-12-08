import produce from 'immer';
import { USER_TYPES } from '../actions/actionTypes';
import { IAction } from '../actions';

export interface IUserState {
  nextUserId: number;
  character: {
    name?: string;
    id?: string;
    username?: string;
    email?: string;
    phone?: string;
    website?: string;
  };
  isFetchedOnServer: boolean;
  error: any;
}

const INITIAL_STATE: IUserState = {
  nextUserId: 1,
  character: {},
  isFetchedOnServer: false,
  error: null,
};

const userReducer = (state = INITIAL_STATE, { type, payload }: IAction) =>
  produce(state, draft => {
    switch (type) {
      case USER_TYPES.GET_USER:
        const successPayload = payload as { data: any; isServer: boolean };
        draft.character = successPayload.data;
        draft.isFetchedOnServer = successPayload.isServer;
        break;
      default:
        return state;
    }
  });

export default userReducer;
