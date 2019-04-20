import {UiActions, UiActionTypes} from './ui.actions';

export interface UiState {
  isLoading: boolean;
}

export const initialState: UiState = {
  isLoading: false
};

export function uiReducer(state = initialState, action: UiActions): UiState {
  switch (action.type) {

    case UiActionTypes.StartLoading:
      return {isLoading: true};

    case UiActionTypes.StopLoading:
      return {isLoading: false};

    default:
      return state;
  }
}
