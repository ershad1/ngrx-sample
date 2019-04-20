import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {User} from '../model/user';
import {UserActions, UserDetailsActionTypes} from './user.actions';


export interface UserDetailsState extends EntityState<User> {
  loading: boolean;
}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

const initialLessonsState: UserDetailsState = adapter.getInitialState({
  loading: false
});

export function userDetailsReducer(state = initialLessonsState, action: UserActions): UserDetailsState {

  switch (action.type) {
    case UserDetailsActionTypes.UserDetailsRequested:
      return {...state, loading: true};

    case UserDetailsActionTypes.UserDetailsLoaded:
      return adapter.addMany(action.payload.userDetails, {...state, loading: false});

    case UserDetailsActionTypes.UserDetailsCancelled:
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


