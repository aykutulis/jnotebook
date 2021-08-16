import produce from 'immer';
import { Reducer } from 'redux';
import { BundleActionType } from '../actionTypes';
import { Action } from '../actions';

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        error: string;
      }
    | undefined;
}

const initialState: BundlesState = {};

const reducer: Reducer<BundlesState, Action> = produce((state = initialState, action) => {
  switch (action.type) {
    case BundleActionType.BUNDLE_START:
      state[action.payload.cellId] = {
        loading: true,
        code: '',
        error: '',
      };
      return;

    case BundleActionType.BUNDLE_COMPLETE:
      state[action.payload.cellId] = {
        loading: false,
        code: action.payload.bundle.code,
        error: action.payload.bundle.error,
      };
      return;

    default:
      return state;
  }
});

export default reducer;
