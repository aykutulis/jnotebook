import { Dispatch } from 'redux';
import { Action } from '../actions';
import { CellActionType } from '../actionTypes';
import { RootState } from '../reducers';
import { saveCells } from '../actionCreators';

export const persistMiddleware = ({
  dispatch,
  getState,
}: {
  dispatch: Dispatch<Action>;
  getState: () => RootState;
}) => {
  let timer: NodeJS.Timeout;

  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);

      const allowedActionTypes = [
        CellActionType.MOVE_CELL,
        CellActionType.UPDATE_CELL,
        CellActionType.INSERT_CELL_AFTER,
        CellActionType.DELETE_CELL,
      ];

      if (allowedActionTypes.includes(action.type as CellActionType)) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(() => {
          saveCells()(dispatch, getState);
        }, 500);
      }
    };
  };
};
