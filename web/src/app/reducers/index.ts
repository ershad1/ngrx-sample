import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../environments/environment';
import * as fromUi from '../shared/state/ui/ui.reducer';

export interface AppState {
  ui: fromUi.State;

}

export const reducers: ActionReducerMap<AppState> = {
  // router: routerReducer,
  ui: fromUi.uiReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [storeFreeze] : [];
