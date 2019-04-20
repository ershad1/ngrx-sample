import {Action} from '@ngrx/store';

export enum UiActionTypes {
  StartLoading = '[UI] Start Loading',
  StopLoading = '[UI] Stop Loading',
}

export class StartLoading implements Action {
  readonly type = UiActionTypes.StartLoading;
}


export class StopLoading implements Action {
  readonly type = UiActionTypes.StopLoading;
}



export type UiActions = StartLoading | StopLoading;
