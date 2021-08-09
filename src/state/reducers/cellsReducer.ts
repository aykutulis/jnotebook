import { ActionType } from '../actionTypes';
import { Action } from '../actions';
import { Cell } from './../Cell';

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

const reducer = (state: CellsState = initialState, action: Action): CellsState => {
  switch (action.type) {
    case ActionType.UPDATE_CELL:
      const { id, content } = action.payload;

      return {
        ...state,
        data: {
          ...state.data,
          [id]: {
            ...state.data[id],
            content: content,
          },
        },
      };

    case ActionType.DELETE_CELL:
      return state;

    case ActionType.MOVE_CELL:
      return state;

    case ActionType.INSERT_CELL_BEFORE:
      return state;

    default:
      return state;
  }
};

export default reducer;
