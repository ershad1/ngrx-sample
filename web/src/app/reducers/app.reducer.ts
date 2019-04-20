import {routerReducer} from '@ngrx/router-store';
import {ActionReducerMap, MetaReducer} from '@ngrx/store';
import {storeFreeze} from 'ngrx-store-freeze';
import {environment} from '../../environments/environment';
import * as fromUi from '../shared/state/ui/ui.reducer';

export interface State {
  ui: fromUi.State;

}

export const reducers: ActionReducerMap<State> = {
  // router: routerReducer,
  ui: fromUi.uiReducer
};


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];
