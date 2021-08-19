import axios from 'axios';
import { Dispatch } from 'redux';
import { CellActionType } from '../actionTypes';
import { CellTypes, Cell } from '../Cell';
import { RootState } from '../reducers';
import {
  UpdateCellAction,
  DeleteCellAction,
  MoveCellAction,
  InsertCellAfterAction,
  Direction,
  Action,
} from '../actions';

export const updateCell = (id: string, content: string): UpdateCellAction => {
  return {
    type: CellActionType.UPDATE_CELL,
    payload: {
      id,
      content,
    },
  };
};

export const deleteCell = (id: string): DeleteCellAction => {
  return {
    type: CellActionType.DELETE_CELL,
    payload: id,
  };
};

export const moveCell = (id: string, direction: Direction): MoveCellAction => {
  return {
    type: CellActionType.MOVE_CELL,
    payload: {
      id,
      direction,
    },
  };
};

export const insertCellAfter = (id: string | null, cellType: CellTypes): InsertCellAfterAction => {
  return {
    type: CellActionType.INSERT_CELL_AFTER,
    payload: {
      id,
      type: cellType,
    },
  };
};

export const fetchCells = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: CellActionType.FETCH_CELLS,
  });

  try {
    const { data }: { data: Cell[] } = await axios.get('/cells');

    dispatch({
      type: CellActionType.FETCH_CELLS_COMPLETE,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CellActionType.FETCH_CELLS_ERROR,
      payload: error.message,
    });
  }
};

export const saveCells = () => async (dispatch: Dispatch<Action>, getState: () => RootState) => {
  const {
    cells: { data, order },
  } = getState();

  const cells = order.map((id) => data[id]);

  try {
    await axios.post('/cells', { cells });
  } catch (error) {
    dispatch({
      type: CellActionType.SAVE_CELLS_ERROR,
      payload: error.message,
    });
  }
};
