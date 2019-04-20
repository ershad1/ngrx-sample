import {UiActions, UiActionTypes} from './ui.actions';

export interface State {
  isLoading: boolean;
}

export const initialState: State = {
  isLoading: false
};

export function uiReducer(state = initialState, action: UiActions): State {
  switch (action.type) {

    case UiActionTypes.StartLoading:
      return {isLoading: true};

    case UiActionTypes.StopLoading:
      return {isLoading: false};

    default:
      return state;
  }
}

export const getIsLoading = (state: State) => state.isLoading;
