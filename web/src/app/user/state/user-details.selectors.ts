import {createFeatureSelector, createSelector} from '@ngrx/store/src/selector';
import {PageQuery} from './user-details.actions';
import {UserDetailsState} from './user-details.reducers';
import * as fromUserDetails from './user-details.reducers';

export const selectUserDetailsState = createFeatureSelector<UserDetailsState>('userDetails');


export const selectAllLessons = createSelector(
  selectUserDetailsState,
  fromUserDetails.selectAll

);


export const selectUserDetailsPage = (page:PageQuery) => createSelector(
  selectAllLessons,
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
