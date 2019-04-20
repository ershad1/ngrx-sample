import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {UserDetails} from '../model/user-details';
import {UserDetailsActions, UserDetailsActionTypes} from './user-details.actions';


export interface UserDetailsState extends EntityState<UserDetails> {
  loading: boolean;
}

export const adapter: EntityAdapter<UserDetails> =
  createEntityAdapter<UserDetails>();

const initialLessonsState = adapter.getInitialState({
  loading: false
});

export function userDetailsReducer(state = initialLessonsState, action: UserDetailsActions): UserDetailsState {

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


