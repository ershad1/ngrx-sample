import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';
import {UserDetails} from '../model/user-details';
import {UserDetailsActions, UserDetailsActionTypes} from './user-details.actions';


export interface UserDetailsState extends EntityState<UserDetails> {
  loading: boolean;
}

function sortByCourseAndSeqNo(l1: UserDetails, l2: UserDetails) {
  const compare = l1.userId - l2.userId;
  if (compare != 0) {
    return compare;
  } else {
    return l1.status - l2.status;
  }
}

export const adapter: EntityAdapter<UserDetails> =
  createEntityAdapter<UserDetails>({
    sortComparer: sortByCourseAndSeqNo
  });


const initialLessonsState = adapter.getInitialState({
  loading: false
});


export function userDetailsReducer(state = initialLessonsState,
                               action: UserDetailsActions): UserDetailsState {

  switch (action.type) {


    case UserDetailsActionTypes.UserDetailsRequested:
      return {
        ...state,
        loading: true
      };

    case UserDetailsActionTypes.UserDetailsLoaded:

      return adapter.addMany(action.payload.userDetails, {...state, loading: false});

    case UserDetailsActionTypes.UserDetailsCancelled:

      return {
        ...state,
        loading: false
      };

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


