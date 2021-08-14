import { BundleActionType } from '../actionTypes';

export interface BundleStartAction {
  type: BundleActionType.BUNDLE_START;
  payload: {
    cellId: string;
  };
}

export interface BundleCompleteAction {
  type: BundleActionType.BUNDLE_COMPLETE;
  payload: {
    cellId: string;
    bundle: {
      code: string;
      error: string;
    };
  };
}

export type BundleAction = BundleStartAction | BundleCompleteAction;
