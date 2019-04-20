import {Action} from '@ngrx/store';
import {User} from '../model/user';

export enum UserActionTypes {
  UserRequested = '[User Landing Page] User Page Requested',
  UserLoaded = '[User API] User Page Loaded',
  UserCancelled = '[User API] User Page Cancelled'
}

export interface PageQuery {
  page: number;         // pageIndex e.g. 0 for first page
  size: number;          // pageSize  e.g. how many row size, for example 20 row
  sort: string;          // pageSort  e.g. sort field name, for example first_name
  sortDirection: string; // sort direction for example asc or desc
}

export class UserRequested implements Action {

  readonly type = UserActionTypes.UserRequested;

  constructor(public payload: { page: PageQuery }) {
  }

}

export class UserLoaded implements Action {

  readonly type = UserActionTypes.UserLoaded;

  constructor(public payload: { userDetails: User[] }) {
  }

}

export class UserCancelled implements Action {

  readonly type = UserActionTypes.UserCancelled;

}

export type UserActions =
  UserRequested
  | UserLoaded
  | UserCancelled;
