import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PageQuery} from './user.actions';
import * as fromUserDetails from './user.reducers';
import {UserDetailsState} from './user.reducers';

export const selectUserDetailsState = createFeatureSelector<UserDetailsState>('userDetails');


export const selectAllUserDetails = createSelector(
  selectUserDetailsState,
  fromUserDetails.selectAll
);


export const selectUserDetailsPage = (page: PageQuery) => createSelector(
  selectAllUserDetails,
  allUserDetails => {

    const start = page.page * page.size,
      end = start + page.size;

    return allUserDetails
      .slice(start, end);
  }
);


export const selectUserDetailsLoading = createSelector(
  selectUserDetailsState,
  userDetailsState => userDetailsState.loading
);
