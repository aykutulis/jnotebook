import { ActionType } from '../actionTypes';
import { CellTypes } from '../Cell';

export type Direction = 'up' | 'down';

export interface MoveCellAction {
  type: ActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
}

export interface DeleteCellAction {
  type: ActionType.DELETE_CELL;
  payload: string;
}

export interface InsertCellAfterAction {
  type: ActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: ActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export type Action = MoveCellAction | DeleteCellAction | InsertCellAfterAction | UpdateCellAction;
