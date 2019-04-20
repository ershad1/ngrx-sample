import {Action} from '@ngrx/store';
import {User} from '../model/user';

export enum UserDetailsActionTypes {
  UserDetailsRequested = '[UserDetails Landing Page] UserDetails Page Requested',
  UserDetailsLoaded = '[UserDetails API] UserDetails Page Loaded',
  UserDetailsCancelled = '[UserDetails API] UserDetails Page Cancelled'
}

export interface PageQuery {
  page: number;         // pageIndex e.g. 0 for first page
  size: number;          // pageSize  e.g. how many row size, for example 20 row
  sort: string;          // pageSort  e.g. sort field name, for example first_name
  sortDirection: string; // sort direction for example asc or desc
}

export class UserDetailsRequested implements Action {

  readonly type = UserDetailsActionTypes.UserDetailsRequested;

  constructor(public payload: { page: PageQuery }) {
  }

}

export class UserDetailsLoaded implements Action {

  readonly type = UserDetailsActionTypes.UserDetailsLoaded;

  constructor(public payload: { userDetails: User[] }) {
  }

}

export class UserDetailsCancelled implements Action {

  readonly type = UserDetailsActionTypes.UserDetailsCancelled;

}

export type UserActions =
  UserDetailsRequested
  | UserDetailsLoaded
  | UserDetailsCancelled;
