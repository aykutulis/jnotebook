import { CellActionType } from '../actionTypes';
import { Action } from '../actions';
import { Cell } from './../Cell';
import { Reducer } from 'redux';
import produce from 'immer';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer: Reducer<CellsState, Action> = produce((state = initialState, action) => {
  switch (action.type) {
    case CellActionType.UPDATE_CELL:
      const { id, content } = action.payload;
      state.data[id].content = content;
      return;

    case CellActionType.DELETE_CELL:
      delete state.data[action.payload];
      state.order = state.order.filter((id) => id !== action.payload);
      return;

    case CellActionType.MOVE_CELL:
      const { direction } = action.payload;
      const index = state.order.indexOf(action.payload.id);
      const targetIndex = direction === 'up' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) return;

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;

      return;

    case CellActionType.INSERT_CELL_AFTER:
      const cell: Cell = {
        content: '',
        type: action.payload.type,
        id: generateRandomId(),
      };

      state.data[cell.id] = cell;

      const foundIndex = state.order.indexOf(action.payload.id!);

      if (foundIndex < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(foundIndex + 1, 0, cell.id);
      }

      return;

    case CellActionType.FETCH_CELLS:
      state.loading = true;
      state.error = null;

      return;

    case CellActionType.FETCH_CELLS_COMPLETE:
      state.order = action.payload.map((cell) => cell.id);
      state.data = action.payload.reduce((acc, cell) => {
        acc[cell.id] = cell;
        return acc;
      }, {} as CellsState['data']);

      return;

    case CellActionType.FETCH_CELLS_ERROR:
      state.loading = false;
      state.error = action.payload;

      return;

    case CellActionType.SAVE_CELLS_ERROR:
      state.error = action.payload;

      return;

    default:
      return state;
  }
});

const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export default reducer;
