import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PageQuery} from './user.actions';
import * as fromUserDetails from './user.reducers';
import {UserState} from './user.reducers';

export const selectUserState = createFeatureSelector<UserState>('user');


export const selectAllUser = createSelector(
  selectUserState,
  fromUserDetails.selectAll
);


export const selectUserPage = (page: PageQuery) => createSelector(
  selectAllUser,
  allUserDetails => {

    const start = page.page * page.size,
      end = start + page.size;

    return allUserDetails
      .slice(start, end);
  }
);


export const selectUserLoading = createSelector(
  selectUserState,
  userState => userState.isLoading
);
