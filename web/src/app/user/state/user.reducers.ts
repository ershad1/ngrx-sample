import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../model/user';
import {UserActions, UserActionTypes} from './user.actions';


export interface UserState extends EntityState<User> {
  loading: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialLessonsState: UserState = adapter.getInitialState({
  loading: false
});

export function userReducer(state = initialLessonsState, action: UserActions): UserState {

  switch (action.type) {
    case UserActionTypes.UserRequested:
      return {...state, loading: true};

    case UserActionTypes.UserLoaded:
      return adapter.addMany(action.payload.userDetails, {...state, loading: false});

    case UserActionTypes.UserCancelled:
      return {...state, loading: false};

    default:
      return state;
  }
}


export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();


