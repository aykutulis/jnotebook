import React from 'react';
import { CellList } from './components/CellList';
import { Provider } from 'react-redux';
import { store } from './state';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CellList />
    </Provider>
  );
};
