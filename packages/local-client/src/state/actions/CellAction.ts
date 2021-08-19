import { CellActionType } from '../actionTypes';
import { CellTypes, Cell } from '../Cell';

export type Direction = 'up' | 'down';

export interface MoveCellAction {
  type: CellActionType.MOVE_CELL;
  payload: {
    id: string;
    direction: Direction;
  };
}

export interface DeleteCellAction {
  type: CellActionType.DELETE_CELL;
  payload: string;
}

export interface InsertCellAfterAction {
  type: CellActionType.INSERT_CELL_AFTER;
  payload: {
    id: string | null;
    type: CellTypes;
  };
}

export interface UpdateCellAction {
  type: CellActionType.UPDATE_CELL;
  payload: {
    id: string;
    content: string;
  };
}

export interface FetchCellsAction {
  type: CellActionType.FETCH_CELLS;
}

export interface FetchCellsCompleteAction {
  type: CellActionType.FETCH_CELLS_COMPLETE;
  payload: Cell[];
}

export interface FetchCellsErrorAction {
  type: CellActionType.FETCH_CELLS_ERROR;
  payload: string;
}

export interface SaveCellsErrorAction {
  type: CellActionType.SAVE_CELLS_ERROR;
  payload: string;
}

export type CellAction =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | UpdateCellAction
  | FetchCellsAction
  | FetchCellsCompleteAction
  | FetchCellsErrorAction
  | SaveCellsErrorAction;
