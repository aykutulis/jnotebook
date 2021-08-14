import bundler from '../../bundler';
import { Dispatch } from 'redux';
import { BundleAction } from '../actions';
import { BundleActionType } from '../actionTypes';

export const createBundle = (cellId: string, input: string) => async (dispatch: Dispatch<BundleAction>) => {
  dispatch({
    type: BundleActionType.BUNDLE_START,
    payload: {
      cellId,
    },
  });

  const result = await bundler(input);

  dispatch({
    type: BundleActionType.BUNDLE_COMPLETE,
    payload: {
      cellId,
      bundle: result,
    },
  });
};
