import {createFeatureSelector, createSelector} from '@ngrx/store';
import {PageQuery} from './user.actions';
import * as fromUser from './user.reducer';
import {UserState} from './user.reducer';

export const selectUserState = createFeatureSelector<UserState>('user');


export const selectAllUser = createSelector(
  selectUserState,
  fromUser.getAllUsers
);


export const selectUserPage = (page: PageQuery) => createSelector(
  selectAllUser,
  allUsers => {

    const start = page.page * page.size,
      end = start + page.size;

    return allUsers
      .slice(start, end);
  }
);


/*
export const selectUserLoading = createSelector(
  selectUserState,
  userState => userState.isLoading
);
*/
