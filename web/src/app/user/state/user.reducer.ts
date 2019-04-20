import * as fromRoot from '../../reducers/app.reducer';
import {User} from '../model/user';
import {UserActions, UserActionTypes} from './user.actions';

export interface UserState {
  allUsers: User[];
}

export interface State extends fromRoot.State {
  user: UserState;
}

const initialUserState: UserState = {
  allUsers: []
};

export function userReducer(state = initialUserState, action: UserActions): UserState {

  switch (action.type) {
    case UserActionTypes.UserRequested:
      return {...state};

    case UserActionTypes.UserLoaded:
      return {
        allUsers: action.payload
      };

    case UserActionTypes.UserCancelled:
      return {...state};

    default:
      return state;
  }
}


export const getAllUsers = (state: UserState) => state.allUsers;
